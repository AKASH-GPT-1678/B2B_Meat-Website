package com.meatbackend.backendd.controller;

import com.meatbackend.backendd.dto.RegistrationRequest;
import com.meatbackend.backendd.service.impl.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class RegistrationController {

    @Autowired
    private UserRegistrationService userRegistrationService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequest request) {
        String result = userRegistrationService.registerUser(
                request.getEmail(),
                request.getUsername(),
                request.getPassword()
        );

        if (result.equals("User registered successfully!")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.badRequest().body(result);
        }
    }
}


