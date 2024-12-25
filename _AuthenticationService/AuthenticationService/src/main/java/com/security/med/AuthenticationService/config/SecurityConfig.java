package com.security.med.AuthenticationService.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Configuration de la sécurité pour les API REST
        http
                .authorizeRequests()
                .requestMatchers("/api/auth/**").permitAll() // Authentification libre pour l'authentification
                .requestMatchers("/api/patient/**").hasAuthority("PATIENT")
                .requestMatchers("/api/doctor/**").hasAuthority("DOCTOR")
                .requestMatchers("/api/admin/**").hasAuthority("ADMIN")
                .anyRequest().authenticated() // Toute autre demande nécessite une authentification
                .and()
                .csrf().disable(); // Désactivation du CSRF pour les API REST

        return http.build(); // Nouvelle méthode pour construire la chaîne de sécurité en Spring 6.x
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
