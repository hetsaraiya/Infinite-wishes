# from bs4 import BeautifulSoup
# import json
# import requests
# # HTML content
# html = '''
# <div class="inner_container">
# <div class="clearfix"></div>
# <div style=" content: " ";clear:="" both;display:="" table;"=""></div>
# <input type="hidden" value="https://www.indiagift.in/flowers-delivery-online/flower-bunch">
#   <div class="layout">
#     <div class="top_blog" style="padding:0px 10px;border:0px;">
# 	<div class="bread_crumb_box top_blog" style="padding:10px 0 0 0;">
#         <ul class="breadcrumbs" style="margin:0px;">
# 		<li><a href="https://www.indiagift.in/">  <span>Home</span></a>
# 		</li>
# 	    			<li><a href="https://www.indiagift.in/flowers-delivery-online"><span>Flowers</span></a>	<meta content="2">		</li>		
# 					<li class="last"><a href="https://www.indiagift.in/flowers-delivery-online/flower-bunch"><span>Flower Bunch</span></a></li>	
# 			   </ul>
# 	   <div class="price-range-box">
# 	   <div class="select_box" id="rows_box" style="background:none;border:none;width:auto;float:right;margin:0px 10px 0px 0px;">
	  
	  
# 	  <select name="product_price_range" id="product_price_range">
# 	  <option value="">--- Price ---</option>
# 	   <option value="0-100">Rs. 0 To Rs. 100</option>
# 	  <option value="100-200">Rs. 100 To Rs. 200</option>
# 	  <option value="200-500">Rs. 200 To Rs. 500</option> 
# 	  <option value="500-1000">Rs. 500 To Rs. 1000</option>
# 	  <option value="1000+">Rs. 1000+</option>
	  
# 	  </select></div>
# 	  <div class="select_box1" id="rows_box1" style="background:none;border:none;width:auto;float:right;">
# 	  Sort By: <a href="javascript:void(0);" data-id="3" class="product_sorting">New</a>&nbsp;
# 	  <a href="javascript:void(0);" data-id="1" class="product_sorting">Price: Low to High</a>&nbsp;
# 	  <a href="javascript:void(0);" data-id="2" class="product_sorting">Price: High to Low</a>
# 	  </div>
	  
#       <!--<div class="select_box" id="rows_box" style="background:none;border:none;width:auto;float:right;margin:0px 10px 0px 0px;">
# 	  <span style="float:left;background:none;margin:5px 5px;padding:0px;font-weight:500;font-size:15px;">Sort</span>
# 	  <select name="product_sorting" id="product_sorting_category">
# 	   <option value="1">Price Low to High</option>
# 	  <option value="2">Price High to Low</option>
# 	  <option value="3">Featured Products</option>
# 	  </select></div>-->
# 	  </div> </div>
	  
#     </div>
	
# 	<input type="hidden" name="category_id" id="category_id" value="263">
# 	<input type="hidden" name="total_product" id="total_product" value="92">
	 
# 	<div style="float:left;width:100%;padding:5px 0px;">
# 	<div class="product-shocases category_icons" style="float:left;width:100%">
# 	<ul>
# 	<li style="background-color:#009688;width:90px;"><a href="https://www.indiagift.in/occasions-delivery-online/anniversary/anniversary-flowers">Anniversary Flowers</a></li>
# 	<li style="background-color:#ff9800;"><a href="https://www.indiagift.in/occasions-delivery-online/birthday/birthday-flowers">Bday Flowers</a></li>
# 	<li style="background-color:#00bcd4;"><a href="https://www.indiagift.in/flowers-delivery-online/flower-bunch">Flower Bunches</a></li>
# 	<li style="background-color:#3f51b5;"><a href="https://www.indiagift.in/flowers-delivery-online/flower-basket">Flower Baskets</a></li>	
# 	<li style="background-color:#673ab7;width:90px;"><a href="https://www.indiagift.in/flowers-delivery-online/flower-heart-shape">Heart Shape</a></li>
# 	<li style="background-color:#9c27b0;"><a href="https://www.indiagift.in/flowers-delivery-online/roses" style="padding:7px 0px;">Roses</a></li>
# 	<li style="background-color:#e91e63;"><a href="https://www.indiagift.in/flowers-delivery-online/orchids" style="padding:7px 0px;">Orchids</a></li>
# 	<li style="background-color:#db4437;"><a href="https://www.indiagift.in/plants" style="padding:7px 0px;">Plants</a></li>	
# 	</ul></div>
# 	</div><div class="row space" style="padding:0px;"> 
# 		 	<h1 class="cat_top_h1" style="padding:0px 10px;">Send Flower Bunches &amp; Bouquets Online</h1>
# 		<div class="fl_full" style="padding:0px 10px 10px 10px;"><p>When you cannot think of anything to gift to someone on their special day, then delicious cake with <a href="https://www.indiagift.in/flowers-delivery-online">midnight flowers delivery</a> is the perfect gift for them especially when you are giving them this randomly.</p>
# </div>	<div id="product_list" style="width:100%" itemprop="offers" itemscope="" itemtype="https://schema.org/AggregateOffer">
# 	<meta itemprop="name" content="Send Flowers,Cakes and Gifts Online">
# 	<meta itemprop="offerCount" content="92">
# 	<meta itemprop="lowPrice" content="449">
# 	<meta itemprop="highPrice" content="2181">
# 	<meta itemprop="priceCurrency" content="INR">


