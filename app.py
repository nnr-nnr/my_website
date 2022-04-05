from flask import Flask, redirect
from flask import render_template
import random_curve
# import requests
# import json
from pprint import pprint

# initializes flask app:
app = Flask(__name__)

# homepage
@app.route('/')
def home():
    return render_template(
        'index.html',
        curve = random_curve.hist_()
    )

@app.route('/about')
def about():
    return redirect(app.route('/')) # CHECK THIS




#####################################
# Enables flask app to run using    #
# "python3 app.py" command.         #
# Or you can use "flask run"        #
##################################### 
if __name__ == '__main__':
    app.run()