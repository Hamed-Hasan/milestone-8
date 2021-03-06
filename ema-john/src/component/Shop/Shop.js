import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
    fetch('products.json')    
    .then(res => res.json())
    .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getStoreCart()
        const savedCart = []
        for(const id in storeCart){
            const addToProduct = products.find(product => product.id === id)
            if(addToProduct){
                const quantity = storeCart[id] 
                addToProduct.quantity = quantity 
                savedCart.push(addToProduct)
            }
        }
        setCart(savedCart)
    }, [products]);

    const handleClick = (selectedProduct) => {
    let newCart = []
    const exists = cart.find(product => product.id === selectedProduct.id)
    if(!exists){
        selectedProduct.quantity = 1
        newCart = [...cart, selectedProduct]
    }else{
        const rest = cart.filter(product => product.id !== selectedProduct.id)
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists]
    }
    setCart(newCart)
    addToDb(selectedProduct.id)
    }
 
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product => <Product product={product} key={product.id}
                    handleClick={handleClick}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;