package com.luv2code.backend.dao;
import com.luv2code.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;


public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsernameIgnoreCase(String username);
    Optional<User> findByEmailIgnoreCase(String email);
}