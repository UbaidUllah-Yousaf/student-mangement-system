
from django.contrib import admin
from django.urls import path
from Students import views
from . import views

urlpatterns = [
    path('', views.showStudent,name="students"),
    path('studentsAPI',views.showStudents,name="studentsAPI"),
    path('deleteStudents/<str:pk>/',views.deleteStudents,name="deleteStudents"),
    
    
]
