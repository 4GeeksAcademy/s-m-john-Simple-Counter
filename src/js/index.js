//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TimeSlotContainer from "./component/TimeSlotContainer.jsx";

// For bonus look into useState and/or setTimeout | Come back to this before submission

let counter = 0;

setInterval(() => {

    console.log('here')
    //render your react application
    ReactDOM.render(<TimeSlotContainer elapsedTimeInSeconds={counter} />, document.querySelector("#app"));

    counter = counter + 1;
}, 1000)


//Work on this over the weekend
// counter.toString().slice(0,1)
// pass from a number to a string and slice into each slot


// bonus come back to fix later

// Create an option to countdown from a given number. - # input 
// use settimeout for stop, resume

//let stopTimer = () = > {} //changes to stopped? make it conditional if/else
//let resumeTimer = () = > {}


//let resetTimer = () => {
//    setCount(0);
//}

// and buttons