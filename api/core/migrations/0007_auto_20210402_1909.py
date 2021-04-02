# Generated by Django 3.1.5 on 2021-04-02 19:09

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20210402_1908'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profissional',
            name='horario_disponiveis',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('T01', '13:30'), ('M01', '09:30'), ('T02', '17:00'), ('T03', '19:00'), ('M02', '10:30'), ('M03', '07:00')], default=('T01', '13:30'), max_length=23),
        ),
    ]