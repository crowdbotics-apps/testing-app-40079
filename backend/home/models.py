from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    intruction = models.TextField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    rating = models.IntegerField()
    image = models.CharField(max_length=256,)
class AttendEvent(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="attendevent_user",)
    event = models.ForeignKey("home.Event",on_delete=models.CASCADE,related_name="attendevent_event",)
class Event(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    city = models.CharField(max_length=256,)
    created_at = models.DateTimeField()
    image = models.CharField(max_length=256,)
    info = models.TextField()
    datetime = models.IntegerField(null=True,blank=True,)
