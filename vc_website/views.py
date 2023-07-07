from django.shortcuts import render

def homepage(request): 

    
    return render(
        request, 
        'vc_website/index.html',
    )
