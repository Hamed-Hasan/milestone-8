import React, { useEffect, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => console.log(data))
    }, [])

    return ( 
        <div>
        <h1>Total Available countries {countries.length}</h1>
              <div className="countries-container">

            {
    countries.map(country => <Country 
      // get all object
   country={country}
   key={country.cca3}
  //  direct declare 
        // name={country.name.common}
        // population={country.population}
        // capital={country.capital}
        // region={country.region}
        // flags={country.flags.png}
        ></Country>)
        }
            
        </div>
        </div>
      
     );
}
 
export default Countries;