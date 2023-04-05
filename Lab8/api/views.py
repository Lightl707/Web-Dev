from django.shortcuts import render


from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Product, Category


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_id(request, id):
    category = Category.objects.filter(id = id).first()
    return JsonResponse(category.to_json(), safe=False)


def category_products(request, id):
    category = Category.objects.get(id=id)
    products = Product.objects.filter(category=category)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_list(request):
    # select * from auth_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_id(request, id):
    product = Product.objects.filter(id=id).first()
    return JsonResponse(product.to_json(), safe=False)
