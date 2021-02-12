from django.shortcuts import render
from rest_framework import viewsets ,permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


from .serializers import StudentSerializers

# Create your views here.
from .models import Student
from django.http import HttpResponse

def showStudent(request):
    temp=Student.objects.all()
    print(temp)
    student= "<h1>"+str(temp[0].StudentName)+"</h1>"
    student= student+"<h1>"+str(temp[0].Phone)+"</h1>"
    student= student+"<h1>"+str(temp[0].Email)+"</h1>"


    return HttpResponse(str(student))





@api_view(['GET', 'POST'])
def showStudents(request):
    if request.method == 'GET':
        student=Student.objects.all()
        serializer= StudentSerializers(student,many=True)
        return Response(serializer.data)

    
    elif request.method == 'POST':
        serializer = StudentSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # elif request.method == 'DELETE':
    #     serializer = StudentSerializers.get_object(pk)
    #     serializer.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT) 
        











@api_view(['DELETE'])
def deleteStudents(request, pk, format=None):
    
    serializer = Student.objects.get(pk=pk)
    serializer.delete()
    return Response(status=status.HTTP_204_NO_CONTENT) 