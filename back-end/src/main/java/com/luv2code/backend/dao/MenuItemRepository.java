package com.luv2code.backend.dao;

import com.luv2code.backend.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
}
