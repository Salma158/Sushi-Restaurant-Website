package com.luv2code.backend.dao;

import com.luv2code.backend.entity.Cart;
import com.luv2code.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import com.luv2code.backend.entity.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("SELECT o FROM Order o JOIN FETCH o.orderItems WHERE o.user = :user")
    Order findByUserWithOrderItems(User user);
}
