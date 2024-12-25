package com.security.med.AnalyticsService.repositories;


import com.security.med.AnalyticsService.entities.SensorData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface SensorDataRepository extends JpaRepository<SensorData, Long> {

    List<SensorData> findByPatientIdAndTimestampBetween(String patientId, LocalDateTime start, LocalDateTime end);

    List<SensorData> findByTypeAndTimestampBetween(String type, LocalDateTime start, LocalDateTime end);
}