# 	<div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/pink-roses-bouquet-ig-3139" title="Pink Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812261545833432.jpg" style="width:192px; height:192px;" alt="Pink Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Pink Roses Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 499</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 499">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/blue-orchids-bunch-ig-2518" title="Blue Orchids Bunch"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201712011512109127.jpg" style="width:192px; height:192px;" alt="Blue Orchids Bunch" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Blue Orchids Bunch</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 541</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 541">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/premium-mix-roses-bouquet-ig-3137" title="Premium Mix Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201901021546402449.jpg" style="width:192px; height:192px;" alt="Premium Mix Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Premium Mix Roses Bo....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 571</span> 
		
# 		<span class="prd_mrp">Rs. 599</span>
# 		<span class="mrp_off">(5% Off)</span>
# 	 	</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 571">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/exquisite-red-roses-bouquet-ig-3161" title="Exquisite Red Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812291546080752.jpg" style="width:192px; height:192px;" alt="Exquisite Red Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Exquisite Red Roses ....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 571</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 571">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/red-roses-bouquet-ig-7" title="Red Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812281545971439.jpg" style="width:192px; height:192px;" alt="Red Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Red Roses Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 595</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 595">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/bunch-of-style-with-lilies-and-orchids-ig-2522" title="Bunch of Style with Lilies and Orchids"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201902201550648026.JPG" style="width:192px; height:192px;" alt="Bunch of Style with Lilies and Orchids" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Bunch of Style with ....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 1091</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 1091">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/yellow-roses-bouquet-ig-12" title="Yellow Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812261545836156.jpg" style="width:192px; height:192px;" alt="Yellow Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Yellow Roses Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 449</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 449">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/beautiful-pink-ig-823" title="Beautiful Pink"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812261545844675.jpg" style="width:192px; height:192px;" alt="Beautiful Pink" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Beautiful Pink</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 455</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 455">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/pink-carnation-bouquet-ig-381" title="Pink Carnation Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201902201550647583.JPG" style="width:192px; height:192px;" alt="Pink Carnation Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Pink Carnation Bouqu....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 549</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 549">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/pink-roses-bouquet-ig-14" title="Pink Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201812261545834163.jpg" style="width:192px; height:192px;" alt="Pink Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Pink Roses Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 555</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 555">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/celebration-red-roses-bouquet-ig-2781" title="Celebration Red Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201804301525102830.jpg" style="width:192px; height:192px;" alt="Celebration Red Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Celebration Red Rose....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 571</span> 
		
# 		<span class="prd_mrp">Rs. 599</span>
# 		<span class="mrp_off">(5% Off)</span>
# 	 	</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 571">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/graceful-pink-roses-bouquet-ig-2784" title="Graceful Pink Roses Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201902201550657245.JPG" style="width:192px; height:192px;" alt="Graceful Pink Roses Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Graceful Pink Roses ....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 651</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 651">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/lovely-orchids-and-roses-ig-2524" title="Lovely Orchids and Roses"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201712021512193083.jpg" style="width:192px; height:192px;" alt="Lovely Orchids and Roses" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Lovely Orchids and R....</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 871</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 871">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/pink-lily-bouquet-ig-420" title="Pink Lily Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201902201550645644.JPG" style="width:192px; height:192px;" alt="Pink Lily Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">Pink Lily Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 949</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 949">

# 	</div>
# 	</a>
# </div>
# <div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 	<a href="https://www.indiagift.in/white-lily-bouquet-ig-424" title="White Lily Bouquet"><div class="product" style="position:relative;">
# 		<div class="same_day_class social_sprite" title="Same Day Product"></div>
# 		<img src="https://www.indiagift.in/media/images/product/201902201550645569.JPG" style="width:192px; height:192px;" alt="White Lily Bouquet" width="254" height="254">
# 		</div>
# 	<span class="product_name_ig">White Lily Bouquet</span>
# 	<div style="float:left;width:100%">
# 		<span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 	<span class="product_price"> Rs. 949</span> 
		
# 		</span>
# 	<meta itemprop="priceCurrency" content="INR">
# 	<meta itemprop="price" content=" Rs. 949">

