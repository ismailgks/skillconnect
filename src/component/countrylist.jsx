import React from 'react';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

const CountrySelectWithISD = () => {
  const countries = getCountries();

  return (
    <select>
      {countries.map((country) => {
        const code = getCountryCallingCode(country);
        return (
          <option key={country} value={code}>
            {country} ({code ? `+${code}` : 'No code'})
          </option>
        );
      })}
    </select>
  );
};

export default CountrySelectWithISD;
