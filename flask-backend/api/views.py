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

    arr_keys=[]
    arr_vals=[]
    for key in new_sorted:
        hashArray.append({"ticker":key,"Count":new_sorted[key]})
        arr_keys.append(key)
        arr_vals.append(new_sorted[key])

    final={}
    final['keys'] = arr_keys
    final['vals'] = arr_vals

    colors_arr =  ["#FF6384", "#36A2EB", "#FFCE56","#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
"#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
"#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
"#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
"#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
"#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
"#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
"#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
"#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
"#5be4f0", "#57c4d8", "#a4d17a", "#225b8",]

    final['colors']=colors_arr
    return hashArray,sub_array[0:40],final


# Returns the Tickers and the ticker hounders
@main.route('/get_stocks',methods=['POST'])
def get_stocks():
    subreddit_choice = request.get_json()
    subreddit_choice=subreddit_choice['choice']
    print(subreddit_choice)
    reddit_choice = create_subreddit(client_id=client_id,client_secret=client_secret,user_agent=user_agent,sub_name=subreddit_choice)
    tickers=find_ticker_counter(reddit_choice)
    

    return jsonify({'tickers':tickers})