# 	</div>
# 	</a>
# </div>
# <div id="load_data"><div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 					<a href="https://www.indiagift.in/yellow-gerbera-bouquet-ig-411" title="Yellow Gerbera Bouquet"><div class="product" style="position:relative;"><div class="same_day_class social_sprite" title="Same Day Product"></div>
# 					<img src="https://www.indiagift.in/media/images/product/201902201550648698.JPG" width="254" height="254" alt="Yellow Gerbera Bouquet">
# 					</div>
# 					<span class="product_name_ig">Yellow Gerbera Bouqu....</span>
# 					<div style="float:left;width:100%"><span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 					<span class="product_price"> Rs. 499</span></span>
# 					<meta itemprop="priceCurrency" content="INR">
# 					<meta itemprop="price" content=" Rs. 499">
# 					</div>
# 					</a>
# 				</div><div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 					<a href="https://www.indiagift.in/lovely-white-roses-bouquet-ig-3138" title="Lovely White Roses Bouquet"><div class="product" style="position:relative;"><div class="same_day_class social_sprite" title="Same Day Product"></div>
# 					<img src="https://www.indiagift.in/media/images/product/201812261545843374.jpg" width="254" height="254" alt="Lovely White Roses Bouquet">
# 					</div>
# 					<span class="product_name_ig">Lovely White Roses B....</span>
# 					<div style="float:left;width:100%"><span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 					<span class="product_price"> Rs. 499</span></span>
# 					<meta itemprop="priceCurrency" content="INR">
# 					<meta itemprop="price" content=" Rs. 499">
# 					</div>
# 					</a>
# 				</div><div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 					<a href="https://www.indiagift.in/cute-pink-carnation-bouquet-ig-3495" title="Cute Pink Carnation Bouquet"><div class="product" style="position:relative;"><div class="same_day_class social_sprite" title="Same Day Product"></div>
# 					<img src="https://www.indiagift.in/media/images/product/201902221550815123.jpg" width="254" height="254" alt="Cute Pink Carnation Bouquet">
# 					</div>
# 					<span class="product_name_ig">Cute Pink Carnation ....</span>
# 					<div style="float:left;width:100%"><span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 					<span class="product_price"> Rs. 499</span></span>
# 					<meta itemprop="priceCurrency" content="INR">
# 					<meta itemprop="price" content=" Rs. 499">
# 					</div>
# 					</a>
# 				</div><div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 					<a href="https://www.indiagift.in/white-gerbera-bouquet-ig-416" title="White Gerbera Bouquet"><div class="product" style="position:relative;"><div class="same_day_class social_sprite" title="Same Day Product"></div>
# 					<img src="https://www.indiagift.in/media/images/product/201902201550650485.JPG" width="254" height="254" alt="White Gerbera Bouquet">
# 					</div>
# 					<span class="product_name_ig">White Gerbera Bouque....</span>
# 					<div style="float:left;width:100%"><span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 					<span class="product_price"> Rs. 499</span></span>
# 					<meta itemprop="priceCurrency" content="INR">
# 					<meta itemprop="price" content=" Rs. 499">
# 					</div>
# 					</a>
# 				</div><div class="cols space2" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
# 					<a href="https://www.indiagift.in/pink-roses-bouquet-ig-3139" title="Pink Roses Bouquet"><div class="product" style="position:relative;"><div class="same_day_class social_sprite" title="Same Day Product"></div>
# 					<img src="https://www.indiagift.in/media/images/product/201812261545833432.jpg" width="254" height="254" alt="Pink Roses Bouquet">
# 					</div>
# 					<span class="product_name_ig">Pink Roses Bouquet</span>
# 					<div style="float:left;width:100%"><span class="Skechers_blog" style="padding:3px 0px 0px 0px;width:100%;"> 
# 					<span class="product_price"> Rs. 499</span></span>
# 					<meta itemprop="priceCurrency" content="INR">
# 					<meta itemprop="price" content=" Rs. 499">
# 					</div>
# 					</a>
# 				</div></div> 
# <div class="clearfix"></div>
# <div style=" content: " ";clear:="" both;display:="" table;"=""></div>
# <div style="text-align: center; font-size: 15px;" id="load_data_message"></div>

# 		</div>
# 		<div id="overlay"></div>
# 	<div id="specialBox" style="display:none;">
# 	<img src="https://www.indiagift.in/media/images/loading.gif" alt="" width="249" height="66">
# 	</div>
# 	<input type="hidden" name="frm_excluded" id="frm_excluded" value="'3139','2518','3137','3161','7','2522','12','823','381','14','2781','2784','2524','420','424'">	
# 	<input type="hidden" name="price_val" id="price_val" value="">
# 	<div id="loadButton" class="loadButton"></div>
# 	<!-- 	<div id="loadButtons" class="loadButton"><a href="javascript:void(0)" id="loadmore_prd" style="background:#B90B2E;color:#fff;padding:5px">View More</a></div>
# 	 -->
# 	</div>	
# 	   <div style="float:left;width:100%;border-top:1px solid #d1d1d1;padding:10px;" id="category_description">
  
		

# 	<!---
# 	<article class="categorydescp">

# <p style="text-align:justify">Indiagift cakes have a specialty of their own, promising yummy flavors and sweet memories on numerous occasions that can be delivered anywhere in India, irrespective of time and place. The most delectable of all gifts, cakes are love in an edible form which will be a welcoming addition to all your celebrations. To participate and celebrate occasions with those you love, send cakes to India, anytime, anywhere. With Indiagift&rsquo;s delivery network that caters to almost 1000 cities, make your occasions more special. These delicious cakes are more than just edible gifts as they can be customized according to the occasion or person with your choicest flavors, designs, and photos, carrying a special message of love which your giftee will relate to.</p>

