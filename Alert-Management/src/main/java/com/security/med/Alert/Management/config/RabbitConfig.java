package com.security.med.Alert.Management.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    @Bean
    public Queue emailQueue() {
        return new Queue("emailQueue", true);  // "true" signifie que la queue sera persistée
    }
}
