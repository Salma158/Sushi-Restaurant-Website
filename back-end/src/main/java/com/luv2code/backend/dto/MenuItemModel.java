package com.luv2code.backend.dto;
import com.luv2code.backend.entity.MenuItem;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class MenuItemModel {
    private String name;
    private MultipartFile file;
    private MenuItem menuItem;
}