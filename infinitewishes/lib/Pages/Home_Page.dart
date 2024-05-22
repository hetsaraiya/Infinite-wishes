import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:infinitewishes/Pages/InnerPages/cart.dart';
import 'package:infinitewishes/Pages/InnerPages/favorites.dart';
import 'package:infinitewishes/Pages/InnerPages/home_content.dart';
import 'package:infinitewishes/Pages/InnerPages/profile.dart';
import 'package:infinitewishes/Pages/InnerPages/shop.dart';

// put this after
// ? "assets/images/active_icon1.png"
//                           : widget.isDark
//                               ? "assets/images/icon1.png"
//                               : "assets/images/icon_dark_1.png",

class HomePage extends StatefulWidget {
  final bool isDark;
  final Function toggleTheme;

  const HomePage({Key? key, required this.isDark, required this.toggleTheme})
      : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int pageIndex = 0;
  late Widget appTitle;

  final pages = [
    const HomeContent(),
    const ShopPage(),
    const CartPage(),
    const FavoritesPage(),
    const ProfilePage(),
  ];

  Widget _buildCurrentScreen() {
    return pages[pageIndex];
  }

  void _setAppBarContent() {
    setState(() {
      switch (pageIndex) {
        case 0:
          appTitle = const Text("Home");
          break;
        case 1:
          appTitle = const Text("Shop");
          break;
        case 2:
          appTitle = const Text("Cart");
          break;
        case 3:
          appTitle = const Text("Favorites");
          break;
        case 4:
          appTitle = const Text("Profile");
          break;
        default:
          appTitle = const Text("Home");
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _setAppBarContent();
  }

  @override
  Widget build(BuildContext context) {
    final currentHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      extendBody: true,
      extendBodyBehindAppBar: true,
      appBar: PreferredSize(
        preferredSize: const Size(double.infinity, 60),
        child: ClipRRect(
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
            child: AppBar(
              toolbarHeight: currentHeight < 670 ? 100 : 60,
              automaticallyImplyLeading: false,
              backgroundColor: Colors.transparent,
              elevation: 0,
              title: appTitle,
            ),
          ),
        ),
      ),
      bottomNavigationBar: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 6, sigmaY: 6),
          child: Container(
            height: 74,
            margin: const EdgeInsets.only(bottom: 30, right: 10, left: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              color: widget.isDark
                  ? const Color.fromARGB(204, 102, 72, 72)
                  : const Color.fromRGBO(16, 16, 16, 0.8),
              border: Border.all(
                width: 0.75,
                color: widget.isDark
                    ? const Color.fromRGBO(255, 255, 255, 1)
                    : const Color.fromRGBO(16, 16, 16, 0.8),
              ),
              boxShadow: const [
                BoxShadow(
                  color: Color.fromRGBO(183, 183, 183, 0.25),
                  blurRadius: 30.0,
                  offset: Offset(0, 6),
                )
              ],
            ),
            child: Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  IconButton(
                    enableFeedback: false,
                    onPressed: () {
                      setState(() {
                        pageIndex = 0;
                      });
                      _setAppBarContent();
                    },
                    icon: Image.asset(
                      pageIndex == 0
                          ? "assets/images/1u.png"
                          : "assets/images/1.png",
                      height: 36,
                      width: 36,
                    ),
                  ),
                  IconButton(
                    enableFeedback: false,
                    onPressed: () {
                      setState(() {
                        pageIndex = 1;
                      });
                      _setAppBarContent();
                    },
                    icon: Image.asset(
                      pageIndex == 1
                          ? "assets/images/2u.png"
                          : "assets/images/2.png",
                      height: 36,
                      width: 36,
                    ),
                  ),
                  IconButton(
                    enableFeedback: false,
                    onPressed: () {
                      setState(() {
                        pageIndex = 2;
                      });
                      _setAppBarContent();
                    },
                    icon: Image.asset(
                      pageIndex == 2
                          ? "assets/images/3u.png"
                          : "assets/images/3.png",
                      height: 36,
                      width: 36,
                    ),
                  ),
                  IconButton(
                    enableFeedback: false,
                    onPressed: () {
                      setState(() {
                        pageIndex = 3;
                      });
                      _setAppBarContent();
                    },
                    icon: Image.asset(
                      pageIndex == 3
                          ? "assets/images/4u.png"
                          : "assets/images/4.png",
                      height: 36,
                      width: 36,
                    ),
                  ),
                  IconButton(
                    enableFeedback: false,
                    onPressed: () {
                      setState(() {
                        pageIndex = 4;
                      });
                      _setAppBarContent();
                    },
                    icon: Image.asset(
                      pageIndex == 4
                          ? "assets/images/5u.png"
                          : "assets/images/5.png",
                      height: 36,
                      width: 36,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
      body: _buildCurrentScreen(),
    );
  }
}
