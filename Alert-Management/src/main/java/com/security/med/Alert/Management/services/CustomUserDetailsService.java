package com.security.med.Alert.Management.services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Remplacez par une recherche réelle dans votre base de données
        if ("admin".equals(username)) {
            return new User("admin", "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36ZpyA09wUUBFk7iv0FPEN2", Collections.emptyList());
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }
}
