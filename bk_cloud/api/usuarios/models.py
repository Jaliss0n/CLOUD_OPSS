from django.db import models

# Create your models here.
class Cadastra(models.Model):
    cadastra_id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    telefone = models.CharField(max_length=30)
    end = models.CharField(max_length=255)
    prof= models.CharField(max_length=50)

    