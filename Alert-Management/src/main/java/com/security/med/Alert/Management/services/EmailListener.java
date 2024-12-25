package com.security.med.Alert.Management.services;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailListener {

    private final JavaMailSender mailSender;

    public EmailListener(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @RabbitListener(queues = "emailQueue")
    public void receiveMessage(String emailMessage) {
        try {
            // Décomposer le message reçu (format: recipient;message)
            String[] parts = emailMessage.split(";");
            String recipient = parts[0];
            String message = parts[1];

            // Préparer et envoyer l'email
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setTo(recipient);
            helper.setSubject("Nouvelle Alerte");
            helper.setText(message, true); // 'true' pour HTML

            mailSender.send(mimeMessage);
            System.out.println("Email envoyé à " + recipient);

        } catch (MessagingException e) {
            e.printStackTrace();
            System.err.println("Erreur lors de l'envoi de l'email : " + e.getMessage());
        }
    }
}
