import React, { useState, useEffect } from 'react';
import "./style.css"
import { useParams } from 'react-router-dom';


export const Reservation = () => {
  const [reservation, setReservation] = useState(null)

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => setReservation(id))
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservation !== null ? reservation : null}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>pá 28. květen 2021</p>
          <p>Bratislava, 21:15</p>
          <p>Budapest, 23:55</p>
          <p>18</p>
        </div>
      </div>
    </div>

  )
}