# <h2><strong>Fresh, Flavorful Cakes Starting at just INR 499</strong></h2>

# <p>With numerous occasions that make the rounds every month, cakes are the most anticipated of all gifts. All your childhood memories may have consisted of you impatiently waiting for cutting the cake and blowing the candles, so why give up this tradition when you turn older? To recreate such memories for your loved ones which lasts a lifetime, Indiagift has come up with cakes which start at just INR 499.</p>

# <p>Our mouth-watering cake flavors include an array of classic options like <a href="https://www.indiagift.in/vanilla-cakes">vanilla</a>, black forest, butterscotch, and chocolate to fruit flavors like pineapple, strawberry, and fresh fruit cake. To treat your taste buds, explore exotic flavors like blueberry cheesecake, chocolate mousse cake, dry fruits cakes etc. A cake in one&rsquo;s favorite flavor brings back the sweetest of memories while making fonder ones.</p>

# <p>Although cakes are consumable products that have a limited shelf life, so we make sure that your cake is freshly baked and delivered to your loved one&rsquo;s doorstep in a jiffy from cake shops near you when you <strong>order cakes online</strong>.&nbsp; Indiagift cakes are baked with love and artistically designed to appeal to all your senses.</p>

# <h2><strong>Order Eggless Cakes Online with Indiagift</strong></h2>

# <p>Cakes are one of the best creation ever made, not because they look so enticing but also because of their phenomenal taste. To make sure that every person loses themselves with a heavenly bite of this yummy goodness, we have eggless cakes which are 100% vegetarian and are a favorite with vegan customers. These eggless cakes are meant to convey the same taste like any normal cake so that your loved ones can indulge themselves with every bite they take and feel good by your sweet gesture, both literally and figuratively.</p>

# <h2><strong>Why are the perks of opting Indiagift for ordering cakes online?</strong></h2>

# <p>Indiagift is one of the biggest names that has gained prominence for its online gifting service, and our customers in India and abroad have made this possible. You too can become a happy customer with all the perks we offer on online cake orders.</p>

# <ol>
# <ul>Same day delivery of cakes even on last-minute shopping orders</ul>
# <ul>Time-oriented delivery at your doorstep</ul>
# <ul>Affordable cake pricesYummy flavors and beautiful designs</ul>
# <ul>Discounts and coupons to be availed</ul>
# <ul>Delivery of cakes and gifts to almost every major towns and cities in India</ul>
# </ol>

# <h2><strong>Same Day Cakes Delivery for all Occasions</strong></h2>

# <p>Are you running late and don&rsquo;t have time to go through the whole process by calling the local bakery and ordering a cake while juggling priorities and picking it from the cake shop? Indiagift comes to your rescue with <a href="https://www.indiagift.in/same-day-delivery"><strong>same-day cake delivery</strong></a> to your respective destination and reaps the benefit of surprising your loved one. Also, this offer is best suited for last-minute cake shopping orders when you are busy with work and still take out time to make sure that no occasions go awry. Relying on Indiagift for same day cake delivery is the best course of action at all times.</p>

# <p>The best things about cakes are that, although, they are a very traditional gift item they are also the most sought out ones. With cakes as your gift, you are not only on the safer side but also a favored one, as nobody can refuse this sweetest addition to all your celebrations. Besides birthday cakes and anniversary cakes, you can send cakes on New Year, Valentine&rsquo;s Day etc. A cake from your side will not be the sweetest addition to the day&rsquo;s celebration but also a very cherished one.</p>

# <h2><strong>Plan a magical surprise with midnight cake delivery</strong></h2>

# <p>Midnights are supposed to be magical and when the whole world&#39;s asleep, the crescent moon wields its magic with starry hosts looking down upon you and the sound of crickets keep you awake with your thoughts. Indiagift too wields its magical powers with <a href="https://www.indiagift.in/midnight-cake-delivery"><strong>midnight cake delivery</strong></a> service to surprise your loved ones on special occasion. The sleep-rumpled face of your loved ones and their bewilderment on seeing a lovely cake from you will bring a sunshine smile on their face which is worth the effort you spent on this order. Just imagining their joyful response makes you want to order one right away with Indiagift&lsquo;s portal and the seamless online process we offer. So hurry and place your order for midnight cake delivery with Indiagift!</p>

# <h2><strong>Indiagift cakes can also be customized!</strong></h2>

# <p>One of the most special gifts you can offer to your loved ones, cakes are a constant source of delight. However, they are also flexible when it comes to taste, and have been constantly been experimented with. One such avenue available to Indiagift customers is the option to customize your online cake orders. This amazing opportunity is available to customers worldwide where you can have a <a href="https://www.indiagift.in/personalized-gifts-delivery-online"><strong>personalized cake</strong></a> designed for your loved ones even from miles away. A cake is a special treat as it serves as a gift, as well as, a treat to delight all your senses. A customized order cake means you have the option to not only order a cake but also have it done according to your own size, design, shape, and varieties. You can even send cake son late night, early morning for same day delivery, midnight cakes etc. and more !</p>

