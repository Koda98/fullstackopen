import React, { useEffect, useState } from "react";
import axios from "axios"

const Query = ({ eventHandler }) => (
    <div>
        find countries<input onChange={eventHandler} />
    </div>
)

const Country = ({ country }) => (
    <div>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>

        <h2>languages</h2>
        <ul>
            {country.languages.map(language =>
                <li key={language.name}>{language.name}</li>
            )}
        </ul>
        <img 
            src={country.flag}
            alt={`flag of ${country.name}`}
            width="100"
            />
    </div>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Countries = ({ countries, setQuery }) => {
    if (countries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (countries.length === 1) {
        return (
            <Country 
                key={countries[0]}
                country={countries[0]} 
            />
        )
    }

    return (
        <div>
            {countries.map(country =>
                <div key={country.name}>
                    {country.name}
                    <Button 
                        handleClick={() => setQuery(country.name)} 
                        text="show"
                    />
                </div>
            )}
        </div>
    )
}

function App() {
    const [query, setQuery] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        console.log("Effect")
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                console.log("Promise fulfilled")
                setCountries(response.data)
            })
    }, [])

    const handleQuery = (event) => {
        console.log("handleSearch value: ", event.target.value)
        setQuery(event.target.value)
    }

    const countriesToShow = countries.filter(country =>
        country.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div>
            <Query eventHandler={handleQuery} />
            <Countries countries={countriesToShow} setQuery={setQuery} />
        </div>
    );
}

export default App;
