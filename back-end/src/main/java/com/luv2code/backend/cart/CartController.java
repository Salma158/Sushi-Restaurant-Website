package com.luv2code.backend.cart;
import com.luv2code.backend.entity.CartItem;
import com.luv2code.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("api/add-to-cart")
    public ResponseEntity<String> addToCart(
            @AuthenticationPrincipal User user,
            @RequestBody AddToCartRequest addToCartRequest) {
        try {
            cartService.addToCart(user, addToCartRequest.getItemId(), addToCartRequest.getQuantity());
            return ResponseEntity.ok("Item(s) added to cart successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while adding item to cart");
        }
    }

    @DeleteMapping("/removeItem")
    public ResponseEntity<String> removeItemFromCart(@AuthenticationPrincipal User user, @RequestBody RemoveCartItemRequest request) {
        cartService.removeFromCart(user, request.getItemId(), request.getQuantity());
        return ResponseEntity.ok("Item removed from the cart successfully.");
    }


    @GetMapping("api/getItems")
    public ResponseEntity<CartResponse> getCartItemsForCurrentUser(@AuthenticationPrincipal User user) {
        CartResponse cartResponse = cartService.getCartItemsForUser(user);
        if (cartResponse != null) {
            return new ResponseEntity<>(cartResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}