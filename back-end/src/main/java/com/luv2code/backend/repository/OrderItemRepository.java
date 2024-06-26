package com.luv2code.backend.repository;
import com.luv2code.backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
