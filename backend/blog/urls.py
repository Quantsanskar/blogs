# blog/urls.py

from django.urls import path
from .views import (
    BlogListCreate, 
    BlogDetail, 
    CommentListCreate,
    )

urlpatterns = [
    path('blogs/', BlogListCreate.as_view(), name='blog-list-create'),
    path('blogs/<int:pk>/', BlogDetail.as_view(), name='blog-detail'),
    path('comments/', CommentListCreate.as_view(), name="comment-list-create")
]
