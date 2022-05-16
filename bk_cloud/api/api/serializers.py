from dataclasses import field, fields
from rest_framework import serializers
from usuarios.models import Cadastra

class CadastraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastra
        fields = ('cadastra_id', 'nome', 'email', 'telefone', 'end','prof')