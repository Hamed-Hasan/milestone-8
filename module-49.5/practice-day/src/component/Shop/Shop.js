import { useEffect, useState } from 'react';

import React from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Pdetails from '../Pdetails/Pdetails';

const Shop = () => {

const [products, setProduct] = useState([]);
const [carts, setCart] = useState([]);

useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then(res => res.json())
    .then(data => setProduct(data.meals))
  }, []);

  const addToCart = (detail) => {
    const newCart = [carts,detail]
    setCart(newCart)
  }

    return (
        <div className='shop-container'> 
            <div className="product-container">
        {
    products.map(pd => <Products key={pd.idMeal} products={pd} addToCart={addToCart} />)
        }

            </div>
        <div className="proDetail-container">
            {
        carts.map(cart => <Pdetails cart={cart}/>)
            }
        </div>
        </div>
    );
};

export default Shop;