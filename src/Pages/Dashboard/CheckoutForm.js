import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({payment}) => {
    const{price, clientName, itemName, clientEmail} = payment;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError , setCardError] = useState("");
  
    const [clientSecret, setClientSecret] = useState("");

    console.log(price);

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://mysterious-fortress-37861.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);




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
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

     

      setCardError(error?.message || '');
  
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }


      // confirm card payment s

      const {paymentIntent, error: paymentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: clientName,
              email:clientEmail
            },
          },
        },
      );


      if(paymentError){
          setCardError(paymentError?.message);
      }else{
          toast.success("Congrase  payment resived Now");
      }



    };
  
    return (
   <>
       <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='bt btn-success px-3 py-2' type="submit" disabled={!stripe }>
          Pay
        </button>
      </form>

      {setCardError && <h4 className='text-danger'>{cardError}</h4>}
   
   </>


    );
};

export default CheckoutForm;