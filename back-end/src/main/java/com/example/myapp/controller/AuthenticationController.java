package com.example.myapp.controller;

import com.example.myapp.dto.UserResponse;

import com.example.myapp.model.User;
import com.example.myapp.service.AuthenticationService;
import com.example.myapp.service.JwtService;
import com.example.myapp.service.LoginService;
import com.example.myapp.service.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

    private final JwtService jwtService;
    private final UserService userService;
    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService, UserService userService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> register(@RequestBody User registerUserDto) {
        // Register the user with the raw password
        String result = userService.registerUser(registerUserDto);

        UserResponse response = new UserResponse();
        response.setUsername(registerUserDto.getUsername());
        response.setEmail(registerUserDto.getEmail());
        response.setPassword(registerUserDto.getPassword()); // Raw password
        response.setMessage(result);

        return ResponseEntity.ok(response);
    }

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
   
    public String login(@RequestBody Map<String, String> request) {
        String usernameOrEmail = request.get("usernameOrEmail");
        String password = request.get("password");

        if (loginService.authenticate(usernameOrEmail, password)) {
            return "Logged in successfully";
        } else {
            return "Invalid username or password";
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, String>> resetPassword(@RequestBody Map<String, String> resetRequest) {
        String email = resetRequest.get("email");
        String newPassword = resetRequest.get("newPassword");

        if (email == null || newPassword == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email or newPassword is missing"));
        }

        if (userService.resetPassword(email, newPassword)) {
            return ResponseEntity.ok(Map.of("message", "Password reset successfully"));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "User not found"));
    }
}