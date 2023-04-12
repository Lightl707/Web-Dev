# from django.shortcuts import render
from .models import Company, Vacancy
from django.http.response import JsonResponse


def company_list(request):
    companies = Company.objects.all()
    company_json = [c.to_json() for c in companies]
    return JsonResponse(company_json, safe=False)


def company_id(request, id):
    company = Company.objects.filter(id=id).first()
    return JsonResponse(company.to_json(), safe=False)


def company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company=id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_id(request, id):
    vacancy = Vacancy.oblects.filter(id=id).first()
    return JsonResponse(vacancy.to_json(), safe=False)


def top_ten_vacancies(request):
    topTen = Vacancy.objects.order_by('-salary')[0:10]
    topTen_json = [tt.to_json for tt in topTen]
    return JsonResponse(topTen_json, safe=False)
