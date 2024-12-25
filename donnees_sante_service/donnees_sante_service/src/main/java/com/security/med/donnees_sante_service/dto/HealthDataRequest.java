package com.security.med.donnees_sante_service.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class HealthDataRequest {

    @NotBlank
    private String patientId;

    @NotBlank
    private String type;

    @NotBlank
    private String value;

    private LocalDate dateRecorded;
}
