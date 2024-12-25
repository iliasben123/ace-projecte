package com.security.med.Alert.Management.services;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class NotificationService {

    private static final Logger logger = LoggerFactory.getLogger(NotificationService.class);

    @Autowired
    private JavaMailSender mailSender; // Service pour envoyer des emails

    @Autowired
    private AmqpTemplate amqpTemplate; // Service pour envoyer des messages à RabbitMQ

    
    private String prepareEmailMessage(String recipient, String message) {
        if (recipient == null || recipient.isBlank()) {
            logger.error("L'adresse email du destinataire est vide ou nulle.");
            throw new IllegalArgumentException("L'adresse email du destinataire ne peut pas être vide ou nulle.");
        }

        if (message == null || message.isBlank()) {
            logger.error("Le message est vide ou nul.");
            throw new IllegalArgumentException("Le message ne peut pas être vide ou nul.");
        }

        return recipient + ";" + message;
    }

    /**
     * Envoi d'un email via RabbitMQ.
     *
     * @param recipient L'adresse email du destinataire.
     * @param message   Le message à envoyer.
     */
    public void sendEmail(String recipient, String message) {
        try {
            String emailMessage = prepareEmailMessage(recipient, message);

            // Envoi du message à la queue RabbitMQ
            amqpTemplate.convertAndSend("emailQueue", emailMessage);
            logger.info("Message d'email envoyé à la queue RabbitMQ pour le destinataire : {}", recipient);
        } catch (Exception e) {
            logger.error("Erreur lors de l'envoi du message à RabbitMQ : {}", e.getMessage(), e);
            throw new RuntimeException("Échec de l'envoi du message à RabbitMQ.", e);
        }
    }
}
