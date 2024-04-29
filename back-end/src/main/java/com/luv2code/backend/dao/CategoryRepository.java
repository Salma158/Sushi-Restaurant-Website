package com.luv2code.backend.dao;
import com.luv2code.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "category", path = "menu-item-category")
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
