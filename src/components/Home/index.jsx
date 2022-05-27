import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SeatPicker } from '../SeatPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  let navigate = useNavigate();
  const handleBuy = () =>
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));

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
          <SeatPicker
            seats={journey.seats}
            journeyId={journey.journeyId}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />

          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};
