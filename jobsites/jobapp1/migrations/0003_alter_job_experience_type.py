# Generated by Django 4.2.6 on 2023-10-16 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobapp1', '0002_alter_job_experience_type_alter_job_job_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='experience_type',
            field=models.CharField(choices=[('0-1 years', '0-1 years'), ('1-2 years', '1-2 years'), ('2-4 years', '2-4 years'), ('4-5 years', '4-5 years'), ('5+ years', '5+ years')], max_length=20),
        ),
    ]
