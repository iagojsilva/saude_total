# Generated by Django 3.1.5 on 2021-04-02 19:08

import datetime
from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_consulta_especialidade'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profissional',
            name='data_disponiveis',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('D01', datetime.date(2021, 3, 17)), ('D02', datetime.date(2021, 3, 10)), ('D03', datetime.date(2021, 3, 12)), ('D04', datetime.date(2021, 3, 1)), ('D05', datetime.date(2021, 3, 3)), ('D06', datetime.date(2021, 3, 5)), ('D07', datetime.date(2021, 3, 25))], default=('D01', datetime.date(2021, 3, 17)), max_length=23),
        ),
    ]