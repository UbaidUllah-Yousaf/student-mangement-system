
from rest_framework import serializers
from .models import Student



class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'

    def create(self, validate_data):
        instance = Student.objects.create(**validate_data)
        return instance