# Generated by Django 5.1.4 on 2025-01-21 13:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_answer'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='answer',
            field=models.ForeignKey(default='SOMESTRING', on_delete=django.db.models.deletion.CASCADE, to='main.answer'),
        ),
    ]
