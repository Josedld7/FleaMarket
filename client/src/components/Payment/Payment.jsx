import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements,CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51M4ZwfCEtWq8Pp4vng4uHczxJMh74jwvodfKwUK6zzPcmxbbrxsZDTe68CcRc47tfNSFqaNKr5twAch2ZpbvTueO00dEJ0AYPz");

export default function Payment(){
  return (
    <Elements stripe={stripePromise}>
      <form >
        <CardElement/>
      </form>
    </Elements>
  )
}