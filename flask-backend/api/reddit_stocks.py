import praw
from praw.models.listing.mixins import subreddit
from collections import Counter
import re

client_id = "El3blMg2SrLwzQ"
client_secret ="JWLEBjSXCer9UkM4WqkHVl0-EdOipw"
user_agent="testing_api"


#  reddit class to get subreddit posts, sumbissions, extract ticker info
class Reddit:
    
    def __init__(self):
        self.Reddit=None
        self.tickers=[]
        self.tickCounter={}
        
    def create_reddit_obj(self,id,secret,agent,):
        self.reddit = praw.Reddit(client_id=id,client_secret=secret,user_agent=agent)
        #  reddit.subreddit(subreddit).hot(limit=post_limit)
        return self.reddit
    
    def get_comments(subreddit):
        comments=[]
        for submission in subreddit:
            for top_level_comment in submission.comments:
                comments.append(top_level_comment)
                print(top_level_comment.comments)

                # wordArr = top_level_comment.body.split()
                # for word in wordArr:
                    
                #     if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4:#:
                #         # print(word)
                #         if word not in tickers and word[0]=="$":
                #             tickers.append(word)
                #             hashTicks[word]=1                
                #         elif word in hashTicks:
                #             hashTicks[word]+=1
        return comments

    def count_ticks(self,subreddit):

        for submission  in subreddit:

            wordArr = submission.title.split()
            for word in wordArr:
       
                if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4 and word[0]=="$":#:
                    if word not in self.tickers:
                        self.tickers.append(word)
                        self.tickerCounter[word]=1                
                    elif word in hashTicks:
                        self.tickerCounter[word]+=1
            # for top_level_comment in submission.comments:
            #     wordArr = top_level_comment.body.split()
            #     for word in wordArr:
                    
            #         if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4:#:
            #             # print(word)
            #             if word not in tickers and word[0]=="$":
            #                 tickers.append(word)
            #                 hashTicks[word]=1                
            #             elif word in hashTicks:
            #                 hashTicks[word]+=1

            for ticks in self.tickers:
                if ticks in word:
                    self.tickerCounter[ticks]+=1

        return self.tickers,self.tickerCounter



    
    # get multiple sub reddits
# Canadapennystocks
# CanadianInvestor
# Baystreetbets



reddit = praw.Reddit(client_id=client_id,client_secret=client_secret,user_agent=user_agent)


# Currently using three subreddits 

reddit_canPen = reddit.subreddit("Canadapennystocks").hot(limit=1000)
reddit_canInv= reddit.subreddit("CanadianInvestor").hot(limit=1000) 
reddit_baySt = reddit.subreddit("Baystreetbets").hot(limit=500) 

# combined_subreddits = [reddit_baySt+reddit_canInv+reddit_canPen]

# hello i like $medv and 

'''
['$.90', '$FIRE.TO', '$EXPFF', '$BES.V', '$GKPRF.', '$FUSE.V', '$GBML', '$HITI', '$LTE', '$MRS', '$SOLR', '$BES.V!', '$TGOD', '$MXR', '$2M),', '$Amc', '$BBD-B', '$ATE.TO', '$BES.V', '$0.165!', '$LNK', '$MN.V', '($ZEN.V):', '$300m', '$3.55', '($GEM.V,', '$CZSVF),', '$4.50.', '$3.13', '$ETR', '$1.96', '$BRAG.V', '$LUCK.V', '$LUCK', '$1000?', '($RECO)', '$BES.V', '$ZONE', '$1.50.', '$FTRP.', '$8.50!!', '($IONGF)', '($GMA),', '$ETR', '$SCR', '$500', '$5.5M.', '$1000', '$IPA', '($PYR)', '$BEV.CN', '$GDNP.V', '($BEV.CN)', '$200', '$HITI.V?']
'''


# extract tickers!
# symbols = [word for word in words if len(word) > 3 and word[0]=="$" and word[1:].isalpha()]
# freqs = Counter(symbols)

tickers=[]
hashTicks={}

for submission  in reddit_baySt:
    # print("Post:",submission.title)
    wordArr = submission.title.split()
    for word in wordArr:
        # \b[A-Z]{3}\b[.!?]?
        # [$][A-Za-z][\S]*
        # if "FIRE" in word:
            # print(word)
        if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4 and word[0]=="$":#:
            if word not in tickers:
                tickers.append(word)
                hashTicks[word]=1                
            elif word in hashTicks:
                hashTicks[word]+=1
        # if word in str(tickers) and len(word)>2:
        #     print(word)
        # if "$" in word and len(word)>=4 and :
        #     tickers.append(word)


    # for top_level_comment in submission.comments:
    #     wordArr = top_level_comment.body.split()
    #     for word in wordArr:
            
    #         if bool(re.search('[$][A-Za-z][\S]*',word)) and len(word)>4:#:
    #             # print(word)
    #             if word not in tickers and word[0]=="$":
    #                 tickers.append(word)
    #                 hashTicks[word]=1                
    #             elif word in hashTicks:
    #                 hashTicks[word]+=1

    for ticks in tickers:
        if ticks in word:
            hashTicks[ticks]+=1

# print()
# print(hashTicks)
# print()
# print(tickers)
# print(len(tickers))

if __name__=="__main__":
    print("HELLO")
    new_reddit = Reddit().create_reddit_obj(client_id,client_secret,user_agent)
            #  reddit.subreddit(subreddit).hot(limit=post_limit)

    sub_name= "WallStreetBets"
    new_sub = new_reddit.subreddit(sub_name).hot(limit=10)
    Reddit.get_comments(new_sub)
