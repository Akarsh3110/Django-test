from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from .models import Products
# from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# def print_hello(request):
#     return render(request,'index.html')
    # return HttpResponse('hello')
# @csrf_exempt
def create(request):
    if request.method=='POST':
        ProductName=request.POST.get('ProductName')
        ProductCode=request.POST.get('ProductCode')
        HSNCode=request.POST.get('HSNCode')
        TotalStock=request.POST.get('TotalStock')
        ProductImage=request.FILES.get('ProductImage')
        products_obj=Products(ProductName=ProductName,ProductCode=ProductCode,HSNCode=HSNCode,TotalStock=TotalStock,ProductImage=ProductImage)
        products_obj.save()
        return JsonResponse({'message': 'Product created successfully!'}, status=201)
    # return render(request,'index.html')
    

    return JsonResponse({'error': 'Invalid request method.'}, status=400)

def productlist(request):
    productlist=Products.objects.all().values('ProductName', 'ProductCode', 'HSNCode', 'TotalStock','ProductImage') 
    print(productlist)
    return JsonResponse(list(productlist), safe=False)
    # return render(request,'index.html',{'products':productlist})

def edit(request):
    return render(request,'index.html')