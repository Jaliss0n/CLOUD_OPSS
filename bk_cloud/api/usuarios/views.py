from django.shortcuts import render
from rest_framework import viewsets
from .models import Cadastra
from api.serializers import CadastraSerializer
# Create your views here.

class CadastraViewSet(viewsets.ModelViewSet):
    queryset = Cadastra.objects.all()
    serializer_class = CadastraSerializer

