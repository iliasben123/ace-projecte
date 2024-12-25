import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class NotificationsScreen extends StatefulWidget {
  @override
  _NotificationsScreenState createState() => _NotificationsScreenState();
}

class _NotificationsScreenState extends State<NotificationsScreen> {
  late Future<List<dynamic>> _alerts;

  @override
  void initState() {
    super.initState();
    _alerts = fetchAlerts(); // Appeler la fonction pour récupérer les alertes
  }

  Future<List<dynamic>> fetchAlerts() async {
    final response = await http.get(Uri.parse('http://localhost:8085/api/alerts'));

    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data;
    } else {
      throw Exception('Échec de la récupération des alertes');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Notifications'),
      ),
      body: FutureBuilder<List<dynamic>>(
        future: _alerts,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Erreur: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(child: Text('Aucune alerte disponible'));
          }

          List<dynamic> alerts = snapshot.data!;
          return ListView.builder(
            itemCount: alerts.length,
            itemBuilder: (context, index) {
              Map<String, dynamic> alert = alerts[index]; // Chaque élément est un Map
              return Card(
                child: ListTile(
                  title: Text(alert['message']), // Utilisation des champs reçus
                  subtitle: Text('Statut: ${alert['status']}'), // Champ status
                  trailing: Text(alert['createdAt']), // Affichage de la date
                  onTap: () {
                    // Optionnel : gérer les actions sur les alertes
                  },
                ),
              );
            },
          );
        },
      ),
    );
  }
}
