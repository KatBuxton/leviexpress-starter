import React from 'react';
import "./style.css"
import { Seat } from '../Seat';

export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <Seat number={2} />
        <Seat number={14} />
        <Seat number={22} />
      </div>
    </div>

  )
}