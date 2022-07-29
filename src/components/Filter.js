/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

export default function Filter({
  data,
  setFiltered,
  activeCountry,
  setActiveCountry,
}) {
  const easternAfrica = [
    'Burundi',
    'Comoros',
    'Djibouti',
    'Eritrea',
    'Ethiopia',
    'Kenya',
    'Malawi',
    'Mauritius',
    'Mayotte',
    'Mozambique',
    'Reunion',
    'Rwanda',
    'Seychelles',
    'Somalia',
    'South Sudan',
    'Tanzania',
    'Uganda',
    'Zambia',
    'Zimbabwe',
  ];

  const westernAfrica = [
    'Benin',
    'Burkina Faso',
    'Ivory Coast',
    'Gambia',
    'Ghana',
    'Guinea',
    'Liberia',
    'Mali',
    'Mauritania',
    'Niger',
    'Nigeria',
    'Saint Helena',
    'Senegal',
    'Sierra Leone',
    'Togo',
  ];

  const middleAfrica = [
    'Angola',
    'Cameroon',
    'Chad',
    'Congo',
    'Equatorial Guinea',
    'Gabon',
    'Sao Tome and Principe',
  ];

  const nothernAfrica = [
    'Algeria',
    'Egypt',
    'Libya',
    'Morocco',
    'Sudan',
    'Tunisia',
  ];

  const southernAfrica = [
    'Botswana',
    'Eswatini',
    'Lesotho',
    'Morocco',
    'Madagascar',
    'Namibia',
    'South Africa',
  ];

  const filterInput = useRef();

  useEffect(() => {
    if (activeCountry === 'All') {
      setFiltered(data);
    } else if (activeCountry === 'Southern African Countries') {
      const filteredData = data.filter((country) => southernAfrica.includes(country.Country_text));
      setFiltered(filteredData);
    } else if (activeCountry === 'Western African Countries') {
      const filteredData = data.filter((country) => westernAfrica.includes(country.Country_text));
      setFiltered(filteredData);
    } else if (activeCountry === 'Eastern African Countries') {
      const filteredData = data.filter((country) => easternAfrica.includes(country.Country_text));
      setFiltered(filteredData);
    } else if (activeCountry === 'Middle African Countries') {
      const filteredData = data.filter((country) => middleAfrica.includes(country.Country_text));
      setFiltered(filteredData);
    } else {
      const filteredData = data.filter((country) => nothernAfrica.includes(country.Country_text));
      setFiltered(filteredData);
    }
  }, [activeCountry]);

  return (
    <div className="filter">
      Select Region:
      <select name="country" ref={filterInput} onLoad={() => setActiveCountry(filterInput.current.value)} onChange={() => setActiveCountry(filterInput.current.value)}>
        <option value="All">All</option>
        <option value="Southern African Countries">Southern African Countries</option>
        <option value="Northen African Countries">Northen African Countries</option>
        <option value="Western African Countries">Western African Countries</option>
        <option value="Eastern African Countries">Eastern African Countries</option>
        <option value="Middle African Countries">Middle African Countries</option>
        <option value="Top World Cases">Top World Cases</option>
      </select>
    </div>
  );
}
