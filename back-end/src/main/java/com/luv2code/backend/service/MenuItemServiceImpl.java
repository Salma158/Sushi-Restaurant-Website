package com.luv2code.backend.service;
import com.luv2code.backend.dto.MenuItemModel;
import com.luv2code.backend.repository.MenuItemRepository;
import com.luv2code.backend.entity.MenuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class MenuItemServiceImpl implements MenuItemService {

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private MenuItemRepository menuItemRepository;


    @Override
    public ResponseEntity<Map> addMenuItem(MenuItemModel imageModel) {
        try {
            if (imageModel.getName().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            if (imageModel.getFile().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }

            String imageUrl = cloudinaryService.uploadFile(imageModel.getFile(), "folder_1");
            if (imageUrl == null) {
                return ResponseEntity.badRequest().build();
            }
            MenuItem menuItem = imageModel.getMenuItem();
            menuItem.setImageUrl(imageUrl);
            menuItemRepository.save(menuItem);
            return ResponseEntity.ok().body(Map.of("url",imageUrl));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}