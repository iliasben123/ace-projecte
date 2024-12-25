package com.security.med.AnalyticsService.controllers;

import com.security.med.AnalyticsService.entities.Report;
import com.security.med.AnalyticsService.services.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/trend")
    public Double getTrend(@RequestParam String sensorType,
                           @RequestParam String start,
                           @RequestParam String end) {
        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);

        return analyticsService.analyzeTrend(sensorType, startDate, endDate);
    }

    @PostMapping("/report")
    public Report createReport(@RequestParam String caregiverId,
                               @RequestParam String patientId,
                               @RequestParam String start,
                               @RequestParam String end) {
        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);

        return analyticsService.generateReport(caregiverId, patientId, startDate, endDate);
    }

    @GetMapping("/anomalies")
    public boolean detectAnomalies(@RequestParam String patientId,
                                   @RequestParam String start,
                                   @RequestParam String end) {
        LocalDateTime startDate = LocalDateTime.parse(start);
        LocalDateTime endDate = LocalDateTime.parse(end);

        return analyticsService.detectAnomalies(patientId, startDate, endDate);
    }
}
