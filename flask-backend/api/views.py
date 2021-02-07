from flask import Blueprint,jsonify,request
import praw
from praw.models.listing.mixins import subreddit
from collections import Counter
import operator
import re

from prawcore import requestor

client_id = "El3blMg2SrLwzQ"
client_secret ="JWLEBjSXCer9UkM4WqkHVl0-EdOipw"
user_agent="testing_api"



main = Blueprint('main',__name__)


# reddit_canPen = reddit.subreddit("Canadapennystocks").hot(limit=1000)
# reddit_canInv= reddit.subreddit("CanadianInvestor").hot(limit=1000) 
# reddit_baySt = reddit.subreddit("Baystreetbets").hot(limit=500) 

def create_subreddit(client_id,client_secret,user_agent,sub_name):
    reddit = praw.Reddit(client_id=client_id,client_secret=client_secret,user_agent=user_agent)
    sub_reddit = reddit.subreddit(sub_name).hot(limit=800)
    return sub_reddit

def find_ticker_counter(subreddit):
    
    tickers=[]
    hashArray=[]
    hashTicks={}
    sub_array = []
    for submission in subreddit:
        sub_array.append(submission.title)
        # print("Post:",submission.title)
        wordArr = submission.title.split()
        for word in wordArr:
            # \b[A-Z]{3}\b[.!?]?
            # [$][A-Za-z][\S]*
            # if "FIRE" in word:
                # print(word)
            if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4 and word[0]=="$" and word[-1]!=")" and  word[-1]!="," and word[-1]!="!"and word[-1]!="."and word[-1]!="?"and word[-1]!=":":
                if word not in tickers and word not in hashTicks:
                    tickers.append(word[1:len(word)])
                    hashTicks[word[1:len(word)]]=1                
                elif word in hashTicks:
                    hashTicks[word[1:len(word)]]+=1


        for ticks in tickers:
            if ticks in word:
                hashTicks[ticks]+=1

    
    improv={}
    for key in hashTicks:
        if hashTicks[key]>1:
            improv[key]=hashTicks[key]

    sum_val=0
    for key in improv:
        sum_val+=improv[key]
    
    for key in improv:
        improv[key] = round((improv[key]/sum_val)*100,2)
    # new_sorted = {k: v for k, v in sorted(improv.items(), key=lambda item: item[1])}
    new_sorted = dict(sorted(improv.items(), key=operator.itemgetter(1),reverse=True))

    for key in new_sorted:
        hashArray.append({"ticker":key,"Count":new_sorted[key]})
    return hashArray,sub_array[0:40]


# Returns the Tickers and the ticker hounders
@main.route('/get_stocks',methods=['POST'])
def get_stocks():
    subreddit_choice = request.get_json()
    subreddit_choice=subreddit_choice['choice']
    print(subreddit_choice)
    reddit_choice = create_subreddit(client_id=client_id,client_secret=client_secret,user_agent=user_agent,sub_name=subreddit_choice)
    tickers=find_ticker_counter(reddit_choice)
    

    return jsonify({'tickers':tickers})