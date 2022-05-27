import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={rowSelectedSeat === seat.number ? true : false}
          onSelect={onSeatSelected}
          key={seat.number}
        />
      ))}
    </div>
  );
};
