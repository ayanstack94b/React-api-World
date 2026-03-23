import React from 'react';

const Country = ({ country }) => {

    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Language: {country?.languages?.languages?.eng ? country?.languages?.languages?.eng : country?.languages?.languages?.jam}</p>
        </div>
    );
};

export default Country;