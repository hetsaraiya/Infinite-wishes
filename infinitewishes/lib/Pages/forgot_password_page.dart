import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';

class ForgotPasswordPage extends StatefulWidget {
  @override
  _ForgotPasswordPageState createState() => _ForgotPasswordPageState();
}

class _ForgotPasswordPageState extends State<ForgotPasswordPage> {
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
                    width: 256,
                    height: 34,
                    child: Text(
                      "Forgot password",
                      style: GoogleFonts.metrophobic()
                          .copyWith(fontSize: 24, fontWeight: FontWeight.w900),
                    ),
                  ),
                ),
              ),
              const Text(
                'Enter your email to receive a password reset link.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(
                height: screenWidth * 0.06,
              ),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Email',
                  errorText:
                      'Not a valid email address. Should be your@email.com',
                ),
              ),
              SizedBox(height: screenWidth * 0.06),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: HexColor("#EF3651"),
                  foregroundColor: Colors.white,
                ),
                onPressed: () {
                  // Forgot password functionality here
                },
                child: const Text('SEND'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
