package com.luv2code.backend.repository;

import com.luv2code.backend.entity.MenuItem;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.data.domain.Pageable; // Correct import statement

@CrossOrigin("http://localhost:4200")
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    Page<MenuItem> findByNameContaining(@Param("name") String name, Pageable page);
}
