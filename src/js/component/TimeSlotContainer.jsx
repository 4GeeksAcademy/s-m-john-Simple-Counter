import React from 'react';

import TimeSlot from '.TimeSlot.jsx';

export default function TimeSlotContainer(props) {

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
