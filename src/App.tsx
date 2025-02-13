import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import CheckoutForm from "./pages/CheckoutForm";
import CompletePage from "./pages/CompletePage";
import Payment from "./pages/Payment";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  return (
    <>
      <Routes>
        <Route path="/" element={<Payment />} />
      </Routes>
      {/* <div className="App">
        {clientSecret && (
          <Elements
            options={{ clientSecret, appearance, loader }}
            stripe={stripePromise}
          > */}
      <Routes>
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
      {/* </Elements>
        )}
      </div> */}
    </>
  );
}
