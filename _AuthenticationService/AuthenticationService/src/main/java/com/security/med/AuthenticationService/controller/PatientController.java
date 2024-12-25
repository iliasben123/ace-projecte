package com.security.med.AuthenticationService.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/patient")
@PreAuthorize("hasAuthority('PATIENT')")
public class PatientController {

    @GetMapping("/dashboard")
    public String getPatientDashboard() {
        return "Welcome to the Patient Dashboard";
    }
}
