from flask import Flask, render_template

app = Flask(__name__)

# CAMBIA ESTOS DOS VALORES
APP_URL = "https://play.google.com/store/apps/details?id=TU_APP"
GA_ID = "G-PH39V9K31V"

@app.route("/")
def inicio():
    return render_template("index.html", app_url=APP_URL, ga_id=GA_ID)

if __name__ == "__main__":
    app.run(debug=True)