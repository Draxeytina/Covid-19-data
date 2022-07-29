import React from 'react';

import './localData.scss';

export default function LocalData() {
  return (
    <div className="container-frame">
      <iframe
        className="local-frame"
        title="Your local Covid 19 statistics"
        src="https://covid-19.dataflowkit.com/assets/widget/covid-19.html"
        frameBorder="0"
        scrolling="no"
        width="250"
        height="250"
      />
    </div>
  );
}
