
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:infinitewishes/Widgets/product_card.dart';


class ProductRowWithType extends StatelessWidget {
  final String Type;
  final String subtitle;
  const ProductRowWithType({super.key,required this.Type,required this.subtitle});

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.sizeOf(context).height;
    return Column(
      children: [
        ListTile(
          title: Text(
            Type,
            style: GoogleFonts.metrophobic().copyWith(
                fontWeight: FontWeight.bold, fontSize: screenHeight * 0.04),
          ),
          subtitle: Text(
            subtitle,
            style: GoogleFonts.metrophobic(
                color: Colors.grey, fontSize: screenHeight * 0.02),
          ),
          trailing: TextButton(
            onPressed: () {},
            child: Text("View all"),
          ),
        ),
        Container(
          height: screenHeight * 0.5,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              Product(
                imageUrl: "assets/images/boy.png",
                title: "Evening Dress",
                price: 1300,
                brandname: "Dorothy Perkins",
              ),
              Product(
                imageUrl: "assets/images/boy.png",
                title: "Evening Dress",
                price: 1300,
                brandname: "Dorothy Perkins",
              ),
              Product(
                imageUrl: "assets/images/boy.png",
                title: "Evening Dress",
                price: 1300,
                brandname: "Dorothy Perkins",
              ),
            ],
          ),
        )
      ],
    );
  }
}

