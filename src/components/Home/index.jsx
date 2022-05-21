import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  // const stops = [
  //   { name: 'Praha', station: 'ÚAN Florenc', time: '15:55' },
  //   { name: 'Brno', station: 'ÚAN Zvonařka', time: '17:55' },
  // ];
  return (
    <main>
      <JourneyPicker
        onJourneyChange={(journey) => {
          setJourney(journey);
        }}
      />

      {journey !== null ? <JourneyDetail journey={journey} /> : null}
    </main>
  );
};
