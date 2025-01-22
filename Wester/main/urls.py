from django.urls import path
from.views import*

urlpatterns = [
    path('',index_view, name='index'),
    path('questions/',questions_view, name='questions'),
    path('result/',result_view, name='result'),
    path('create_form/', create_form, name='create_form')
]