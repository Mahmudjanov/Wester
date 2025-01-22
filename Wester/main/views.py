from django.shortcuts import render, redirect
from.models import*
from django.contrib.auth.models import User



def index_view(request):
    context = {
        'banner' : Banner.objects.last(),
    }
    return render(request, 'index.html', context)



def questions_view(request):
    context = {
        'questions' : Questions.objects.all().order_by("id")[:4],
    }
    return render(request, 'question.html', context)



def result_view(request):
    context = {

    }
    return render(request, 'result.html', context)



def create_form(request):
    if request.method == 'POST':
        form =Form.objects.create(
            name = request.POST.get('name'),
            age = request.POST.get('age'),
            phone = request.POST.get('phone'),
        )
        return redirect("index.html")

