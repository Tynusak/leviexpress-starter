import React, { useState } from 'react';
import { BusStop } from '../BusStop';
import './style.css';
export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((item) => (
          <BusStop
            name={item.name}
            station={item.station}
            time={item.time}
            key={item.code}
          />
        ))}
      </div>
    </div>
  );
};
