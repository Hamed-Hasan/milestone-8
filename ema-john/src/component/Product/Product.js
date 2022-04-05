import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product, handleClick}) => {
const {stock,quantity,price,name,img} = product


    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='left'>
           <h5>{name}</h5>
            <h5>Price ${price}</h5>
            <p> Stock ${stock}</p>
            <p>Quantity ${quantity}</p>
           </div>
           <button onClick={() => handleClick(product)} className='cart-btn'><b style={{marginRight: '5px'}}>Add To Cart</b>  
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;