import React from 'react';
import './country.css'
const Country = (props) => {
console.log(props.country.population)
    return ( 
        <div className='country'>
            <h2>Name: {props.name}</h2>
            <img src={props.flags} width="200px" />
            <h3>Population: {props.population}</h3>
            <p>Region: {props.region}</p>
            <h4>capital: {props.country.capital}</h4>
        </div>
     );
}

 
export default Country;