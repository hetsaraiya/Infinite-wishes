import cloudscraper
import cfscrape

sc = cfscrape.create_scraper()  
scraper = cloudscraper.create_scraper()  

## Make Request
response = sc.get("https://www.indiagift.in/blue-orchids-bunch-ig-2518")

print(response.content)


with open('index.html', 'w') as f:
    f.write(str(response.content))