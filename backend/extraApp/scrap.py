import requests
url = "https://www.igp.com/api/products"

payload = "{\"post\":{\"l\":100,\"cid\":13041,\"url\":\"igp=personalized-same-day-delivery-gifts\",\"off\":0},\"get\":{\"facets\":\"category,color,occasion\",\"sort\":\"wt_desc\"}}"
headers = {
				'accept': 'application/json, text/javascript, /; q=0.01',
				'accept-language': 'en-US,en;q=0.9,gu;q=0.8,ru;q=0.7,hi;q=0.6',
				'content-type': 'application/json; charset=UTF-8',
				'origin': 'https://www.igp.com',
				'Cookie': '__utmzz_igp=utmcsr%3D(direct)%7Cutmcmd%3D(none)%7Cutmccn%3D(not%20set); __utmzzses_igp=1; ab_convenience=ab_convenience_var2; ab_desc=ab_desc_var2; ab_multiple=ab_multiple_var2; ab_pdprevamp=ab_pdprevamp_var2; ab_personalized_search=default; ab_product_rank=ab_product_rank_var2; ab_reco=default; ab_select=ab_select_var2; ab_theme=71; igp=s%3Ae4e70777-5cbc-4313-aa12-38349cc368b5.zr49Pbr8sTJb1ZKVYKuZCUryDLeCs3REz2aXOcknfHI; ip=103.90.47.58; ipCountry=IN; lp=%2Fapi%2Fproducts; oldtokenid=01f61ce6-809e-48db-a6ee-5e3d9e82be90; setUtmCampaign=(not%20set); setUtmMedium=(none); setUtmMediumLM=(none); setUtmSource=(direct); setUtmSourceLM=(direct); tokenid=012bcfdb-5883-4e79-92ad-0ed31a3103be; uniqueId=813ab423-579f-41f3-9352-7a216326b056'
}

response = requests.request("POST", url, headers=headers, data=payload)

with open('products_igp_personalized-same-day-delivery-gifts.json', 'w') as f:
	# Write the JSON data into the file
	f.write(response.text)

print(response.text)