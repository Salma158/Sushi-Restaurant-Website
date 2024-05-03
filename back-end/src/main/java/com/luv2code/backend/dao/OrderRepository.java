package com.luv2code.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.luv2code.backend.entity.Order;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {
}
