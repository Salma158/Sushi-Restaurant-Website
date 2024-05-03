package com.luv2code.backend.order;

import com.luv2code.backend.dao.CartRepository;
import com.luv2code.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.luv2code.backend.entity.*;

@RestController
public class OrderController {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/place-order")
    public void placeOrder(@AuthenticationPrincipal User user) {
        Cart cart = cartRepository.findByUserWithCartItems(user);
        orderService.placeOrder(user, cart);
    }

    @GetMapping("/my-orders")
    public ResponseEntity<Order> getOrdersForLoggedInUser(@AuthenticationPrincipal User user) {
        Order orders = orderService.getOrdersOfUser(user);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
}
