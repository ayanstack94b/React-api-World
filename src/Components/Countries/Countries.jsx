import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = () => {
        console.log('countries clicked');
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries);

    return (
        <div>
            <h1>Total number of Countries: {countries.length}</h1>
            <h3>Total visited countries: </h3>
            <div className='countries'>
                {
                    countries.map((country) => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;