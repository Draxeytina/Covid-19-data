import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/data';
import Data from './Data';
import Filter from './Filter';
import './home.scss';

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [filtered, setFiltered] = useState([]);
  const [activeCountry, setActiveCountry] = useState('All');

  useEffect(() => {
    if (!data.length) { dispatch(getData()); }
  }, []);

  return (
    <>
      <div className="home">
        <h1 className="welcome-text">Welcome</h1>
      </div>

      <Filter
        data={data}
        setFiltered={setFiltered}
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
      />
      <div className="list-container-oval">
        {
          (activeCountry === 'Top World Cases') ? (
            <div className="iframe-top">
              <iframe
                title="World Top Data"
                src="https://covid-19.dataflowkit.com/assets/widget/c19-top-widget.html"
                minWidth="250px"
                height="300px"
                frameBorder="1px solid white"
                allowTransparency="false"
              />
            </div>
          ) : (
            <div>
              <ul className="regions-container">
                {filtered.length === 0 && (

                  data.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={`/covidData/${data.id}`}
                      >
                        <Data
                          countryName={data.Country_text}
                          totalCases={data['Total Cases_text']}
                          totalDeaths={data['Total Deaths_text']}
                          totalRecoveries={data['Total Recovered_text']}
                        />
                      </Link>
                    </li>
                  ))
                )}
                {filtered.length !== 0 && (

                  filtered.map((data) => (
                    <li key={data.id}>
                      <Link
                        to={`/covidData/${data.id}`}
                      >
                        <Data
                          countryName={data.Country_text}
                          totalCases={data['Total Cases_text']}
                          totalDeaths={data['Total Deaths_text']}
                          totalRecoveries={data['Total Recovered_text']}
                        />
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          )
        }
      </div>
    </>
  );
}
