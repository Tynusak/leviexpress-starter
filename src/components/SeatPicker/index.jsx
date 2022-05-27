import React from 'react';
import './style.css';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({
  seats,
  journeyId,
  selectedSeat,
  onSeatSelected,
}) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => (
          <SeatRow
            row={row}
            key={i}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};
