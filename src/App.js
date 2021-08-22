import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/client";
import { COUNTRY } from "./query/user";
import GetCountry from "./GetCountry";

const App = () => {
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState([]);
  const { data } = useQuery(COUNTRY, {
    variables: {
      code: countryCode
    }
  });

  const getCountry = () => {
    setCountry(data.country);
  }

  return (
    <Fragment>
      <h1>GraphQL</h1>
      Write Country Code<input type="text" onChange={value => setCountryCode(value.target.value)} />
      <button onClick={getCountry}>Get Country</button>
      {country.name !== undefined && <GetCountry country={country} />}
    </Fragment>
  );
}

export default App;