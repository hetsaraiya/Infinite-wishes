import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:infinitewishes/Pages/forgot_password_page.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // Add back button functionality here
            Navigator.pop(context);
          },
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Align(
              alignment: Alignment.topLeft,
              child: Padding(
                padding: EdgeInsets.only(
                    right: screenWidth * 0.2,
                    bottom: screenWidth * 0.2,
                    top: screenWidth * 0.39),
                child: SizedBox(
                  width: 127,
                  height: 34,
                  child: Text(
                    "Login",
                    style: GoogleFonts.metrophobic()
                        .copyWith(fontSize: 24, fontWeight: FontWeight.w900),
                  ),
                ),
              ),
            ),
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
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => ForgotPasswordPage()));
              },
              child: Text('Forgot your password?'),
            ),
            SizedBox(height: 20),
            Text('Or login with social account'),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: GestureDetector(
                      onTap: () {
                        //Google sign up functionality here
                      },
                      child: Image.asset("assets/images/Google.png")),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: GestureDetector(
                      onTap: () {
                        //Facebook sign up functionality here
                      },
                      child: Image.asset("assets/images/Facebook.png")),
                ),
                // IconButton(
                //   icon: Icon(Icons.g_mobiledata, size: 50),
                //   onPressed: () {
                //     // Google sign up functionality here
                //   },
                // ),
                // IconButton(
                //   icon: Icon(Icons.facebook, size: 50),
                //   onPressed: () {
                //     // Facebook sign up functionality here
                //   },
                // ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
