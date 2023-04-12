from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = {
    path('companies/', company_list),
    path('companies/<int:id>/', company_id),
    path('companies/<int:id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:id>', vacancy_id),
    path('vacancies/top_ten/', top_ten_vacancies)
}
