from django.db import models

import string
import secrets

def generate_short_code(size=5):
    characters = string.ascii_letters + string.digits
    return ''.join(secrets.choice(characters) for _ in range(size))


class ShortUrl(models.Model):
    link_original = models.URLField()
    link_custom = models.SlugField(unique=True, blank=True, null=True)

    class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Links'

    def __str__(self):
        return self.link_original
    
    def save(self, *args, **kwargs):
        if not self.link_custom:
            code = generate_short_code()
            while ShortUrl.objects.filter(link_custom=code).exists():
                code = generate_short_code()
            self.link_custom = code
        super().save(*args, **kwargs)
