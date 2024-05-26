
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:infinitewishes/Pages/login_page.dart';

class SignUpPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Align(
                  alignment: Alignment.topLeft,
                  child: IconButton(
                    icon: const Icon(
                      Icons.arrow_back_ios,
                      color: Colors.white,
                    ),
                    onPressed: () {},
                  ),
                ),
                Align(
                  alignment: Alignment.topLeft,
                  child: Padding(
                    padding: EdgeInsets.only(
                        right: screenWidth * 0.2,
                        bottom: screenHeight * 0.1,
                        top: screenHeight * 0.1),
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
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => LoginPage()));
                  },
                  child: const Text('Login'),
                ),
                const SizedBox(height: 20),
                Text(
                  'Or sign up with social account',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
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
      ),
    );
  }
}

