// ignore_for_file: unused_import

import 'package:flutter/material.dart';
import '../Theme/themes.dart';
import '../Pages/signup_page.dart';
import '../Pages/login_page.dart';
import '../Pages/forgot_password_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: darkTheme,
      darkTheme: darkTheme,
      themeMode: ThemeMode.system,
      home: SignUpPage(),
    );
  }
}
