import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsItem from './DetailsItem';

export default function Details() {
  const params = useParams();
  const data = useSelector((state) => state.data);
  const country = data.find((dataItem) => dataItem.id === params.id);

  return (
    <DetailsItem
      key={country.id}
      id={country.id}
      countryName={country.Country_text}
      lastUpdate={country['Last Update']}
      totalCases={country['Total Cases_text']}
      totalDeaths={country['Total Deaths_text']}
      totalRecoveries={country['Total Recovered_text']}
      activeCases={country['Active Cases_text']}
    />
  );
}
