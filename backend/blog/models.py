# blog/models.py

from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    date = models.DateField(auto_now_add=True)
    time_of_creation = models.TimeField(auto_now_add=True)
    author = models.CharField(max_length=56, null=False)
    title = models.CharField(max_length=56)
    category = models.CharField(max_length=56)
    content = models.TextField()

    def __str__(self):
        return f'{self.author} - {self.date}'


class comments(models.Model):
    author = models.CharField(max_length=56, null=False)
    title = models.CharField(max_length=56)
    category=models.CharField(max_length=56)
    content = models.TextField()
    comment= models.TextField()