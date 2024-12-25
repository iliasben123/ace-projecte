package com.security.med.Alert.Management.repositories;

import com.security.med.Alert.Management.entities.Alert;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AlertRepository extends JpaRepository<Alert, Long> {
}
