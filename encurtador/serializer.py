from rest_framework import serializers
from .models import ShortUrl


class ShortUrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortUrl
        fields = ('id', 'link_original', 'link_custom')
        extra_kwargs = {
            'link_custom': {'required': False}
        }