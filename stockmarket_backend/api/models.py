from enum import unique
from django.db import models

# Create your models here.

class Subreddit(models.Model):
    sub_name = models.CharField(max_length=60,default="",unique=True)
