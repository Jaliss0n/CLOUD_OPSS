from django.contrib import admin
from django.urls import path, include
from usuarios.views import CadastraViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cadastras',CadastraViewSet )

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('usuarios/', include('rest_framework.urls'))
]
