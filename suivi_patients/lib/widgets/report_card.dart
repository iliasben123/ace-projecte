import 'package:flutter/material.dart';

class ReportCard extends StatelessWidget {
  final String reportTitle;
  final String doctorName;
  final DateTime date;

  ReportCard({
    required this.reportTitle,
    required this.doctorName,
    required this.date,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.all(8.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              reportTitle,
              style: TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8.0),
            Text('Docteur : $doctorName'),
            SizedBox(height: 8.0),
            Text('Date : ${date.day}/${date.month}/${date.year}'),
          ],
        ),
      ),
    );
  }
}
