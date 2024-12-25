package com.security.med.Alert.Management.controllers;

import com.security.med.Alert.Management.entities.Alert;
import com.security.med.Alert.Management.entities.AlertStatus;
import com.security.med.Alert.Management.services.AlertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alerts")
public class AlertController {

    @Autowired
    private AlertService alertService;

    @PostMapping
    public Alert createAlert(@RequestParam String recipient, @RequestParam String message) {
        return alertService.createAlert(recipient, message);
    }

    @GetMapping
    public List<Alert> getAllAlerts(    ) {
        return alertService.getAllAlerts();
    }

    @PutMapping("/{id}/status")
    public void updateAlertStatus(@PathVariable Long id, @RequestParam AlertStatus status) {
        alertService.updateAlertStatus(id, status);
    }
}

