from django.shortcuts import redirect
from rest_framework import status
from rest_framework import mixins, viewsets
from rest_framework.response import Response
from .models import ShortUrl
from .serializer import ShortUrlSerializer


class ShortUrlViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    viewsets.GenericViewSet
):
    queryset = ShortUrl.objects.all()
    serializer_class = ShortUrlSerializer
    lookup_field = 'link_custom'