# <p>Personalized <a href="https://www.indiagift.in/cakes-delivery-online/photo-cakes"><strong>photo cakes</strong></a> from Indiagift are one of the top-rated cakes online. These special cakes are so much more than any normal cake as you can customize them by including a photo of your love in front of the cake. A cake which has your picture beside your name is certainly a wonderful memory which will last forever. To customize an exclusive photo cake online via Indiagift, place your order beforehand and reap benefits which will be sweeter than your cake.</p>

# <h2><strong>Choose your favorite from an array of flavors to send cakes to India</strong></h2>

# <p>You can never envision a cake without that soft, fluffy bread and the rich buttercream which separates the layers, and the &#39;oh so sweet&#39; icing which just melts in your heart. However, when it comes to cake there&rsquo;s always room for more and our think tanks search far and wide for the most exotic of cake flavors besides the everyday ones that have become our favorites. These delicious favors will surely send your taste buds on a whirl when you order them.</p>

# <p><strong>The Black Forest Cake</strong>- This delicious cake flavor is the classic mix of your favorite flavors-chocolate and vanilla, to give you the best of both the worlds. With sweet vanilla icing on the exterior and light chocolate flakes sprinkled on top, a <a href="https://www.indiagift.in/black-forest-cake"><strong>black forest cake</strong></a> is a hearty delight.</p>

# <p><strong>Fresh Fruit Cake&nbsp;</strong>- This cake offers the most colorful palette with fruit cut in slices in a backdrop of white vanilla cream. This delicious cake contains kiwi, strawberry, and apple slices along with oranges and cherries etc.</p>

# <p><strong>Cupcakes&nbsp;</strong>- <a href="https://www.indiagift.in/cakes-delivery-online/cup-cakes">Cupcakes</a> or mini cakes are one of the best edible creations which can be taken or sent anywhere to enjoy the heavenly goodness we call cakes. With Indiagift, you can have cupcakes delivered to your loved ones in flavors like Oreo Cupcakes, chocolate, vanilla, and pineapple.</p>

# <p><strong>Fondant cakes&nbsp;</strong>- <a href="https://www.indiagift.in/cakes-delivery-online/fondant-cakes">Fondant cakes</a> are the new thing in town with a sweet, sugary fondant sheet which covers the cake surface to craft cake masterpieces according to the themes. These fondant cakes are also called designer cakes as they have to be customized on special order based on the giftee&rsquo;s personality or the theme you are celebrating. You can have these designer cakes made for kids which resemble their favorite cartoon characters including, Barbie Cakes, Doraemon Cake, Lightning Mcqueen cakes and Mickey Mouse cakes etc. A designer cake from Indiagift will no doubt become the life of the party, no matter what occasion.</p>

# <p><strong>Tiered Cakes&nbsp;</strong>- <a href="https://www.indiagift.in/cakes-delivery-online/tier-cakes">Tier&nbsp;cakes </a>with their enormous size are something you usually view at weddings or galas. These monstrosities of cream and cake can now be ordered with Indiagift to surprise your loved ones on anniversaries and graduations. These tiered cakes can range from two tiers and more, to make sure your cake will leave everybody awestruck.</p>

# <p><strong>Gems Cake&nbsp;</strong>- Gems are one of the favorite candies we associate with childhood. A gems cake has two of your favorite things, a cake and a candy in one, to relish the sweetest memories of all. These colorful gems covering your cake from top to bottom in all the colors of the rainbow are a colorful treat everybody will love.</p>

# <p><strong>Fruit Cake/ Plum Cake</strong>-&nbsp; A <a href="https://www.indiagift.in/fruit-cakes">fruit cake </a>is basically a sponge cake that contains bits of dried fruits like cherry, orange, and apples on the inside and doesn&rsquo;t contain any icing like nude cakes. Besides fruit cake, you can also send plum cakes to anywhere in India for occasions like Christmas with <strong>online cake delivery</strong> from Indiagift.</p>

# <p><strong>Butterscotch cakes&nbsp;</strong>- <a href="https://www.indiagift.in/butterscotch-cakes">Butterscotch cakes </a>are one of the trending flavors where you can feel the rich buttery taste even as you savor the first bite along with crunchy caramel in between.</p>

# <p><strong>Coffee Walnut Cake&nbsp;</strong>- A coffee walnut cake in an exciting combination of rich coffee and walnut pieces that adds to the addictive taste of the cake. We also design the coffee walnut cake with a Starbucks theme so that you can have the ultimate coffee experience.</p>

# <p><strong>Mango Cake -</strong> Mangoes are seasonal fruits which you can only enjoy in summers. With Indiagift, you can send mango cake to your loved ones which has the sweet and tangy taste of mangoes.</p>

# <p><strong>Red Velvet Cake&nbsp;</strong>- <a href="https://www.indiagift.in/red-velvet-cakes">Red velvet cake</a> is everybody&rsquo;s favorite with velvety smooth bread and icing in between. With red color symbolizing passion and love, this sweet treat embodies love, both physically and symbolically. We also deliver red velvet cakes in a heart shape which sends all your senses in an overload.</p>

