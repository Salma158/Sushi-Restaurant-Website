package com.luv2code.backend.dao;
import com.luv2code.backend.entity.Cart;
import com.luv2code.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUser(User user);
}
