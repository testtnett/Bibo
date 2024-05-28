from django.db import models
from django.contrib.auth.models import User
import time


class Note(models.Model):
    title = models.CharField(max_length=80)
    content = models.TextField(max_length=800)
    created_at = models.DateTimeField(auto_now_add=True)
    timestamp = models.IntegerField(default=int(time.time()))
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title