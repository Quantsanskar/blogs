# blog/serializers.py

from rest_framework import serializers
from .models import (
    Blog,
    comments,
)


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'date', 'time_of_creation', 'title','author','category', 'content']

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = comments
        fields = ['id',  'title','author','category', 'content','comment']