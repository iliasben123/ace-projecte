import 'package:flutter/material.dart';
import 'package:suivi_patients/screens/login_screen.dart';
import 'package:suivi_patients/screens/forgot_password_screen.dart';
import 'package:suivi_patients/screens/signup_screen.dart';
import 'package:suivi_patients/screens/home_screen.dart'; // Import de la home_screen
import 'package:suivi_patients/screens/profile_screen.dart'; // Import de la profile_screen
import 'package:suivi_patients/screens/patient_management_screen.dart'; // Import de la nouvelle screen patient_management_screen

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Suivi Patients IoT',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/', // La route initiale sera le login_screen
      routes: {
        '/': (context) => LoginScreen(),
        '/forgot_password': (context) => ForgotPasswordScreen(),
        '/signup': (context) => SignUpScreen(),
        '/home': (context) => HomeScreen(email: 'user@example.com'), // Passe l'email à HomeScreen
        '/profile': (context) => ProfileScreen(), // ProfileScreen accessible via /profile
        '/patient_management': (context) => PatientManagementScreen(), // Route ajoutée pour la gestion des patients
      },
      onGenerateRoute: (settings) {
        if (settings.name == '/home') {
          return MaterialPageRoute(
            builder: (context) => HomeScreen(email: 'user@example.com'), // Email user passe ici
          );
        }
        return MaterialPageRoute(
          builder: (context) => LoginScreen(), // Si aucune route ne correspond, retour à la login_screen par défaut
        );
      },
      debugShowCheckedModeBanner: false,
    );
  }
}