# <p><strong>Black Currant Cake&nbsp;</strong>- Luring you with its fascinating purple hue and tangy taste, a black currant cake is something you should try at least once in your lifetime, and Indiagift gives provides you with everything to explore this rare treat with your loved ones.</p>

# <h2><strong>Add a new addition to all your traditions with cakes from Indiagift on all occasions</strong></h2>

# <p>Although cakes are part of birthday and anniversary traditions, they can be made part of other events and occasions too, serving as the missing piece to all your traditions. Indiagift helps deliver cakes that are specially crafted for each occasion which grace the year and make sweet memories with our near and dear ones at every occasion possible. Therefore, to make sure that no occasions remain uncelebrated, a cake is a must factor for which distance doesn&rsquo;t become an obstacle as we deliver cakes from local cake shops and bakeries. Our collections boast of Mother&rsquo;s day cake, Father&rsquo;s day, Valentine&rsquo;s Day cake, Farewell cake, graduation cake, and Christmas cake etc.</p>

# <h2><strong>Does Indiagift deliver cakes to small cities?</strong></h2>

# <p>Yes! Indiagift delivery network is the biggest in the country which connects customers outside India to local cake shops, to deliver this sweet delicacy in even the smallest of city and towns. This nexus is made possible with loyal customers from India and around the world making sure that no one gets deprived of this sweetest of gift which makes every occasion a special one. All that is required of you is to go to the Indiagift portal, select a cake and Voila ! wait for your loved one&#39;s call, when they thank you for your generous gift.</p>

# <p>From Kashmir to Kanyakumari, and from Rajasthan to Bengal, we deliver online cakes and gifts in a jiffy with various delivery options when you opt us to send cakes in even the remotest town and city in India. All this is part of our endeavor to deliver love in any type, anyplace, and anytime. We have option of midnight cake delivery, same day&nbsp;</p>

# <h2><strong>Send Cakes to Delhi with Indiagift</strong></h2>

# <p>Hailing from the Delhi-NCR region we hold special regard for Delhites and those who share its proximity as they were among our first customers and played a huge role in Indiagift&rsquo;s success. Therefore, we are very particular when you employ us to <a href="https://www.indiagift.in/cakes-delivery-online-in-delhi"><strong>send cakes to Delhi</strong></a> and avail free shipping on your cake and gift orders. From the narrow streets of old Delhi to suburbs in New Delhi, we are well acquainted with everything this spectacular city has to offer and make the best of it when your employ Indiagift to your bidding.</p>

# <p>Life in a metropolitan city like Delhi can be nothing short of hectic and when you are crammed with work and loaded with responsibilities, a cake order may not be at the top of your list. To save your time and effort you can just select your cake from our category named cakes to view rows of cakes, all at your disposal to buy and send them to your loved ones in Delhi. Our online portal can be availed anywhere, whether you are at home or office and let our gifting professionals assist you in all the processes involved.</p>

# <h2><strong>100% seamless online process for online cake delivery in Mumbai</strong></h2>

# <p>Mumbai, the financial capital of India is also the &lsquo;it&rsquo; place for glitz and glam. This lively city never sleeps, so if you have friends and family who reside here, then surprise them with online cake delivery from Indiagift. As Indiagift is the best when it comes to on-time deliveries and customer satisfaction, you can never go wrong with us as your helpers for <a href="https://www.indiagift.in/cakes-delivery-online-in-mumbai"><strong>online cake delivery in Mumbai</strong></a>. Also, this online surprise will keep them awake, literally, even after initial shock fades on and remind them of how you went the extra mile to make their day extra special.</p>

# <p>As the main purpose behind each and every gesture of yours is love, a cake is the sweetest way to portray this love which they can taste with every bite. To order this lovely gift you can take the help of our online gifting experts who are always present online to offer assistance and advice on gift choices as well as the checkout process. This digitized way of gifting also helps you track your gift order until it reaches the destination and updating you with even the minutest of details so that you remain on tops of things.</p>

# <h2><strong>Same Day Cake delivery in Hyderabad via Indiagift</strong></h2>

# <p>You can never have too much of anything and our love for cakes simply justifies this statement. India, with its diverse cultures, has a lot of festivals and occasions which are celebrated with great pomp and celebration. At Indiagift, we are well aware of this need for variety and diversity as well as the obsession with celebrations of every kind. Therefore, we have cakes for each and every occasion in a variety of flavors which you can browse through and find your perfect match.</p>

# <p>No matter what occasion you are celebrating or which flavor you go for, you can opt for <strong><a href="https://www.indiagift.in/same-day-delivery">same day cake delivery </a>in Hyderabad</strong>. Hence, your cake will be delivered that very day even for last-minute orders so that none of your occasion gets spoilt or remains incomplete with late delivery and poor service. As time-orientation and the happiness of our customers is what drives to perfection, we try our level best so that our cakes and gifts make the recipient, as well as the giver, feel happier.</p>

