# Flask backend for simple T-shirt shop website
from flask import Flask, render_template
app = Flask(__name__)

products = [
    {"name": "Classic White Tee", "price": 69, "desc": "100% bawełna", "image": "Biały T-shirt"},
    {"name": "Black Essential Tee", "price": 79, "desc": "Głęboka czerń", "image": "Czarny T-shirt"},
    {"name": "Grey Everyday Tee", "price": 69, "desc": "Neutralny szary", "image": "Szary T-shirt"},
    {"name": "Navy Smart Tee", "price": 79, "desc": "Granatowy, elegancki", "image": "Granatowy T-shirt"}
]

@app.route("/")
def home():
    return render_template("index.html", products=products)

if __name__ == "__main__":
    app.run(debug=True)
