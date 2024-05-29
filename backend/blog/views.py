from django.shortcuts import render

# Create your views here.# blog/views.py

from rest_framework import generics
from .models import (
    Blog,
    comments,
)
from .serializers import (
    BlogSerializer,
    CommentsSerializer,
)

class BlogListCreate(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CommentListCreate(generics.ListCreateAPIView):
    queryset = comments.objects.all()
    serializer_class=CommentsSerializer