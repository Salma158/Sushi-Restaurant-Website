package com.luv2code.backend.repository;
import com.luv2code.backend.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}