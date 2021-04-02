from django.db import models
from multiselectfield import MultiSelectField
import datetime

class Especialidade(models.Model):

    nome = models.CharField(max_length=12, blank=False)

    def __str__(self):
        return str(self.nome)

class Profissional(models.Model):
    HORARIOS = (
        ('T01', '13:30'), # T01 => Tarde 1
        ('M01', '09:30'), # M01 => Manha 1
        ('T02', '17:00'),
        ('T03', '19:00'),
        ('M02', '10:30'),
        ('M03', '07:00'),
    )

    DATAS = (
        ('D01', datetime.date(2021, 3, 17)),
        ('D02', datetime.date(2021, 3, 10)),
        ('D03', datetime.date(2021, 3, 12)),
        ('D04', datetime.date(2021, 3, 1)),
        ('D05', datetime.date(2021, 3, 3)),
        ('D06', datetime.date(2021, 3, 5)),
        ('D07', datetime.date(2021, 3, 25))
    )

    nome = models.CharField(max_length=20, null=False, blank=False)
    horario_disponiveis = MultiSelectField(max_length=23, choices=HORARIOS, blank=False, min_choices=2, default=HORARIOS[0])
    data_disponiveis = MultiSelectField(max_length=23, choices=DATAS, blank=False, min_choices=2, default=DATAS[0])
    especialidade = models.ForeignKey(Especialidade, on_delete=models.CASCADE)
    crm = models.CharField(max_length=8)

    def __str__(self):
        return str(self.nome)

class Paciente(models.Model):
    nome = models.CharField(max_length=20, blank=False, default="Anonymus")

    def __str__(self):
        return str(self.nome)

class Consulta(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    especialidade = models.ForeignKey(Especialidade, on_delete=models.CASCADE)
    profissional = models.ForeignKey(Profissional, on_delete=models.CASCADE)
    data = MultiSelectField(max_length=23, choices=Profissional.DATAS, blank=False, max_choices=1, min_choices=1, unique=True, default=Profissional.DATAS[0])
    horario_disponiveis = MultiSelectField(max_length=23, choices=Profissional.HORARIOS, blank=False, max_choices=1, min_choices=1, unique=True, default=Profissional.HORARIOS[0])

    def __str__(self):
        nome = self.profissional
        return f'consulta com {nome}'

