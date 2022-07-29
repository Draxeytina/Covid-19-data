import React from 'react';
import PropTypes from 'prop-types';
import './data.scss';

export default function Data({
  countryName, totalCases,
}) {
  return (
    <div className="data-container">
      <h2>
        {countryName}
      </h2>
      <p>
        Total Cases:
        {' '}
        {totalCases}
      </p>
    </div>
  );
}

Data.propTypes = {
  countryName: PropTypes.string.isRequired,
  totalCases: PropTypes.string.isRequired,
};
