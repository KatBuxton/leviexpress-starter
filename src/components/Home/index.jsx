import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = (handleJourneyChange) => {
  const [journey, setJourney] = useState(null)

  handleJourneyChange = (data) => {
    setJourney(data)
  }

  return (
    < main >
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div >
        {journey !== null ? `Nalezeno spojení s id ${journey.journeyId}` : null}
      </div>
    </main >
  )
};
