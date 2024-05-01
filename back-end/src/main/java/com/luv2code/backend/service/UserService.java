package com.luv2code.backend.service;

import com.luv2code.backend.dao.UserRepository;
import com.luv2code.backend.entity.RegistrationBody;
import com.luv2code.backend.entity.User;
import com.luv2code.backend.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository localUserDAO) {
        this.userRepository = localUserDAO;
    }

    public User registerUser(RegistrationBody registrationBody) throws UserAlreadyExistsException {
        if (userRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()
                || userRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        User user = new User();
        user.setEmail(registrationBody.getEmail());
        user.setUsername(registrationBody.getUsername());
        user.setFirstName(registrationBody.getFirstName());
        user.setLastName(registrationBody.getLastName());
        user.setPassword(registrationBody.getPassword());
        return userRepository.save(user);
    }

}