"""
Routes and views for the flask application.
"""
from datetime import datetime

from flask import request
from flask import render_template
from dlstudio import app

# from domain_classes.data import DataTest
from json_util import JsonDecoder, JsonEncoder
from data import DataTest
# from domain_classes.data import data
app.json_decoder = JsonDecoder
app.json_encoder = JsonEncoder


@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )


@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )


@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )


@app.route('/_get_blocks')
def get_blocks():
    lib_type = request.args.get('lib_type', 'c', type=str)
    print '_get_blocks called\n', lib_type
    d = DataTest(0, 'RBM', None)
    cc = JsonEncoder().encode(d)
    return cc
