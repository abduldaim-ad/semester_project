import { experimental_extendTheme } from "@mui/material";
import React, { useContext } from "react";
import './ContextCart.css'
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
const { removeItem, increment, decrement } = useContext(CartContext);
const expandImg = (img) => {
  document.getElementById("expandImage").style.height = "100%";
}

const closeNav = () => {
document.getElementById("expandImage").style.height = "0%";
}
  return (
    <>
      <div className="items-info">
      
        <div className="product-img">
          <img src={img} alt="iamge"
            onClick={()=>expandImg(img)}
          />
        </div>

        <div id="expandImage" className="overlay">
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <img className="overlay-content" src={img} alt="Mobile" style={{top:"7%",width:"70%", height:"60%", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}>-</i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}>+</i>
        </div>

        <div className="price">
          <h3>Rs.{price}/-</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;