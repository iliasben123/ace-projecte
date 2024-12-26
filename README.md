"# ace-projecte" 
[rapport_suivi_patient.pdf](https://github.com/user-attachments/files/18247436/rapport_suivi_patient.pdf)


Description du projet : 

Ce projet est une solution pour surveiller les patients à domicile avec des capteurs IoT et une interface web et mobile il permet de suivre l’état de santé des patients en temps réel de détecter des anomalies automatiquement et d’envoyer des alertes aux soignants les données sont sécurisées avec des outils modernes comme Spring Security et JWT les patients peuvent accéder à leurs informations de santé et les soignants peuvent gérer les dossiers et les rendez-vous facilement ce système utilise des technologies avancées comme Spring Boot React Docker MySQL Workbench Proteus LabVIEW et Arduino pour offrir une plateforme fiable et efficace qui améliore la qualité des soins et réduit les coûts de santé.

-Surveillance des Patients à Domicile avec l'IoT :

Cette plateforme permet de surveiller les patients à domicile en temps réel grâce à des capteurs IoT et des interfaces web et mobiles. Elle offre des fonctionnalités telles que la détection automatique d'anomalies de santé et l'envoi d'alertes aux soignants.

- Architecture Logicielle
- Frontend
- Backend

  
-Architecture Logicielle :

  L'application utilise React pour le frontend et Spring Boot pour le backend, communiquant via des requêtes HTTP. Les données sont stockées dans une base de données MySQL, gérée via MySQL Workbench. Les capteurs IoT sont programmés avec Arduino, et des outils comme Proteus et LabVIEW sont utilisés pour la simulation et l'analyse.

-Backend

Le backend est construit avec Spring Boot, gérant la logique métier et la communication avec la base de données MySQL. Il assure également la sécurité des données grâce à Spring Security et JWT.

Backend Project Structure
The backend code follows a modular and organized structure, leveraging the power of Spring Boot for building a robust and scalable application.

com.example.application
Classe principale de l'application :
Cette classe sert de point d'entrée pour l'application Spring Boot. Elle contient la méthode principale (main) qui initialise et démarre tous les services.

com.example.controller
Classes des contrôleurs :
Ce package contient les classes qui gèrent les requêtes HTTP. Les contrôleurs exposent des endpoints RESTful pour permettre aux utilisateurs et au frontend d'interagir avec les données et les fonctionnalités de l'application. Chaque contrôleur est dédié à une entité ou fonctionnalité spécifique et utilise les services pour traiter les requêtes.

com.example.model
Classes des entités :
Les classes de ce package représentent les entités de données de l'application. Elles définissent la structure des tables dans la base de données MySQL à l'aide d'annotations JPA. Chaque entité est mappée à une table et inclut les relations nécessaires pour organiser les données.

com.example.repository
Interfaces des répertoires :
Ce package contient des interfaces qui étendent les répertoires de Spring Data JPA. Ces interfaces permettent d'exécuter des opérations CRUD (Create, Read, Update, Delete) sur les entités sans avoir à écrire de requêtes SQL complexes. Elles sont utilisées directement par les services pour interagir avec la base de données.

com.example.service
Classes des services :
Ce package contient la logique métier de l'application. Les services gèrent les règles métier, orchestrent les interactions entre les contrôleurs et les répertoires, et appliquent les traitements nécessaires avant de retourner les résultats aux contrôleurs.

com.example.config
Classes de configuration :
Ce package regroupe les configurations nécessaires à l'application, telles que la configuration de la sécurité, les règles CORS, ou la connexion à la base de données. Ces classes permettent de centraliser les paramètres techniques de l'application.

com.example.security
Gestion de la sécurité :
Ce package contient les classes et configurations liées à la sécurité de l'application. Il inclut l'authentification et l'autorisation basées sur JWT (JSON Web Tokens) pour protéger les endpoints et sécuriser les données sensibles.

com.example.utils
Classes utilitaires :
Ce package contient des classes réutilisables pour des fonctionnalités communes, telles que la gestion des erreurs, la validation des entrées ou le formatage des réponses.

Software architecture : 

![tr](https://github.com/user-attachments/assets/6413eef0-ae0e-4989-952b-a8d4595f9912)



Contributors

-ilias bensalk (((https://github.com/iliasben123))
-Maroua chegri (https://github.com/maroua200211)
-taha ouahdani ((https://github.com/DAMEDtaha))
-Oussama marir  ((https://github.com/oussamamarir))
-Driss Zamani    ((https://github.com/drisszamani))






