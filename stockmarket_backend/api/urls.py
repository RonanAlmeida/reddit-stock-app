

from django.urls import path
from .views import SubredditView

urlpatterns = [
    path('home',SubredditView.as_view())
]
