import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { toast } from 'react-toastify';

const PaymentForm = ({ closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [cartData, refetch] = useCart();
  const { user } = useAuth();

  const price = cartData.reduce((previousValue, currentValue) => {
    return (
      previousValue + currentValue.quantity * currentValue.orderDetails.price
    );
  }, 0);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axiosPrivate.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
      // [DEV] For demo purposes only
      setDpmCheckerLink(res.data.dpmCheckerLink);
    });
  }, [axiosPrivate, price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm card payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      // Check for specific error types if they exist
      if (
        confirmError.type === "card_error" ||
        confirmError.type === "validation_error"
      ) {
        setError(confirmError.message);
      } else {
        // Handle other potential errors
        setError("An unexpected error occurred. Please try again.");
      }
    } else {
      console.log("PaymentIntent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        const payment = {
          email: user?.email,
          price,
          date: new Date(),
          cartIds: cartData.map((item) => item._id),
          productIds: cartData.map((item) => item.productId),
          quantity: cartData.map((item) => item.quantity),
          transactionId: paymentIntent.id,
          status: "pending",
        };

        const res = await axiosPrivate.post("/payments", payment);

        if(res.data.deleteResult.deletedCount>0 && res.data.postResult.insertedId){
          toast.success("Payment SuccessFull")
          refetch()
          closeModal()
        }
      }

      // Handle successful payment here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="my-6 text-red-600 font-semibold text-md">{error}</p>
      <div className="flex items-center justify-around">
        <button
          type="submit"
          disabled={!stripe}
          className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#D1A054] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#f1be70] rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-[#D1A054] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Pay Now
          </span>
        </button>
        <button
          onClick={closeModal}
          className="relative inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-rose-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-rose-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative text-rose-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Back
          </span>
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
