import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';
import { useNavigate } from "react-router-dom";


export const Home = (handleJourneyChange) => {
  const [journey, setJourney] = useState(null)

  handleJourneyChange = (data) => {
    setJourney(data)
  }

  const navigate = useNavigate()

  const handleBuy = () => {

    {
      fetch("https://apps.kodim.cz/daweb/leviexpress/api/reservation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),

      })
        .then((response) => response.json())
        .then((data) => navigate(`/reservation/${data.results.reservationId}`))
    }
  }



  return (
    < main >
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div >
        {journey !== null
          ? <JourneyDetail journey={journey} />
          : null}
      </div>
      <div >
        {journey !== null
          ? <SelectedSeat number={journey.autoSeat} />
          : null}
      </div>
      <div className="controls container">
        <button
          onClick={() => handleBuy()}
          className="btn btn--big" type="button">Rezervovat</button>
      </div>
    </main >
  )
};
