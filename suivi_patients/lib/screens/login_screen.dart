import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  String _selectedProfession = ''; // Profession sélectionnée par l'utilisateur

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Connexion'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _emailController,
              decoration: InputDecoration(
                labelText: 'Email',
                hintText: 'exemple@email.com',
                border: OutlineInputBorder(),
              ),
              keyboardType: TextInputType.emailAddress,
              textInputAction: TextInputAction.next,
            ),
            SizedBox(height: 16),
            DropdownButtonFormField<String>(
              value: _selectedProfession.isEmpty ? null : _selectedProfession,
              onChanged: (String? newValue) {
                setState(() {
                  _selectedProfession = newValue!;
                });
              },
              items: <String>['Patient', 'Doctor', 'Admin']
                  .map((String profession) {
                return DropdownMenuItem<String>(
                  value: profession,
                  child: Text(profession),
                );
              }).toList(),
              decoration: InputDecoration(
                labelText: 'Profession',
                border: OutlineInputBorder(),
              ),
              hint: Text('Sélectionner votre profession'),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return 'Veuillez sélectionner votre profession.';
                }
                return null;
              },
            ),
            SizedBox(height: 16),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(
                labelText: 'Mot de Passe',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
            ),
            SizedBox(height: 24),
            ElevatedButton(
              onPressed: _login,
              child: Text('Connexion'),
            ),
            SizedBox(height: 16),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                TextButton(
                  onPressed: _forgotPassword,
                  child: Text('Mot de passe oublié?'),
                ),
                TextButton(
                  onPressed: _goToSignUp,
                  child: Text('S\'inscrire'),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  void _login() {
    if (_selectedProfession.isEmpty) {
      // Affiche un message d'alerte si la profession n'est pas sélectionnée
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(
        content: Text('Veuillez sélectionner votre profession.'),
      ));
      return;
    }

    // Logique de connexion ici (appel API, vérification des credentials, etc.)
    print('Connexion avec :');
    print('Email: ${_emailController.text}');
    print('Profession: $_selectedProfession');
    print('Mot de Passe: ${_passwordController.text}');

    // Redirection vers home_screen après connexion réussie avec données utilisateur
    Navigator.pushReplacementNamed(context, '/home', arguments: {
      'email': _emailController.text,
      'profession': _selectedProfession,
    });
  }

  void _forgotPassword() {
    Navigator.pushNamed(context, '/forgot_password'); // Redirige vers ForgotPasswordScreen
  }

  void _goToSignUp() {
    Navigator.pushNamed(context, '/signup'); // Redirige vers SignUpScreen
  }
}
