package com.security.med.donnees_sante_service.controller;


import com.security.med.donnees_sante_service.dto.HealthDataRequest;
import com.security.med.donnees_sante_service.entity.HealthData;
import com.security.med.donnees_sante_service.service.HealthDataService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/health-data")
public class HealthDataController {

    private final HealthDataService healthDataService;

    public HealthDataController(HealthDataService healthDataService) {
        this.healthDataService = healthDataService;
    }

    @GetMapping("/{patientId}")
    public List<HealthData> getHealthDataByPatientId(@PathVariable String patientId) {
        return healthDataService.getHealthDataByPatientId(patientId);
    }

    @PostMapping
    public HealthData saveHealthData(@RequestBody HealthDataRequest request) {
        return healthDataService.saveHealthData(request);
    }
}
