web: gunicorn project.wsgi:application --preload
worker: celery -A project worker beat -l info --without-gossip --without-mingle --without-heartbeat
