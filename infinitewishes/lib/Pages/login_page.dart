import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // Add back button functionality here
          },
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              decoration: InputDecoration(
                labelText: 'Email',
                suffixIcon: Icon(Icons.check, color: Colors.green),
              ),
            ),
            SizedBox(height: 10),
            TextField(
              decoration: InputDecoration(
                labelText: 'Password',
              ),
              obscureText: true,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Login functionality here
              },
              child: Text('LOGIN'),
            ),
            TextButton(
              onPressed: () {
                // Navigate to forgot password page
              },
              child: Text('Forgot your password?'),
            ),
            SizedBox(height: 20),
            Text('Or login with social account'),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: Icon(Icons.g_mobiledata, size: 50),
                  onPressed: () {
                    // Google login functionality here
                  },
                ),
                IconButton(
                  icon: Icon(Icons.facebook, size: 50),
                  onPressed: () {
                    // Facebook login functionality here
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
