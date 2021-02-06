import praw
from praw.models.listing.mixins import subreddit

client_id = "El3blMg2SrLwzQ"
client_secret ="JWLEBjSXCer9UkM4WqkHVl0-EdOipw"
user_agent="testing_api"



# # reddit class to get subreddit 
# class Reddit:
    
#     def __init__(self):
#         self.Reddit=None
        
#     def create_reddit_obj(id,secret,agent):
#         reddit = praw.Reddit(client_id=id,client_secret=secret,user_agent=agent)
#         return reddit.subreddit(subreddit).hot(limit=post_limit)
        
    
    # get multiple sub reddits
# Canadapennystocks
# CanadianInvestor
# Baystreetbets


reddit = praw.Reddit(client_id=client_id,client_secret=client_secret,user_agent=user_agent)

def create_reddit_obj(id,secret,agent,subname,post_limit):
    reddit = praw.Reddit(client_id=id,client_secret=secret,user_agent=agent)
    return reddit.subreddit(subreddit).hot(limit=post_limit)


# Currently using three subreddits 

reddit_canPen = reddit.subreddit("Canadapennystocks").hot(limit=500)
reddit_canInv= reddit.subreddit("CanadianInvestor").hot(limit=1000) 
reddit_baySt = reddit.subreddit("Baystreetbets").hot(limit=1000) 

# combined_subreddits = [reddit_baySt+reddit_canInv+reddit_canPen]

for submission  in reddit_canPen:
    print("Post: ",submission .title)
    for top_level_comment in submission.comments:
        print("\n   -> Comment: ",top_level_comment.body)