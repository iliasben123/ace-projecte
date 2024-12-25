import 'package:flutter/material.dart';

class AppointmentsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Suivi des Rendez-vous'),
      ),
      body: Center(
        child: Text('Interface pour le suivi des rendez-vous.'),
      ),
    );
  }
}
