package com.security.med.AuthenticationService.repository;


import com.security.med.AuthenticationService.entity.Role;
import com.security.med.AuthenticationService.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}
