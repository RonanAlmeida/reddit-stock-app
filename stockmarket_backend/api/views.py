# from stockmarket_backend.api.models import Subreddit
from django.shortcuts import render
from rest_framework import generics
from .serializaers import SubredditSerializer
from .models import Subreddit

# Create your views here.

class SubredditView(generics.ListAPIView):
    queryset = Subreddit.objects.all()
    serializer_class = SubredditSerializer


# def main(request):
#     return HttpResponse("<h1>Hello")

