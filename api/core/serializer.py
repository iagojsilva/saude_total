from rest_framework import serializers
from .models import Consulta, Profissional, Paciente, Especialidade

class EspecialidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidade
        fields = ['nome']

class ProfissionalSerializer(serializers.ModelSerializer):

    especialidade = serializers.ReadOnlyField(source='especialidade.nome')
    data_disponiveis = serializers.SerializerMethodField()
    horario_disponiveis = serializers.SerializerMethodField()

    class Meta:
        model = Profissional
        fields = ['nome', 'especialidade', 'crm','horario_disponiveis', 'data_disponiveis']

    
    def get_data_disponiveis(self, obj):
        return obj.get_data_disponiveis_display()

    def get_horario_disponiveis(self, obj):
        return obj.get_horario_disponiveis_display()

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        exclude = []

class ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consulta
        fields = ['paciente', 'especialidade', 'profissional', 'data', 'horario_disponiveis']



class ListaPacienteConsultasSerializer(serializers.ModelSerializer):

    profissional = serializers.ReadOnlyField(source='profissional.nome')
    
    especialidade = serializers.SerializerMethodField()
    data = serializers.SerializerMethodField()
    horario_disponiveis = serializers.SerializerMethodField()

    class Meta:
        model = Consulta
        fields = ['profissional', 'especialidade', 'data', 'horario_disponiveis']

    def get_especialidade(self, obj):
        return obj.profissional.get_especialidade_display()

    def get_data(self, obj):
        return obj.get_data_display()

    def get_horario_disponiveis(self, obj):
        return obj.get_horario_disponiveis_display()


class ListaProfissionaisEspecialidade(serializers.ModelSerializer):
    class Meta:
        model = Profissional
        fields = ['id']