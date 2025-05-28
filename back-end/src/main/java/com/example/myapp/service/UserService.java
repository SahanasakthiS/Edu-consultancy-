package com.example.myapp.service;

import com.example.myapp.model.User;
import com.example.myapp.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Method to register a new user without encoding the password
    public String registerUser(User user) {
        // Check if the email is already registered
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Email already registered!";
        }

        // Save the user with the raw password (no encoding)
        userRepository.save(user);

        return "User registered successfully!";
    }

    public boolean resetPassword(String email, String newPassword) {
        if (email == null || newPassword == null) {
            return false;
        }

        // Find the user by email
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setPassword(newPassword); // Store the raw password
            userRepository.save(user);
            return true;
        }

        return false;
    }
}