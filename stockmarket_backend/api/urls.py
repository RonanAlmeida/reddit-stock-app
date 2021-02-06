

from django.urls import path
from .views import main

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('home',main)
]
