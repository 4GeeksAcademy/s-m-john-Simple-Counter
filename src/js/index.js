//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TimeSlotContainer from "./component/TimeSlotcontainer.jsx";

// For bonus look into useState and/or setTimeout | Come back to this before submission

let counter = 0;

setInterval(() => {

    console.log('here')
    //render your react application
    ReactDOM.render(<TimeSlotContainer elapsedTimeInSeconds={counter} />, document.querySelector("#app"));

    counter = counter + 1;
}, 1000)


// bonus come back to fix later

//let stopTimer = () = > {}
//let resumeTimer = () = > {}
//let resetTimer = () => {
//    setCount(0);
//}