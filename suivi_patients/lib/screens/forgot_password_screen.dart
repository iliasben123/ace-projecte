import 'package:flutter/material.dart';

class ForgotPasswordScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Mot de passe oublié'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Entrez votre adresse e-mail pour recevoir un lien de récupération de mot de passe.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16.0),
            ),
            SizedBox(height: 20.0),
            TextField(
              controller: emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                labelText: 'Adresse e-mail',
                border: OutlineInputBorder(),
                prefixIcon: Icon(Icons.email),
              ),
            ),
            SizedBox(height: 20.0),
            ElevatedButton(
              onPressed: () {
                // Logique de récupération du mot de passe ici
                String email = emailController.text;
                if (email.isNotEmpty) {
                  // Exemple de feedback utilisateur
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Un lien de récupération a été envoyé à $email'),
                    ),
                  );
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text('Veuillez entrer une adresse e-mail valide.'),
                    ),
                  );
                }
              },
              child: Text('Récupérer'),
            ),
          ],
        ),
      ),
    );
  }
}
