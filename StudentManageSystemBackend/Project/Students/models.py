from django.db import models

# Create your models here.

class Student(models.Model):
    StudentName=models.CharField(max_length=20)
    Semester=models.IntegerField(unique=True)
    Course=models.CharField(max_length=20)
    SemesterCourses=[
    ('1', "1"),
    ('2', "2"),
    ('3', "3"),
    ('4', "4"),
    ('5', "5"),
    ('6', "6"),
    ('7', "7"),
    ('8', "8"),
    ]
    Semester=models.CharField(
        choices=SemesterCourses,
        max_length=20
        )

    Email=models.EmailField(unique=True)
    Phone=models.CharField(unique=True,max_length=11)
    Image=models.ImageField(default="",upload_to="StudentImages/")

    def __str__(self):
        return self.StudentName



