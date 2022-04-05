import React from 'react';
import './Details.css'

const Details = ({ cart }) => {
    console.log(cart);
    let quantity = 0;
    let total = 0;
    
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price
    }
    const tax = parseFloat((total * 0.10).toFixed(1))
    const grandTotal = total + tax
    return (
        <div>
            <h4>selected Item: {cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Tax: ${tax}</h4>
            <h3>Grand Total: ${grandTotal}</h3>
         {cart.map(c => <img className='details-img' src={c.img}/>)
         }
        </div>
    );
};

export default Details;