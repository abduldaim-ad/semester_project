import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { useState } from "react";
import MediaCard from "./routes/MediaCard";
import Invoices from "./routes/invoices";
import Auth from './components/Auth';
import Cart from "./routes/Cart";
import Payment from "./routes/Payment";
import CheckoutData from "./routes/CheckoutData";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="card" element={<MediaCard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Payment />} />
        {/* <Route path="signup" element={<SignUp />} /> */}
        <Route path="checkoutdata" element={<CheckoutData />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);