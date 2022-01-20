from django.conf.urls import url
from .views import (CreateConnectedAccountAPIView,
                    GenerateLinksAPIView, AddCustomUserAPIView, CreateOneTimePaymentAPIView)
urlpatterns = [
    url('createConnectedAccount/', CreateConnectedAccountAPIView.as_view(), name='create-connected-account'),
    url('generateLink/', GenerateLinksAPIView.as_view(), name='generate-link'),
    url('createUser/', AddCustomUserAPIView.as_view(), name='create-user'),
    url('createOneTimePayment/', CreateOneTimePaymentAPIView.as_view(), name='create-onetime-payment'),
]