import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';


const CityOptions = ({ cities }) => {

  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => <option key={city.code} value={city.code}>{city.name}</option>)}
    </>
  )
}

const DateOptions = ({ dates }) => {

  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => <option key={date.dateBasic} value={date.dateBasic}>{date.dateCs}</option>)}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  useEffect(() => {
    {
      fetch("https://apps.kodim.cz/daweb/leviexpress/api/cities")
        .then((response) => response.json())
        .then((data) => setCities(data.results))
    };
    {
      fetch("https://apps.kodim.cz/daweb/leviexpress/api/dates")
        .then((response) => response.json())
        .then((data) => setDates(data.results))
    };

  }, []);

  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [date, setDate] = useState("")
  const [cities, setCities] = useState([])
  const [dates, setDates] = useState([])


  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => onJourneyChange(data.results))
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select
                onChange={(event) => setFromCity(event.target.value)}
                value={fromCity}>
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select
                onChange={(event) => setToCity(event.target.value)}
                value={toCity}>
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select
                onChange={(event) => setDate(event.target.value)}
                value={date}>
                <DateOptions dates={dates} />
              </select>
            </label>
            <div className="journey-picker__controls">
              <button
                className="btn"
                type="submit"
                onClick={handleSubmit}
                disabled={!fromCity || !toCity || !date}
              >
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>
    </>
  )
};
