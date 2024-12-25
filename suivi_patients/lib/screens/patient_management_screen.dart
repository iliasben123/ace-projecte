import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PatientManagementScreen extends StatefulWidget {
  @override
  _PatientManagementScreenState createState() => _PatientManagementScreenState();
}

class _PatientManagementScreenState extends State<PatientManagementScreen> {
  List patients = [];

  // Fetch patients from the API
  Future<void> fetchPatients() async {
    final response = await http.get(Uri.parse('http://localhost:8080/patients'));

    if (response.statusCode == 200) {
      setState(() {
        patients = json.decode(response.body);
      });
    } else {
      throw Exception('Failed to load patients');
    }
  }

  // Delete patient
  Future<void> deletePatient(String id) async {
    final response = await http.delete(Uri.parse('http://localhost:8080/patients/$id'));

    if (response.statusCode == 200) {
      setState(() {
        patients = patients.where((patient) => patient['id'].toString() != id).toList();
      });
    } else {
      throw Exception('Failed to delete patient');
    }
  }

  @override
  void initState() {
    super.initState();
    fetchPatients();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Gestion des Patients'),
      ),
      body: patients.isEmpty
          ? Center(child: CircularProgressIndicator())
          : ListView.builder(
        itemCount: patients.length,
        itemBuilder: (context, index) {
          var patient = patients[index];
          return ListTile(
            title: Text(patient['name']),
            subtitle: Text('Age: ${patient['age']}'),
            trailing: IconButton(
              icon: Icon(Icons.delete),
              onPressed: () {
                deletePatient(patient['id'].toString());
              },
            ),
          );
        },
      ),
    );
  }
}
