import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class catagories_card extends StatelessWidget {
  const catagories_card({
    super.key,
    required this.title,
    required this.imgurl,
  });

  final String title;
  final String imgurl;

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.sizeOf(context).height - 10;
    final double screenWidth = MediaQuery.sizeOf(context).width - 10;
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Container(
          height: screenHeight / 6,
          width: screenWidth,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SizedBox(
                width: screenWidth / 2,
                child: Text(
                  title,
                  textAlign: TextAlign.center,
                  style: GoogleFonts.metrophobic()
                      .copyWith(fontSize: 30, fontWeight: FontWeight.bold),
                ),
              ),
              Container(
                width: screenWidth / 2,
                alignment: Alignment.center,
                child: Image(
                  colorBlendMode: BlendMode.darken,
                  image: AssetImage(imgurl),
                  height: screenHeight * 0.25,
                  fit: BoxFit.fill,
                  filterQuality: FilterQuality.high,
                ),
              ),
            ],
          )),
    );
  }
}
