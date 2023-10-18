# Generated by Django 3.2.12 on 2023-10-17 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobapp1', '0004_job_countrycode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='countrycode',
            field=models.CharField(blank=True, choices=[('+91', 'India'), ('+7', 'Russia')], default='DEFAULT VALUE', max_length=3, null=True),
        ),
    ]