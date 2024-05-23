import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:infinitewishes/Pages/mainhome/ProductCardRow.dart';
import 'ProductCard.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.sizeOf(context).width;
    final double screenHeight = MediaQuery.sizeOf(context).height;
    return ListView(
      scrollDirection: Axis.vertical,
      children: [
        Stack(
          alignment: Alignment.bottomLeft,
          children: [
            Image(
              image: AssetImage("assets/images/Big Banner (1).png"),
              width: screenWidth,
              height: screenHeight * 0.65,
              fit: BoxFit.fill,
            ),
            Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Fashion \nSale",
                        style: GoogleFonts.metrophobic().copyWith(
                            color: Colors.white,
                            fontSize: 60,
                            fontWeight: FontWeight.w900)),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                          backgroundColor: HexColor("#EF3651"),
                          padding: EdgeInsets.symmetric(
                              horizontal: screenWidth * 0.2)),
                      child: Text("Check"),
                    )
                  ],
                )
            ),
          ],
        ),
        ProductRowWithType(Type: "NEW",subtitle: "You’ve never seen it before!",),
        ProductRowWithType(Type: "Sale",subtitle: "You’ve never seen it before!",),
      ],
    );
  }
}


