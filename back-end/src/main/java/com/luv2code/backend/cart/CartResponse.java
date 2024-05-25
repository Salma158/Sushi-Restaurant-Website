package com.luv2code.backend.cart;

import com.luv2code.backend.entity.CartItem;
import java.math.BigDecimal;
import java.util.List;

public class CartResponse {
    private List<CartItem> cartItems;
    private BigDecimal totalPrice;

    public CartResponse(List<CartItem> cartItems, BigDecimal totalPrice) {
        this.cartItems = cartItems;
        this.totalPrice = totalPrice;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }
}
