package com.luv2code.backend.cart;

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
}
