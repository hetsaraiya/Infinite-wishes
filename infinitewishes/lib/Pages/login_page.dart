import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:infinitewishes/Pages/home_page.dart';
import 'package:infinitewishes/Pages/forgot_password_page.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              Align(
                alignment: Alignment.topLeft,
                child: IconButton(
                  icon: const Icon(
                    Icons.arrow_back_ios,
                    color: Colors.white,
                  ),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                ),
              ),
              Align(
                alignment: Alignment.topLeft,
                child: Padding(
                  padding: EdgeInsets.only(
                      right: screenWidth * 0.2,
                      bottom: screenHeight * 0.09,
                      top: screenHeight * 0.12),
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
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Email',
                  suffixIcon: Icon(Icons.check, color: Colors.green),
                ),
              ),
              SizedBox(height: screenWidth * 0.03),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Password',
                ),
                obscureText: true,
              ),
              SizedBox(height: screenWidth * 0.05),
              SizedBox(
                width: screenWidth * 0.9,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: HexColor("#EF3651"),
                    foregroundColor: Colors.white,
                  ),
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                HomePage(isDark: true, toggleTheme: () => {})));
                  },
                  child: const Text('LOGIN'),
                ),
              ),
              TextButton(
                onPressed: () {
                  // Navigate to forgot password page
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => ForgotPasswordPage()));
                },
                child: const Text('Forgot your password?'),
              ),
              SizedBox(height: screenWidth * 0.05),
              const Text('Or login with social account'),
              SizedBox(height: screenWidth * 0.03),
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
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
