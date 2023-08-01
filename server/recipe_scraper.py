from recipe_scrapers import scrape_me

def scrape_data(url):
    # scrapes data from recipe url
    scraper = scrape_me(url)

    title = scraper.title()
    image = scraper.image()
    ingredients = scraper.ingredients()
    steps = scraper.instructions_list() 
    return title, image, ingredients, steps