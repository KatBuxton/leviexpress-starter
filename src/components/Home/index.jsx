import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = (handleJourneyChange) => {
  const [journey, setJourney] = useState(null)

  handleJourneyChange = (data) => {
    setJourney(data)
  }

  return (
    < main >
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <div >
        {journey !== null
          ? <JourneyDetail journey={journey} />
          : null}
      </div>
    </main >
  )
};
