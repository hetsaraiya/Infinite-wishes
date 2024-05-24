
import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:infinitewishes/Pages/Home_Page.dart';
import 'package:infinitewishes/Pages/cartbag.dart';
import 'package:infinitewishes/Pages/faviorites.dart';
import 'package:infinitewishes/Pages/profile.dart';
import 'package:infinitewishes/Pages/shopping.dart';



class BottomTabBar extends StatefulWidget {
  const BottomTabBar({super.key});

  @override
  State<BottomTabBar> createState() => _BottomTabBarState();
}

class _BottomTabBarState extends State<BottomTabBar> {
  int _currentindex=0;
  List<Widget> body=[
    const Home(),
    const Shopping(),
    const Cartbag(),
    const Favorites(),
    const Profile()
  ];
  @override
  Widget build(BuildContext context) {
    //final TabController tabController=TabController(length: 5, vsync: this);
    return DefaultTabController(
      length: 5,
      child: Scaffold(
        body: Center(
          child: body[_currentindex],
        ),
        bottomNavigationBar: BottomNavigationBar(
          selectedItemColor: Colors.red,
          unselectedItemColor: Colors.grey,
          selectedLabelStyle: TextStyle(color: HexColor("#EF3651")),
          showUnselectedLabels: true,
          unselectedLabelStyle: const TextStyle(color: Colors.grey),
          backgroundColor: HexColor("#1E1F28"),
          currentIndex: _currentindex,
          onTap: (int newindex){
            setState(() {
              _currentindex=newindex;
            });},
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home),label: "Home"),
            BottomNavigationBarItem(icon: Icon(Icons.shopping_cart),label: "Shopping"),
            BottomNavigationBarItem(icon: Icon(Icons.shopping_bag_outlined),label: "Cart"),
            BottomNavigationBarItem(icon: Icon(Icons.favorite_border),label: "Favorites"),
            BottomNavigationBarItem(icon: Icon(Icons.person),label: "Profile"),
          ],
        ),
      ),
    );
  }
}

