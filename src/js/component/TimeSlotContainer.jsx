import React from 'react';

import TimeSlot from './TimeSlot.jsx';

export default function TimeSlotContainer(props) {

    return (
        <div style={{background: 'black', height: '300px', display: 'flex'}}>
            // Add icon and style
            <TimeSlot elapsedTimeInSeconds={props.elapsedTimeInSeconds} digit={1}/>
            <TimeSlot elapsedTimeInSeconds={props.elapsedTimeInSeconds} digit={2}/>
            <TimeSlot elapsedTimeInSeconds={props.elapsedTimeInSeconds} digit={3}/>
            <TimeSlot elapsedTimeInSeconds={props.elapsedTimeInSeconds} digit={4}/>
            <TimeSlot elapsedTimeInSeconds={props.elapsedTimeInSeconds} digit={5}/>

            // add buttons
        </div>
    )
}
