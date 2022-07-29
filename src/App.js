import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LocalData from './components/LocalData';
import Details from './components/Details';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/covidData/:id" element={<Details />} />
          <Route exact path="/local%data" element={<LocalData />} />
          <Route
            path="*"
            element={
              <div><h2>404 Page not found</h2></div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
