import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(1));
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <div className='order-summery'>
                <p><small>Selected Items: {quantity}</small></p>
                <p><small>Total Price: ${total}</small></p>
                <p><small>Total Shipping Charge: ${shipping}</small></p>
                <p><small>Tax: ${tax}</small></p>
                <h5>Grand Total: ${grandTotal}</h5>
                
                
            </div>
        </div>
    );
};

export default Cart;