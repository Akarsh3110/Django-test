# Generated by Django 5.1.4 on 2024-12-06 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='id',
        ),
        migrations.AlterField(
            model_name='products',
            name='ProductID',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
