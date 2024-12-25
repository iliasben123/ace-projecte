package com.security.med.AnalyticsService.services;


import com.security.med.AnalyticsService.entities.Report;
import com.security.med.AnalyticsService.entities.SensorData;
import com.security.med.AnalyticsService.repositories.ReportRepository;
import com.security.med.AnalyticsService.repositories.SensorDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AnalyticsService {

    @Autowired
    private SensorDataRepository sensorDataRepository;

    @Autowired
    private ReportRepository reportRepository;

    // Analyse des tendances pour un type de capteur
    public Double analyzeTrend(String sensorType, LocalDateTime start, LocalDateTime end) {
        List<SensorData> data = sensorDataRepository.findByTypeAndTimestampBetween(sensorType, start, end);

        return data.stream()
                .mapToDouble(SensorData::getValue)
                .average()
                .orElse(0.0); // Retourne 0 si aucune donnée
    }

    // Générer un rapport pour un soignant
    public Report generateReport(String caregiverId, String patientId, LocalDateTime start, LocalDateTime end) {
        List<SensorData> data = sensorDataRepository.findByPatientIdAndTimestampBetween(patientId, start, end);

        String summary = "Résumé des données collectées :\n";
        for (SensorData sensorData : data) {
            summary += String.format("Type : %s, Valeur : %.2f, Timestamp : %s\n",
                    sensorData.getType(), sensorData.getValue(), sensorData.getTimestamp());
        }

        Report report = new Report();
        report.setCaregiverId(caregiverId);
        report.setSummary(summary);
        report.setGeneratedAt(LocalDateTime.now());

        return reportRepository.save(report);
    }

    // Intégration de machine learning pour détecter des anomalies (exemple simple)
    public boolean detectAnomalies(String patientId, LocalDateTime start, LocalDateTime end) {
        List<SensorData> data = sensorDataRepository.findByPatientIdAndTimestampBetween(patientId, start, end);

        // Exemple : détection d'anomalie simple avec des seuils
        for (SensorData sensorData : data) {
            if (sensorData.getValue() < 50 || sensorData.getValue() > 150) { // Exemple de seuils
                return true; // Anomalie détectée
            }
        }
        return false; // Aucune anomalie détectée
    }
}
