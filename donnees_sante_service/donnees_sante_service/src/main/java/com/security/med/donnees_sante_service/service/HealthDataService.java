package com.security.med.donnees_sante_service.service;

import com.security.med.donnees_sante_service.dto.HealthDataRequest;
import com.security.med.donnees_sante_service.entity.HealthData;

import java.util.List;

public interface HealthDataService {
    List<HealthData> getHealthDataByPatientId(String patientId);
    HealthData saveHealthData(HealthDataRequest request);
}

