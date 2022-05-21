import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';

export const Home = (handleJourneyChange) => {
  const [journey, setJourney] = useState(null)

  handleJourneyChange = (data) => {
    setJourney(data)
  }

  console.log(journey)

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
    </main >
  )
};
