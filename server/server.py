import os
from flask import Flask, request, jsonify
from recipe_scraper import scrape_data
from request import createPage
import env

token = os.environ.get('token')
databaseID = os.environ.get('databaseID')
headers = {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json",
    "Notion-Version": "2022-02-22"
}
 
# Initializing flask app
app = Flask(__name__)
 
# Route for seeing a data
@app.route('/data', methods=["POST"], strict_slashes=False)
def get_recipe():
    url = request.json['recipe_url']
    title, image, ingredients, steps = scrape_data(url)
    createPage(databaseID, headers, ingredients, steps, title, image, url)
    # Returning an api for showing in  reactjs
    return jsonify({
        'Title': title,
        "Image": image,
        "Steps": steps,
        "Ingredients": ingredients,
        })
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)
    