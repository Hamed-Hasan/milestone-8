import React from 'react';
import './Products.css';

const Products = ({ products, addToCart}) => {
 const {strTags,strMealThumb,strCategory,idMeal} = products

    return (
        <div className='product'>
            <img src={strMealThumb} alt=""/>
            <h3>{strCategory}</h3>
            <h5>{strTags}</h5>
            <button onClick={() => addToCart(products)}>Add To Details</button>
        </div>
    );
};

export default Products;