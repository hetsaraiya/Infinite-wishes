import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              Padding(
                padding: EdgeInsets.only(left: screenWidth * 30),
                child: Image.asset("assets/images/back.png"),
              ),
              Padding(
                padding: EdgeInsets.only(
                    right: screenWidth * 0.2,
                    bottom: screenWidth * 0.2,
                    top: screenWidth * 0.39),
                child: SizedBox(
                  width: 127,
                  height: 34,
                  child: Text(
                    "Sign up",
                    style: GoogleFonts.metrophobic()
                        .copyWith(fontSize: 24, fontWeight: FontWeight.w900),
                  ),
                ),
              ),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Name',
                  suffixIcon: Icon(Icons.check, color: Colors.green),
                ),
              ),
              const SizedBox(height: 10),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Email',
                ),
              ),
              const SizedBox(height: 10),
              const TextField(
                decoration: InputDecoration(
                  labelText: 'Password',
                ),
                obscureText: true,
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: screenWidth * 0.9,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: HexColor("#EF3651"),
                    foregroundColor: Colors.white,
                  ),
                  onPressed: () {
                    // Sign up functionality here
                  },
                  child: const Text('SIGN UP'),
                ),
              ),
              const SizedBox(height: 10),
              const Text('Already have an account?'),
              TextButton(
                onPressed: () {},
                child: Text('Login'),
              ),
              SizedBox(height: 20),
              Text('Or sign up with social account'),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  IconButton(
                    icon: Icon(Icons.g_mobiledata, size: 50),
                    onPressed: () {
                      // Google sign up functionality here
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.facebook, size: 50),
                    onPressed: () {
                      // Facebook sign up functionality here
                    },
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
