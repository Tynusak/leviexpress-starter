import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <main>
      <JourneyPicker
        onJourneyChange={(journey) => {
          setJourney(journey);
        }}
      />

      {journey === null ? null : (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
        </>
      )}
    </main>
  );
};
