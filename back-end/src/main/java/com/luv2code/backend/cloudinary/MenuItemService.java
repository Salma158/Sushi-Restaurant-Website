package com.luv2code.backend.cloudinary;
import org.springframework.http.ResponseEntity;
import java.util.Map;

public interface MenuItemService {
    ResponseEntity<Map> addMenuItem(MenuItemModel imageModel);
}
