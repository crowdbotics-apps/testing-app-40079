from django.contrib import admin
from .models import AttendEvent,Employee,Event,Recipe
admin.site.register(Recipe)
admin.site.register(AttendEvent)
admin.site.register(Event)
admin.site.register(Employee)

# Register your models here.
