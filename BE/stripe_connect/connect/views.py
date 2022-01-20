from rest_framework.response import Response
from .utils import ResponseInfo
from rest_framework.generics import (GenericAPIView)
import stripe
import os
from dotenv import load_dotenv
load_dotenv()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


# Create Connected Account and Generate Link
class CreateConnectedAccountAPIView(GenericAPIView):
    """
    Create Connected account API View
    """
    permission_classes = ()
    authentication_classes = ()

    def __init__(self, **kwargs):
        """
         Constructor function for formatting the web response to return.
        """
        self.response_format = ResponseInfo().response

    def post(self, request):
        # create stripe connected account
        account = stripe.Account.create(
            type='standard',
        )
        self.response_format["data"] = account
        return Response(self.response_format)


class GenerateLinksAPIView(GenericAPIView):
    """
    Generate Links for Connected Account
    """

    permission_classes = ()
    authentication_classes = ()
    def __init__(self, **kwargs):
        """
         Constructor function for formatting the web response to return.
        """
        self.response_format = ResponseInfo().response

    def post(self, request):
        account = self.request.data["account_id"]
        url = self.request.data["url"]

        # Create Account Link
        account_links = stripe.AccountLink.create(
            account=account,
            refresh_url=url,
            return_url=url,
            type='account_onboarding',
        )
        self.response_format["data"] = account_links
        return Response(self.response_format)


class AddCustomUserAPIView(GenericAPIView):
    """
    Create Customer Strip API View
    """

    def __init__(self, **kwargs):
        """
         Constructor function for formatting the web response to return.
        """
        self.response_format = ResponseInfo().response

    def post(self, request):
        email = self.request.data["email"]
        token = self.request.data["token"]

        # Create Stripe Customer

        customer_obj = stripe.Customer.create(
            email=email,
            source=token
        )

        customer = customer_obj["id"]

        setup_intent_data = stripe.SetupIntent.create(
            payment_method_types=["card"],
            customer=customer
        )

        final_data = {
            "customer": customer,
            "secret_key": setup_intent_data["client_secret"],
            "email": email
        }

        self.response_format["data"] = final_data
        return Response(self.response_format)


class CreateOneTimePaymentAPIView(GenericAPIView):
    """
    Create One time Payment API View
    """

    def __init__(self, **kwargs):
        """
         Constructor function for formatting the web response to return.
        """
        self.response_format = ResponseInfo().response

    def post(self, request):
        customer_id = self.request.data["customer_id"]
        amount = self.request.data["amount"]
        account_id=self.request.data["account_id"]

        payment_intent_data = stripe.PaymentIntent.create(
            amount=amount,
            currency='inr',
            customer=customer_id,
            confirm=True,
            on_behalf_of=account_id,
            description="Demo",
            application_fee_amount=(10 * 100),
            transfer_data={
                'destination': account_id,
            },
        )

        self.response_format["data"] = payment_intent_data
        return Response(self.response_format)