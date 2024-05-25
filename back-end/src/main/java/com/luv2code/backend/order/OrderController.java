package com.luv2code.backend.order;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.luv2code.backend.dao.CartRepository;
import com.luv2code.backend.entity.*;
import com.luv2code.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class OrderController {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("api/place-order")
    public ResponseEntity<String> placeOrder(@AuthenticationPrincipal User user, @RequestBody ShippingAddress shippingAddress) throws JsonProcessingException {

        Cart cart = cartRepository.findByUserWithCartItems(user);
        orderService.placeOrder(user, cart, shippingAddress);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResponse = objectMapper.writeValueAsString(Map.of("message", "Order placed successfully"));
        return ResponseEntity.ok().body(jsonResponse);
    }

    @GetMapping("/my-orders")
    public ResponseEntity<Order> getOrdersForLoggedInUser(@AuthenticationPrincipal User user) {
        Order orders = orderService.getOrdersOfUser(user);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
