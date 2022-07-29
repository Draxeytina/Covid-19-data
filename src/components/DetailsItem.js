import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './detailsItem.scss';

export default function DetailsItem({
  countryName,
  lastUpdate,
  totalCases,
  totalDeaths,
  totalRecoveries,
  activeCases,
}) {
  return (
    <div className="details-container">
      <div className="other-statistics">
        <h1 className="country-name">{countryName}</h1>
        <p className="total-cases">{`Total Cases: ${totalCases}`}</p>
        <p>{`Total Deaths: ${totalDeaths}`}</p>
        <p>{`Total Recoveries: ${totalRecoveries}`}</p>
        <p>{`Active Cases: ${activeCases}`}</p>
        <p>{`Info last updated: ${lastUpdate}`}</p>
      </div>
      <div className="main-statistics">
        <Link
          className="go-home"
          to="/"
        >
          <AiOutlineHome className="back-icon" />
        </Link>
      </div>
    </div>
  );
}

DetailsItem.propTypes = {
  countryName: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  totalCases: PropTypes.string.isRequired,
  totalDeaths: PropTypes.string.isRequired,
  totalRecoveries: PropTypes.string.isRequired,
  activeCases: PropTypes.string.isRequired,
};
