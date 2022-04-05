import React from 'react';
import './Pdetails.css';

const Pdetails = ({ cart }) => {
const {strCategory,strMealThumb,strArea} = cart;

    return (
        <div className='p-details'>
            <h1>{strCategory} </h1>
            <img src={strMealThumb} alt="" />
            <h5>{strArea}</h5>
    
        </div>
    );
};

export default Pdetails;