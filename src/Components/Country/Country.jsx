import React, { useState } from 'react';
import './Country.css'


const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = (name) => {
        console.log('button clicked', name);
        setVisited(!visited)
        handleVisitedCountries(country)

    }

    return (
        <div className={`country ${visited && 'btn-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Language: {country?.languages?.languages?.eng ? country?.languages?.languages?.eng : country?.languages?.languages?.jam}</p>
            <p>Area: {country?.area?.area > 300000 ? "Big country" : "Small Country"}</p>
            <button onClick={() => handleVisited(country)}>
                {
                    visited ? 'Visited' : 'Not visited'
                }
            </button>
        </div>
    );
};

export default Country;