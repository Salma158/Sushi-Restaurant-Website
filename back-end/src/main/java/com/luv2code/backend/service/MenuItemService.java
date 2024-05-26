package com.luv2code.backend.service;
import com.luv2code.backend.dto.MenuItemModel;
import org.springframework.http.ResponseEntity;
import java.util.Map;

public interface MenuItemService {
    ResponseEntity<Map> addMenuItem(MenuItemModel imageModel);
}
