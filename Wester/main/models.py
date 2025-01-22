from django.db import models
from django.contrib.auth.models import User



class Banner(models.Model):
    title = models.CharField(max_length=100)



class Answer(models.Model):
    text = models.TextField()



class Questions(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)



class Form(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()         
    phone = models.CharField(max_length=100)
