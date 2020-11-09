from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     error = None
#     if request.method == 'POST':
#         if request.form['username'] != 'admin' or request.form['password'] != 'admin':
#             error = 'Invalid Credentials. Please try again.'
#         else:
#             return render_template('camera.html'), 200
#     return render_template('login.html', error=error)

@app.route('/login', methods=['GET','POST'])
def login():
	error = None
	print(request.method)
	if request.method == "POST":
		print(dict(request.form))
		if request.form['username'] != 'admin' or request.form['password'] != 'admin':
			print("akato va")
			error = "Diso"
		else:
			print("aty aty")
			return render_template('camera.html'), 200
	return render_template('login.html', error=error)


@app.route('/signup')
def signup():
	return render_template('signup.html'), 200

app.route('/')
def camera():
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