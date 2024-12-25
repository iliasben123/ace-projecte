package com.security.med.donnees_sante_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class DonneesSanteServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DonneesSanteServiceApplication.class, args);
	}

}
