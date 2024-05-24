import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';



class Product extends StatelessWidget {
  final String imageUrl;
  final String title;
  final String brandname;
  final double price;

  const Product({
    super.key,required this.imageUrl,required this.price,required this.title,required this.brandname
  });

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.sizeOf(context).width;
    final double screenHeight = MediaQuery.sizeOf(context).height;
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Stack(
            children: [
              Image.asset(
                imageUrl,
                height: screenHeight*0.33,
                width: screenWidth*0.5,
                fit: BoxFit.cover,
              ),
              Container(
                margin: EdgeInsets.only(left: 5,top: 5),
                decoration: BoxDecoration(color: HexColor("#E83B3C"),borderRadius: BorderRadius.all(Radius.circular(10))),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 15,vertical: 8),
                  child: Text("-15%",style:GoogleFonts.metrophobic(),),
                ),
              )
            ],
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  brandname,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w500,
                    color: Colors.grey
                  ),
                ),
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Text(
                      "${(price+200).toString()}",
                      style: const TextStyle(
                        fontSize: 16,
                        color: Colors.grey,
                        decoration: TextDecoration.lineThrough,
                      ),
                    ),
                    SizedBox(width: 10,),
                    Text(
                      "${price.toString()} INR",
                      style: const TextStyle(
                        fontSize: 16,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}