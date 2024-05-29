# blog/admin.py

from django.contrib import admin
from .models import (
    Blog,
    comments,
)

admin.site.register(Blog)
admin.site.register(comments)