import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);


    const handleVisitedCountries = (country) => {
        console.log('countries clicked');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
        console.log('flag needed to be visited', flag)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    console.log(countries);

    return (
        <div>
            <h1>Total number of Countries: {countries.length}</h1>
            <h3>Total visited countries: {visitedCountries.length}</h3>
            <h3>Total Flags visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map((country) => <li
                        key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag)=> <img src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map((country) => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;