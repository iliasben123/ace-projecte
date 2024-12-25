import 'package:flutter/material.dart';
import 'patient_management_screen.dart';
import 'profile_screen.dart';
import 'notifications_screen.dart';
import 'appointments_screen.dart';
import 'health_data_screen.dart';
import 'medical_reports_screen.dart';

class HomeScreen extends StatelessWidget {
  final String email; // Email utilisateur reçu

  HomeScreen({required this.email});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Accueil'),
        centerTitle: true,
        actions: [
          IconButton(
            icon: Icon(Icons.account_circle),
            onPressed: () {
              Navigator.pushNamed(context, '/profile');
            },
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Center(
              child: Text(
                'Bonjour, $email !',
                style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
              ),
            ),
          ),
          GridView.count(
            crossAxisCount: 2,
            padding: const EdgeInsets.all(16.0),
            crossAxisSpacing: 16.0,
            mainAxisSpacing: 16.0,
            shrinkWrap: true, // Empêcher le GridView de s'étendre trop loin
            children: [
              _buildFeatureButton(
                context,
                'Gestion des Patients',
                Icons.people,
                PatientManagementScreen(),
              ),
              _buildFeatureButton(
                context,
                'Notifications',
                Icons.notifications,
                NotificationsScreen(),
              ),
              _buildFeatureButton(
                context,
                'Rendez-vous',
                Icons.calendar_today,
                AppointmentsScreen(),
              ),
              _buildFeatureButton(
                context,
                'Données de Santé',
                Icons.favorite,
                HealthDataScreen(),
              ),
              _buildFeatureButton(
                context,
                'Rapports Médicaux',
                Icons.article,
                MedicalReportsScreen(),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureButton(
      BuildContext context, String title, IconData icon, Widget screen) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => screen),
        );
      },
      child: Card(
        elevation: 4.0,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 40.0),
            SizedBox(height: 8.0),
            Text(title, textAlign: TextAlign.center),
          ],
        ),
      ),
    );
  }
}
