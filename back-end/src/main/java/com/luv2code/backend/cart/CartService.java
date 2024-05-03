package com.luv2code.backend.cart;

import com.luv2code.backend.dao.CartItemRepository;
import com.luv2code.backend.dao.CartRepository;
import com.luv2code.backend.dao.MenuItemRepository;
import com.luv2code.backend.entity.Cart;
import com.luv2code.backend.entity.CartItem;
import com.luv2code.backend.entity.MenuItem;
import com.luv2code.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    private final CartItemRepository cartItemRepository;

    public CartService(CartRepository cartRepository, CartItemRepository cartItemRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
    }



    @Autowired
    private MenuItemRepository menuItemRepository;

    public void addToCart(User user, Long itemId, int quantity) {
        Cart cart = cartRepository.findByUser(user);
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
        }

        MenuItem menuItem = menuItemRepository.findById(itemId)
                .orElseThrow(() -> new IllegalArgumentException("Item not found"));

        CartItem existingItem = cart.getCartItems().stream()
                .filter(item -> item.getMenuItem().getId().equals(itemId))
                .findFirst()
                .orElse(null);

        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
        } else {
            CartItem cartItem = new CartItem();
            cartItem.setMenuItem(menuItem);
            cartItem.setQuantity(quantity);
            cartItem.setCart(cart);
            cart.getCartItems().add(cartItem);
        }
        cartRepository.save(cart);
    }


        public void removeFromCart(User user, Long itemId, int quantity) {
            Cart cart = cartRepository.findByUser(user);
            if (cart == null) {
                return;
            }

            CartItem cartItemToRemove = null;
            for (CartItem cartItem : cart.getCartItems()) {
                if (cartItem.getMenuItem().getId().equals(itemId)) {
                    if (cartItem.getQuantity() <= quantity) {
                        cartItemToRemove = cartItem;
                        break;
                    } else {
                        cartItem.setQuantity(cartItem.getQuantity() - quantity);
                        cartRepository.save(cart);
                        return;
                    }
                }
            }

            if (cartItemToRemove != null) {
                cart.getCartItems().remove(cartItemToRemove);
                cartRepository.save(cart);
                cartItemRepository.delete(cartItemToRemove);
            }
        }
    }