# <h2><strong>Surprise your loved ones with midnight cake delivery in Bangalore from Indiagift</strong></h2>

# <p>Nobody can explain the euphoria felt with an unexpected surprise on their special day, especially when it&#39;s from your loved one who is miles away from you. This lovely and thoughtful gesture makes you feel loved and honored beyond measure while you feel as if you are on cloud nine. Indiagift wields the power to make this true for you and your loved ones with <a href="https://www.indiagift.in/cakes-delivery-online-in-bangalore"><strong>midnight cake delivery in Bangalore</strong></a>.</p>

# <p>All your orders, even the midnight ones are delivered from local bakeries and cake shops near you so that your cake is fresh and wholesome. Freshly baked and crafted with brilliance, a cake from Indiagift is an experience, nonetheless, which you can enjoy with your loved ones.</p>

# <h2><strong>Exciting deals comprising cakes and other gift options </strong></h2>

# <p>Cakes are a delectable package in itself, and Indiagift gives you the option to improvise your online cake orders as per your requirement. We offer exciting combo deals comprising of cakes and other gift items including flowers, chocolates, soft toys, and other personalized gift options. These combos contain two or more items so that you can overwhelm your loved ones with more than one gift to portray the depth of your feelings. As you log onto to the Indiagift website, avail the discount coupons and other enticing offers and experience the joy of giving in a whole new light with Indiagift.</p>


# <h2><strong>Send Cakes to India&nbsp;</strong></h2>

# <table border="1" cellpadding="0" cellspacing="1">
# 	<tbody>
# 		<tr>
# 			<td>
# 			<p><strong>&nbsp;&nbsp;S.No&nbsp;&nbsp;</strong></p>
# 			</td>
# 			<td>
# 			<p><strong>&nbsp;&nbsp;Send Cakes in India&nbsp;</strong></p>
# 			</td>
# 			<td>
# 			<p><strong>&nbsp;&nbsp;Send Cakes in India&nbsp;</strong></p>
# 			</td>
# 			<td>
# 			<p>&nbsp;&nbsp;<strong>&nbsp; Category of Cakes&nbsp; &nbsp;</strong></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>1</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-bangalore">Send Cakes to&nbsp;Bangalore</a>&nbsp;</p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/send-cakes-russia-to-india">Send Cakes to&nbsp;</a><a href="https://www.indiagift.in/cakes-delivery-online-in-delhi">Delhi</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/kids-cake">Birthday Cakes for Kids&nbsp;</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>2</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-mumbai">Send Cakes to Mumbai</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-pune">Send Cakes to Pune</a>&nbsp;</p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/barbie-cakes">Barbie Cakes&nbsp;</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>3</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-chennai">Send Cakes to Chennai</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-hyderabad">Send Cakes to Hyderabad</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/cakes-delivery-online/eggless-cakes">Eggless Cakes</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>4</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-gurgaon">Send Cakes to Gurgaon</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-kolkata">Send Cakes to Kolkata</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/combination-gifts-delivery-online/flowers-and-cakes">Cake N&nbsp;Flower Combo&nbsp;</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>5</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-noida">Send Cakes to Noida</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-lucknow">Send Cakes to Lucknow</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/combination-gifts-delivery-online/cakes-and-chocolates">Cake N Chocolate Combo</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>6</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-greater-noida">Send Cakes to Greater Noida</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-ghaziabad">Send Cakes to Ghaziabad</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp;<a href="https://www.indiagift.in/combination-gifts-delivery-online/cakes-and-teddy">Cake N Teddy Combos&nbsp;</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>7</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-bhopal">Send Cakes to Bhopal</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-faridabad">Send Cakes to Faridabad</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp; <a href="https://www.indiagift.in/birthday-cakes">Birthday Cakes to India</a></p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>8</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-kota">Send Cakes to Kota</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-kerala">Send Cakes to Kerala</a></p>
# 			</td>
# 			<td>
# 			<p>&nbsp;&nbsp;<a href="https://www.indiagift.in/occasions-delivery-online/anniversary/anniversary-cakes">Anniversary Cakes to India</a>&nbsp;</p>
# 			</td>
# 		</tr>
# 		<tr>
# 			<td>
# 			<p><strong>9</strong></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-vijaywada">Send Cakes to&nbsp;</a><a href="https://www.indiagift.in/cakes-delivery-online-in-indore">Indore</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/cakes-delivery-online-in-mhow-cantonment">Send Cakes to&nbsp;</a><a href="https://www.indiagift.in/cakes-delivery-online-in-jaipur">Jaipur</a></p>
# 			</td>
# 			<td>
# 			<p><a href="https://www.indiagift.in/chocolate-cakes">Chocolate Cakes</a></p>
# 			</td>
# 		</tr>
# 	</tbody>
# </table>
# --->
# 	<h2>Send Flower Bunches &amp; Bouquets Online</h2>

