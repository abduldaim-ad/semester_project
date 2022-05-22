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
import './index.css'

const rootElement = document.getElementById("root");
const changeImg = () =>{
  if(document.getElementById("imgID").src==="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg")
    document.getElementById("imgID").src="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"
  else if(document.getElementById("imgID").src==="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg")
  document.getElementById("imgID").src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
}
{setInterval(changeImg,2500)}

// const changeImg1 = () => {
//     document.getElementById("imgID").src="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"
// }

// const changeImg2 = () => {
//     document.getElementById("imgID").src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg"
// }

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
      <App />
      <img id="imgID" src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="iPhone" style={{
        width:"50%",
        height: "100%",
        display: "block",
        marginLeft:"0",
        marginRight:"auto",
      }}
      // onMouseOver={changeImg1}
      // onMouseOut={changeImg2}
      />
      </>}>
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