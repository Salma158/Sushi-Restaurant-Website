package com.luv2code.backend.controller;

import com.luv2code.backend.dto.MenuItemModel;
import com.luv2code.backend.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping("/add-menu-item")
    public ResponseEntity<Map> addMenuItem(MenuItemModel menuItemModel) {
        try {
            return menuItemService.addMenuItem(menuItemModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}