package com.luv2code.backend.cloudinary;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryService {
    String uploadFile(MultipartFile file, String folderName);
}
