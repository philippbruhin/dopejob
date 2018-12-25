from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login_view, name='login'),
    path('register', views.register_view, name='register'),
    path('logout', views.logout_view, name='logout'),
    path('user', views.profile, name='profile'),
    path('preview_email', views.preview_email, name='preview_email'),
    path('notifications', views.NotificationListView.as_view(), name='notifications'),
]
