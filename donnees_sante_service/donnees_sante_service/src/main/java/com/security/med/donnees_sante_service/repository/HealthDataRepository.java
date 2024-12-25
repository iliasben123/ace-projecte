package com.security.med.donnees_sante_service.repository;

import com.security.med.donnees_sante_service.entity.HealthData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HealthDataRepository extends JpaRepository<HealthData, Long> {
    List<HealthData> findByPatientId(String patientId);
}

