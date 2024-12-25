package com.security.med.donnees_sante_service.config;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "patient-service", url = "http://localhost:8081/api/patients")
public interface PatientClient {
    @GetMapping("/{id}")
    Object getPatientById(@PathVariable String id);
}
