import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
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
      <div className="main-statistics">
        <p className="country-name">{countryName}</p>
        <Link
          className="go-home"
          to="/"
        >
          <AiOutlineLeft className="back-icon" />
        </Link>
      </div>
      <p className="total-cases">{`Total Cases: ${totalCases}`}</p>
      <div className="other-statistics">
        <p>{`Total Deaths: ${totalDeaths}`}</p>
        <p>{`Total Recoveries: ${totalRecoveries}`}</p>
        <p>{`Active Cases: ${activeCases}`}</p>
        <p>{`Info last updated: ${lastUpdate}`}</p>
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
