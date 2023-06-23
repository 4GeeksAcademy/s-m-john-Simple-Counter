import React from 'react';

import timeSlot from '.timeSlot.jsx';

export default function timeslotContainer(props) {

    return (
        <div style={{background: 'black', height: '300px', display: 'flex'}}>
            <TimeSlot elapsedtimeInSeconds={props.elapsedtimeInSeconds} />
            <TimeSlot elapsedtimeInSeconds={props.elapsedtimeInSeconds} />
            <TimeSlot elapsedtimeInSeconds={props.elapsedtimeInSeconds} />
            <TimeSlot elapsedtimeInSeconds={props.elapsedtimeInSeconds} />
            <TimeSlot elapsedtimeInSeconds={props.elapsedtimeInSeconds} />
        </div>
    )
}
