import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  // Dummy data pour simuler les informations de l'utilisateur
  final String email = 'exemple@email.com'; // Replace by vrai email
  final String profession = 'Patient'; // Replace par vrai profession

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profil'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Email: $email', style: TextStyle(fontSize: 18)),
            SizedBox(height: 16),
            Text('Profession: $profession', style: TextStyle(fontSize: 18)),
            // Ajouter plus d'infos ici si nécessaire
          ],
        ),
      ),
    );
  }
}
