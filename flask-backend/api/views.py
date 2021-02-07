from flask import Blueprint,jsonify

main = Blueprint('main',__name__)

# @main.route('/add_subreddit',methods=)

@main.route('/get_tickers')
def get_tickers():

    tickers=["$APPL","GME","SMD"]

    return jsonify({'tickers':tickers})

@main.route('/get_stock_analysis')
def get_stock_analysis():

    tickers=["$0000","GME","SMD"]

    return jsonify({'tickers':tickers})