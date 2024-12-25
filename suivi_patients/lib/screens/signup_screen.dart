import 'package:flutter/material.dart';

class SignUpScreen extends StatelessWidget {
  final TextEditingController nomController = TextEditingController();
  final TextEditingController prenomController = TextEditingController();
  final TextEditingController dateNaissanceController = TextEditingController();
  final TextEditingController professionController = TextEditingController();
  final TextEditingController motDePasseController = TextEditingController();
  final TextEditingController validationMotDePasseController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Inscription'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextField(
              controller: nomController,
              decoration: InputDecoration(
                labelText: 'Nom',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.person),
              ),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: prenomController,
              decoration: InputDecoration(
                labelText: 'Prénom',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.person_outline),
              ),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: dateNaissanceController,
              decoration: InputDecoration(
                labelText: 'Date de naissance',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.calendar_today),
              ),
              keyboardType: TextInputType.datetime,
              onTap: () async {
                DateTime? pickedDate = await showDatePicker(
                  context: context,
                  initialDate: DateTime.now(),
                  firstDate: DateTime(1900),
                  lastDate: DateTime.now(),
                );
                if (pickedDate != null) {
                  dateNaissanceController.text =
                  "${pickedDate.day}/${pickedDate.month}/${pickedDate.year}";
                }
              },
              readOnly: true,
            ),
            SizedBox(height: 16.0),
            DropdownButtonFormField<String>(
              decoration: InputDecoration(
                labelText: 'Profession',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.work),
              ),
              items: [
                'Patient',
                'Doctor',
                'Admin',
              ].map((profession) {
                return DropdownMenuItem(
                  value: profession,
                  child: Text(profession),
                );
              }).toList(),
              onChanged: (value) {
                professionController.text = value ?? '';
              },
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: motDePasseController,
              decoration: InputDecoration(
                labelText: 'Mot de passe',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.lock),
              ),
              obscureText: true,
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: validationMotDePasseController,
              decoration: InputDecoration(
                labelText: 'Confirmer le mot de passe',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.lock_outline),
              ),
              obscureText: true,
            ),
            SizedBox(height: 20.0),
            ElevatedButton(
              onPressed: () {
                String nom = nomController.text;
                String prenom = prenomController.text;
                String dateNaissance = dateNaissanceController.text;
                String profession = professionController.text;
                String motDePasse = motDePasseController.text;
                String validationMotDePasse = validationMotDePasseController.text;

                if (nom.isEmpty ||
                    prenom.isEmpty ||
                    dateNaissance.isEmpty ||
                    profession.isEmpty ||
                    motDePasse.isEmpty ||
                    validationMotDePasse.isEmpty) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Tous les champs doivent être remplis.'),
                    ),
                  );
                } else if (motDePasse != validationMotDePasse) {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Les mots de passe ne correspondent pas.'),
                    ),
                  );
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Inscription réussie !'),
                    ),
                  );
                  // Ajoutez ici la logique pour gérer l'inscription.
                }
              },
              child: Text('S\'inscrire'),
            ),
          ],
        ),
      ),
    );
  }
}
