"# ace-projecte" 
[rapport_suivi_patient.pdf](https://github.com/user-attachments/files/18247436/rapport_suivi_patient.pdf)
Suivi Patient à Domicile

Table des Matières

Introduction

Structure du Projet

Microservices

Authentification

Gestion des Patients

Gestion des Rendez-vous

Suivi Médical

Applications Frontend

Application Flutter

Application React

Instructions de Déploiement

Exécution Locale

API Documentation

Contributions

Introduction

Ce projet vise à fournir une solution complète pour le suivi des patients à domicile. Il comprend plusieurs microservices backend et deux applications frontend :

Application Flutter : pour les patients.

Application React : pour les professionnels de santé.

Structure du Projet

Voici une vue d'ensemble de la structure du projet :

backend/ : Contient les microservices.

frontend/flutter/ : Application mobile en Flutter pour les patients.

frontend/react/ : Application web en React pour les professionnels de santé.

docs/ : Documentation du projet.

docker/ : Configuration Docker pour le déploiement.

Microservices

Chaque microservice est conçu pour être indépendant et interagit via des API REST.

Authentification

Technologie : Node.js, JWT

Fonctionnalités :

Inscription et connexion.

Gestion des rôles (patient, médecin, admin).

Réinitialisation de mot de passe.

Gestion des Patients

Technologie : Python, Flask

Fonctionnalités :

Création et modification des dossiers patients.

Historique des soins.

Gestion des Rendez-vous

Technologie : Java, Spring Boot

Fonctionnalités :

Planification des rendez-vous.

Notifications et rappels.

Suivi Médical

Technologie : Node.js, Express

Fonctionnalités :

Enregistrement des mesures (température, tension, etc.).

Suivi des traitements.

Applications Frontend

Application Flutter

Cible : Patients

Fonctionnalités :

Tableau de bord personnel.

Consultation de l'historique médical.

Prise de rendez-vous.

Application React

Cible : Professionnels de santé

Fonctionnalités :

Gestion des dossiers patients.

Planification des visites.

Consultation des suivis médicaux.

Instructions de Déploiement

Prérequis

Docker et Docker Compose

Accès à une base de données (MysQl).


Description du projet : 

Ce projet est une solution pour surveiller les patients à domicile avec des capteurs IoT et une interface web et mobile il permet de suivre l’état de santé des patients en temps réel de détecter des anomalies automatiquement et d’envoyer des alertes aux soignants les données sont sécurisées avec des outils modernes comme Spring Security et JWT les patients peuvent accéder à leurs informations de santé et les soignants peuvent gérer les dossiers et les rendez-vous facilement ce système utilise des technologies avancées comme Spring Boot React Docker MySQL Workbench Proteus LabVIEW et Arduino pour offrir une plateforme fiable et efficace qui améliore la qualité des soins et réduit les coûts de santé.
