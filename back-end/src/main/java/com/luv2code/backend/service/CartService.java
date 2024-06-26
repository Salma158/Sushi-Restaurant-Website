package com.luv2code.backend.service;

import com.luv2code.backend.repository.CartItemRepository;
import com.luv2code.backend.repository.CartRepository;
import com.luv2code.backend.repository.MenuItemRepository;
import com.luv2code.backend.dto.CartResponse;
import com.luv2code.backend.entity.Cart;
import com.luv2code.backend.entity.CartItem;
import com.luv2code.backend.entity.MenuItem;
import com.luv2code.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

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
        if(user != null){
            System.out.println(user.getId());
        }
        Cart cart = cartRepository.findByUser(user);
        if (cart == null) {
            cart = new Cart();
            cart.setUser(user);
            cart.setTotalPrice(BigDecimal.ZERO);

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
        BigDecimal totalPrice = calculateTotalPrice(cart);
        cart.setTotalPrice(totalPrice);
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
                cartItemToRemove = cartItem;
                break;
            }
        }

        if (cartItemToRemove != null) {
            if (quantity <= 1) {
                cart.getCartItems().remove(cartItemToRemove);
                cartItemRepository.delete(cartItemToRemove);
            } else {
                cartItemToRemove.setQuantity(cartItemToRemove.getQuantity() - quantity);
            }
            cartRepository.save(cart);
        }
        BigDecimal totalPrice = calculateTotalPrice(cart);
        cart.setTotalPrice(totalPrice);
    }



    public CartResponse getCartItemsForUser(User user) {
        Cart cart = cartRepository.findByUserWithCartItems(user);
        if (cart != null) {
            BigDecimal totalPrice = cart.getTotalPrice();
            return new CartResponse(cart.getCartItems(), totalPrice);
        }
        return null;
    }
    private BigDecimal calculateTotalPrice(Cart cart) {
        return cart.getCartItems().stream()
                .map(item -> item.getMenuItem().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

}
