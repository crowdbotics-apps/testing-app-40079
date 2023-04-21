from django.contrib import admin
from .models import AttendEvent,Event,Recipe
admin.site.register(Recipe)
admin.site.register(AttendEvent)
admin.site.register(Event)

# Register your models here.
