import React, { useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import Button from '@mui/material/Button';
import { CartContext } from "./Cart";
import './ContextCart.css'

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  const [expandState, setExpandState] = useState("No Expanded State");
  const expand = (id) => {
              item.map((curItem) => {
                if(curItem.id===id){
                      setExpandState(curItem.detail)              
                }
              })
              document.getElementById("expandData").style.height = "100%";
  }

  const closeNav = () => {
  document.getElementById("expandData").style.height = "0%";
  }

  if (item.length === 0) {
    return (
      <>
        {/* <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header> */}

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      {/* <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header> */}

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>
        <div id="expandData" className="overlay">
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <p className="overlay-content">
            {expandState}
          </p>
        </div>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return(
                  <>
                    <Button variant="contained" style={{color:"white", backgroundColor:"#09062b", fontWeight:"bold", width:"21%", textTransform:"capitalize"}}  id={curItem.id} onClick={()=>expand(curItem.id)}>Show Details</Button>
                    <Items key={curItem.id} {...curItem}/>
                  </>
                );
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total" style={{display:"flex"}}>
          <h3>
            Cart Total : <span>Rs.{totalAmount}/-</span>
          </h3>
          <button className="check-out" style={{width:"30%", fontSize:"100%", backgroundColor:"#09062b", textTransform:"capitalize"}}>Checkout</button>
          <button className="clear-cart" style={{width:"30%", fontSize:"100%", textTransform:"capitalize"}} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;