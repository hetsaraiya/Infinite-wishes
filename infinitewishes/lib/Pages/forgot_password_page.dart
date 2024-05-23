import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:infinitewishes/BottomNavigation/bottom_navigation.dart';

class ForgotPasswordPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.sizeOf(context).width;
    return Scaffold(
      body: Padding(
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
                    bottom: screenWidth * 0.2,
                    top: screenWidth * 0.39),
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
              'Please, enter your email address. You will receive a link to create a new password via email.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 10),
            const TextField(
              decoration: InputDecoration(
                labelText: 'Email',
                errorText:
                    'Not a valid email address. Should be your@email.com',
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Forgot password functionality here
              },
              child: TextButton(
                  onPressed: (){
                    Navigator.push(context, MaterialPageRoute(builder: (context)=>BottomTabBar()));
                    },
                  child: const Text("SEND",style: TextStyle(color: Colors.white),)),
            ),
          ],
        ),
      ),
    );
  }
}
