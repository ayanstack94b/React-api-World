import React from 'react';
import './Country.css'
const Country = ({ country }) => {

    const handleVisited = (name)=>{
        console.log('button clicked', name);
        
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Language: {country?.languages?.languages?.eng ? country?.languages?.languages?.eng : country?.languages?.languages?.jam}</p>
            <p>Area: {country?.area?.area > 300000 ? "Big country" : "Small Country"}</p>
            <button onClick={() => handleVisited(country.name.common)}>Visited</button>
        </div>
    );
};

export default Country;