package com.security.med.AuthenticationService.controller;


import com.security.med.AuthenticationService.DTOs.AuthRequest;
import com.security.med.AuthenticationService.DTOs.AuthResponse;
import com.security.med.AuthenticationService.DTOs.RegisterRequest;
import com.security.med.AuthenticationService.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }
}
