import 'package:flutter/material.dart';

class HealthDataScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Données de Santé'),
      ),
      body: Center(
        child: Text('Interface pour les données de santé.'),
      ),
    );
  }
}