# <p><a href="https://www.indiagift.in/flowers-delivery-online/flower-bunch">Send flowers bunches</a> to India to whosoever you wish to send and select your own type of flowers to be there in the bunches that you are sending. The specialty of flowers as a gift is that they can be given as a present uniquely or with any other gift but flower bunches is a unique gifts themselves. <a href="https://www.indiagift.in/flowers-delivery-online" target="_blank">Flowers </a>sure do make a perfect gift to express your joy and love for the receiver and make them very happy as well. Now days when technology is on boom, it is not very tough to send flowers to the people closer to your heart living in any part of the country. All you have to do is just to select these flowers online, pay for them and send them directly at the address of the receiver and the best part is that they will get delivered and you would definitely enjoy receiving the services of online flowers and midnight cake delivery in India.</p>

# <h2>Flower Bouquets Online Delivery</h2>

# <p>Flowers speak the language of love like no other gift can express. Flowers are the ultimate gift which go well for all occasions. Apart from happy occasions like birthdays or anniversaries, where a lovely flower bouquet can make someone's day, flowers are also a good gifting idea for unhappy times like funeral, get well soon where they can perk up the day. Thus flower delivery in the form of cheerful flower bunches or <a href="https://www.indiagift.in/flowers-delivery-online/flower-bunch" target="_blank">bouquet of flowers </a>is always a good idea. All one wants to do is choose the perfect color or type of flowers for their flower bouquet delivery. When sending flowers to India, just make sure you choose relevant type of flowers for the kind of occasion involved. For examples- roses make a great choice for flower bunches online for anniversary flowers while lilies in the form of a bouquet of flowers are great as birthday flowers. So one has to just choose the right kind of flowers for delivery and leave the rest to a good <a href="https://www.indiagift.in/" target="_blank">online gifting site </a>like Indiagift.</p>

# <h2>Online Flower Bunches Delivery</h2>

# <p>Another wonderful aspect of flower delivery is that they are very easy to order. When ever one wishes to send flowers to India, it is easy and available at the click of a button. With the advent of technology, it is very easy to order a flower bunch for doorstep delivery at a loved one's place. They are cheerful and can be delivered within 4-5 hours. There is no preperation time when it comes to hand flower bunches. All has to be done is order flowers online and then they can be delivered within few hours to your loved one. For example - if you order a bouquet for flower delivery on Indiagift.in, a gifting specialist collects the perfect <a href="https://www.indiagift.in/flowers-delivery-online/flower-bunch" target="_blank">flower bouquets </a>from our florist shop, styles them in a bunch, packs them in crisp paper, stamps them with a lovely bow and your greetings on a gift card and the same is carefully hand delivered to your friends house. So basically, the whole process of spreading smiles through <a href="https://www.indiagift.in/occasions-delivery-online/birthday/birthday-flowers" target="_blank">online birthday flowers </a>can be done within a few hours. All you have to do is seek out your gifting partner- Indiagift.in for the same.</p>	 <div class="fl_full" itemtype="https://schema.org/AggregateOffer" itemscope="" itemprop="offers"> 
# 	 We have a collection of <span itemprop="offerCount"> 92</span> Products  <!--fresh flowers design-->
# 	 <span itemprop="category"> </span> for sale, range starts from INR <span itemprop="lowPrice">449</span>
# 	 <meta content="INR" itemprop="priceCurrency"> to INR <span itemprop="highPrice">2181</span> <meta content="INR" itemprop="priceCurrency">
# 	</div>

#    </div>
#   </div>
#   </div>
# '''

# # Parse the HTML content
# # Parse the HTML content
# soup = BeautifulSoup(html, 'html.parser')

# # Find all divs that contain product details
# product_divs = soup.find_all('div', class_='cols space2')

# # List to store all product details
# products = []

# # Loop through each div
# for div in product_divs:
# 	# Extract the details
# 	product_name = div.find('span', class_='product_name_ig').text
# 	product_price = div.find('span', class_='product_price').text
# 	image_link = div.find('img')['src']
# 	product_link = div.find('a')["href"]

# 	# Create a dictionary with the extracted details
	
# 	r = requests.get(product_link)
# 	soup = BeautifulSoup(r, 'html.parser')
# 	print(r)

# 	# Find product name
# 	product_name_element = soup.find(itemprop="name")
# 	if product_name_element is not None:
# 		product_name = product_name_element.text
# 	else:
# 		product_name = "Not found"

# 	# Find product description
# 	product_desc = soup.find(id="full_prd_desc").text.strip()
# 	print(f"Product Description: {product_desc}")

# 	dyprices = {}
# 	prices = soup.find_all(itemprop="price")
# 	for i, price in enumerate(prices, 1):
# 		print(f"Price {i}: {price['content']}")
# 		dyprices[f"Price {i}"] = price['content']
# 	product_details = {
# 		'name': product_name,
# 		'price': product_price,
# 		'image_link': image_link,
# 		'product_link': product_link,
# 		'product_desc' : product_desc,
# 		'prices' : dyprices
# 	}
# 	products.append(product_details)

# # Convert the list to JSON
# json_data = json.dumps(products)

# with open('products.json', 'w') as f:
# 	# Write the JSON data into the file
# 	f.write(json_data)


import requests

