import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  return (
    <main>
      <JourneyPicker
        onJourneyChange={(journey) => {
          setJourney(journey);
        }}
      />
      {journey !== null ? (
        <p>Nalezeno spojení s id {journey.journeyId}</p>
      ) : null}
    </main>
  );
};
