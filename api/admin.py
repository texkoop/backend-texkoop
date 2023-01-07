from django.contrib import admin
from .models import *


class WaitlistAdmin(admin.ModelAdmin):
    list_filter = ['role']
    list_display = ('name', 'email', 'role', 'date')

admin.site.register(Waitlist, WaitlistAdmin)