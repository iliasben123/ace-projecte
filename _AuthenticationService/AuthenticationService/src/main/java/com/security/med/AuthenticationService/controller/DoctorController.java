package com.security.med.AuthenticationService.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/doctor")
@PreAuthorize("hasAuthority('DOCTOR')")
public class DoctorController {

    @GetMapping("/dashboard")
    public String getDoctorDashboard() {
        return "Welcome to the Doctor Dashboard";
    }
}
