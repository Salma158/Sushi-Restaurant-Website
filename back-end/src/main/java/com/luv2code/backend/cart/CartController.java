package com.luv2code.backend.cart;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.luv2code.backend.entity.CartItem;
import com.luv2code.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonResponse = objectMapper.writeValueAsString(Map.of("message", "Item(s) added to cart successfully"));
            return ResponseEntity.ok().body(jsonResponse);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while adding item to cart");
        }
    }


    @DeleteMapping("/api/removeItem")
    public ResponseEntity<Void> removeItemFromCart(@AuthenticationPrincipal User user, @RequestParam Long itemId, @RequestParam int quantity) {
        cartService.removeFromCart(user, itemId, quantity);
        return ResponseEntity.noContent().build();
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