from django.db import models
import uuid
from versatileimagefield.fields import VersatileImageField

# Create your models here.
class Products(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # ProductID = models.BigIntegerField(unique=True)
    ProductID = models.AutoField(primary_key=True)
    ProductCode = models.CharField(max_length=255)
    ProductName = models.CharField(max_length=255)
    ProductImage = VersatileImageField(upload_to="uploads/", blank=True, null=True)
    CreatedDate = models.DateTimeField(auto_now_add=True)
    UpdatedDate = models.DateTimeField(blank=True, null=True)
    IsFavourite = models.BooleanField(default=False)
    Active = models.BooleanField(default=True)
    HSNCode = models.CharField(max_length=255, blank=True, null=True)
    TotalStock = models.DecimalField(
        default=0.00, max_digits=20, decimal_places=8, blank=True, null=True
    )
