
import { useEffect, useState } from 'react';
import './App.css';
import Details from './Details';
import Shop from './Shop';

function App() {
const [products, setProduct] = useState([]);
const [cart, setCart] = useState([])
const [show, setShow] = useState([])
useEffect(() => {
  fetch('data.json')
  .then(res => res.json())
  .then(data => setProduct(data.hello))
}, []);

const handleAddToCart = (item) => {
 const newCart = [cart, item]
 setCart(newCart)
}

const shows = (del) => {
const newShow = [show, del]
setShow(newShow)
}


  return (
    <div className="App">
<h1>hello world </h1>
   <div className='main-container'>
    <div className='product'>
    {
       products.map(product => <Shop key={product.id} product={product}
        handleAddToCart={handleAddToCart}
       ></Shop>)
     }
    </div>
    <div className="details">
     <h1>details &#xf217;</h1>

     <Details cart={cart} />
    </div>
   </div>
    </div>
  );
}

export default App;
