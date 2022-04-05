import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
   <>

     <nav>
         <h4>Meal-Db</h4>
         <div>
             <a href="/">Shop</a>
             <a href="/">Order</a>
             <a href="/">Inventory</a>
             <a href="/">About</a>
         </div>
     </nav>
</>
    );
};

export default Navbar;