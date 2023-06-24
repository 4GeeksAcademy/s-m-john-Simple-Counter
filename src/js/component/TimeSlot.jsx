import React from 'react';

export default function TimeSlot({ elapsedTimeInSeconds, digit}) {

  return (
    <div style={{ background: '#171617', width: '200px', height: '280px', color: 'white', border: 'solid 1px white' }}>
      {elapsedTimeInSeconds}
    </div>
  )
}

