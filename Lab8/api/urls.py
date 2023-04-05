from django.urls import path
from .views import product_list, product_id, category_products, category_list, category_id

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product_id),
    path('categories/', category_list),
    path('categories/<int:id>/', category_id),
    path('categories/<int:id>/products/', category_products),
]