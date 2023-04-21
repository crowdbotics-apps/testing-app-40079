# Generated by Django 2.2.28 on 2023-04-21 14:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_attendevent_event'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='datatime',
        ),
        migrations.AddField(
            model_name='event',
            name='datetime',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='attendevent',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='attendevent_event', to='home.Event'),
        ),
    ]