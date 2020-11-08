from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
	return render_template('camera.html'), 200

@app.route('/etudiant')
def etudiant():
	return render_template('etudiant.html'), 200

@app.route('/personnel')
def personnel():
	return render_template('personnel.html'), 200

@app.route('/professeur')
def professeur():
	return render_template('professeur.html'), 200

@app.route('/statEtudiant')
def statEtudiant():
	return render_template('statEtudiant.html'), 200

@app.route('/statPersonnel')
def statPersonnel():
	return render_template('statPersonnel.html'), 200

if __name__ == "__main__":
	app.run()