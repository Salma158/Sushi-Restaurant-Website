package com.luv2code.backend.repository;
import com.luv2code.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "category", path = "menu-item-category")
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
