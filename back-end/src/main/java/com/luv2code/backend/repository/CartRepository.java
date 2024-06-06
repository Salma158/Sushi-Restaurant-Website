package com.luv2code.backend.repository;
import com.luv2code.backend.entity.Cart;
import com.luv2code.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUser(User user);

    @Query("SELECT c FROM Cart c JOIN FETCH c.cartItems WHERE c.user = :user")
    Cart findByUserWithCartItems(User user);
}
