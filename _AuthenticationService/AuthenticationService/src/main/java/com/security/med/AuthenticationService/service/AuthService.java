package com.security.med.AuthenticationService.service;

import com.security.med.AuthenticationService.DTOs.AuthRequest;
import com.security.med.AuthenticationService.DTOs.AuthResponse;
import com.security.med.AuthenticationService.DTOs.RegisterRequest;
import com.security.med.AuthenticationService.config.JwtUtils;
import com.security.med.AuthenticationService.entity.Role;
import com.security.med.AuthenticationService.entity.User;
import com.security.med.AuthenticationService.repository.RoleRepository;
import com.security.med.AuthenticationService.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final RoleRepository roleRepository;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.roleRepository = roleRepository;
    }

    public AuthResponse authenticate(AuthRequest request) {
        // Chercher l'utilisateur par son email
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Vérifier le mot de passe
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        // Générer un token JWT pour l'utilisateur
        String token = jwtUtils.generateToken(user);

        return new AuthResponse(token);
    }

    public void register(RegisterRequest request) {
        // Vérifier si l'email existe déjà
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        // Créer un nouvel utilisateur
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        // Récupérer ou créer le rôle de l'utilisateur
        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName(request.getRole().toUpperCase())
                .orElseThrow(() -> new RuntimeException("Role not found"));
        roles.add(role);

        // Assigner les rôles à l'utilisateur
        user.setRoles(roles);

        // Enregistrer l'utilisateur dans la base de données
        userRepository.save(user);
    }
}
