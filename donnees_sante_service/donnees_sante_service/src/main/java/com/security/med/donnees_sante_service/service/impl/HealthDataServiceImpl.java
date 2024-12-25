package com.security.med.donnees_sante_service.service.impl;


import com.security.med.donnees_sante_service.dto.HealthDataRequest;
import com.security.med.donnees_sante_service.entity.HealthData;
import com.security.med.donnees_sante_service.repository.HealthDataRepository;
import com.security.med.donnees_sante_service.service.HealthDataService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HealthDataServiceImpl implements HealthDataService {

    private final HealthDataRepository healthDataRepository;

    public HealthDataServiceImpl(HealthDataRepository healthDataRepository) {
        this.healthDataRepository = healthDataRepository;
    }

    @Override
    public List<HealthData> getHealthDataByPatientId(String patientId) {
        return healthDataRepository.findByPatientId(patientId);
    }

    @Override
    public HealthData saveHealthData(HealthDataRequest request) {
        HealthData healthData = new HealthData();
        healthData.setPatientId(request.getPatientId());
        healthData.setType(request.getType());
        healthData.setValue(request.getValue());
        healthData.setDateRecorded(request.getDateRecorded());
        return healthDataRepository.save(healthData);
    }
}
