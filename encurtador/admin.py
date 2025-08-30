from django.contrib import admin
from .models import ShortUrl


@admin.register(ShortUrl)
class ShortUrlAdmin(admin.ModelAdmin):
    list_display = ('link_original', 'link_custom')
    search_fields = ('link_original', 'link_custom')