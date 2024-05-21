// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import '../Theme/themes.dart';
import '../Pages/signup_page.dart';
import '../Pages/login_page.dart';
import '../Pages/forgot_password_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: darkTheme,
      darkTheme: darkTheme,
      themeMode: ThemeMode.system,
      home: SignUpPage(),
    );
  }
}
