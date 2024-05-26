import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hexcolor/hexcolor.dart';
import '../Widgets/shopping_catagories_card.dart';

class Shopping extends StatelessWidget {
  const Shopping({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.sizeOf(context).height;
    final double screenWidth = MediaQuery.sizeOf(context).width;
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: const Icon(
              Icons.arrow_back_ios,
              color: Colors.white,
            ),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
          title: const Text("Categories"),
          centerTitle: true,
          bottom: TabBar(
            indicatorColor: HexColor("#EE3651"),
            labelColor: HexColor("#EE3651"),
            tabs: const [
              Tab(
                text: "Men",
              ),
              Tab(
                text: "Women",
              ),
              Tab(
                text: "Kids",
              )
            ],
          ),
        ),
        body: TabBarView(
          children: [
            ListView(
              children: [
                SaleCard(screenHeight: screenHeight),
                const catagories_card(title: "New", imgurl: "assets/images/boy.png",),
                const catagories_card(title: "Cloth", imgurl: "assets/images/Big Banner (1).png",),
                const catagories_card(title: "Shoes", imgurl: "assets/images/boy.png",),
                const catagories_card(title: "Acessories", imgurl: "assets/images/girl.png",),
                Container(padding:EdgeInsets.symmetric(vertical: 10,horizontal: 20),child: ElevatedButton(onPressed: (){}, child: Text("VIEW ALL ITEMS")))
              ],
            ),
            ListView(
              children: [
                SaleCard(screenHeight: screenHeight),
                const catagories_card(title: "New", imgurl: "assets/images/girl.png",),
                const catagories_card(title: "Cloth", imgurl: "assets/images/Big Banner (1).png",),
                const catagories_card(title: "Shoes", imgurl: "assets/images/boy.png",),
                const catagories_card(title: "Acessories", imgurl: "assets/images/Big Banner (1).png",),
                Container(padding:EdgeInsets.symmetric(vertical: 10,horizontal: 20),child: ElevatedButton(onPressed: (){}, child: Text("VIEW ALL ITEMS")))
              ],
            ),
            ListView(
              children: [
                SaleCard(screenHeight: screenHeight),
                const catagories_card(title: "New", imgurl: "assets/images/image 4.1.png",),
                const catagories_card(title: "Cloth", imgurl: "assets/images/image4.2.png",),
                const catagories_card(title: "Shoes", imgurl: "assets/images/image 4.3 .png",),
                const catagories_card(title: "Acessories", imgurl: "assets/images/image 4.4.png",),
                Container(padding:EdgeInsets.symmetric(vertical: 10,horizontal: 20),child: ElevatedButton(onPressed: (){}, child: Text("VIEW ALL ITEMS")))
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class SaleCard extends StatelessWidget {
  const SaleCard({
    super.key,
    required this.screenHeight,
  });

  final double screenHeight;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      height: screenHeight / 5,
      child: Card(
        color: HexColor("#FF3E3E"),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              "SUMMER SALE",
              style: GoogleFonts.metrophobic().copyWith(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold),
            ),
            Text("Up to 50% off",
                style: GoogleFonts.metrophobic()
                    .copyWith(color: Colors.white))
          ],
        ),
      ),
    );
  }
}
