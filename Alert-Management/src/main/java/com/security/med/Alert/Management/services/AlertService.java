package com.security.med.Alert.Management.services;

import com.security.med.Alert.Management.entities.Alert;
import com.security.med.Alert.Management.entities.AlertStatus;
import com.security.med.Alert.Management.repositories.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AlertService {

    @Autowired
    private AlertRepository alertRepository;

    @Autowired
    private NotificationService notificationService;

    public Alert createAlert(String recipient, String message) {
        Alert alert = new Alert();
        alert.setRecipient(recipient);
        alert.setMessage(message);
        alert.setStatus(AlertStatus.PENDING);
        alert.setCreatedAt(LocalDateTime.now());
        alert.setUpdatedAt(LocalDateTime.now());

        Alert savedAlert = alertRepository.save(alert);
        notificationService.sendEmail(recipient, "Nouvelle alerte : " + message);


        return savedAlert;
    }

    public List<Alert> getAllAlerts() {
        return alertRepository.findAll();
    }

    public void updateAlertStatus(Long alertId, AlertStatus status) {
        Alert alert = alertRepository.findById(alertId)
                .orElseThrow(() -> new RuntimeException("Alert not found"));

        alert.setStatus(status);
        alert.setUpdatedAt(LocalDateTime.now());
        alertRepository.save(alert);

        
    }
}
