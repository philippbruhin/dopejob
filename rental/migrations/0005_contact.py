# Generated by Django 2.0 on 2018-01-21 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rental', '0004_car_car_models'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=250)),
                ('topic', models.CharField(choices=[('GE', 'General informations'), ('PA', 'Payment'), ('CA', 'Careers'), ('TE', 'Technical support')], default='GE', max_length=2)),
                ('message', models.CharField(max_length=1000)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('-timestamp',),
            },
        ),
    ]
