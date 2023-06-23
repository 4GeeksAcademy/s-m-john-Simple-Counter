import React from 'react';

export default function TimeSlot(props) {
  return (
    <div style={{ background: '#171617', width: '200px', height: '280px', color: 'white' }}>
      {props.elapsedtimeInSeconds}
    </div>
  );
}


