from flask import Flask, render_template, send_from_directory, url_for

app = Flask(__name__)

# ID de Google Analytics
GA_ID = "G-PH39V9K31V"


@app.context_processor
def datos_globales():
    # Esta variable queda disponible en todas las plantillas
    return {"ga_id": GA_ID}


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/app")
def mockups():
    return render_template("app.html", interactive_url=url_for("interactiva"))


@app.route("/interactiva")
def interactiva():
    # Muestra el archivo static/interactiva.html
    return send_from_directory("static", "interactiva.html")


if __name__ == "__main__":
    app.run(debug=True)
