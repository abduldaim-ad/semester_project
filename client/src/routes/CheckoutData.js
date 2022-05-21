import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './CheckoutData.css';

const CheckoutData = () => {
  const [checkout, setCheckout] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:9002/readcheckout')
    .then(res=>{
        setCheckout(res.data)
    })
  },[])



  return (
    <>
    <h1 className='display-6'>Pending Orders</h1>

<div class="table-responsive">
<table class="table table-hover table-striped table-primary">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Total Amount</th>
      <th scope="col">Total Items</th>
    </tr>
  </thead>
  <tbody>
    {checkout.map((val,key)=>{
        return(
        <tr>
            <th scope="row">{key+1}</th>
            <td>{val.curName}</td>
            <td>{val.curEmail}</td>
            <td>{val.totalAmount}</td>
            <td>{val.totalItem}</td>
        </tr>
        )
    })
    }
  </tbody>
</table>
</div>
    </>
  )
}

export default CheckoutData