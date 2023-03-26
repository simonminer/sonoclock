import React from "react";
import logo from "./sonoclock-logo.png";
import { FormControlLabel, Switch } from '@mui/material';

function App() {
  var currentTime = formatAMPM(new Date());
  return (
    <><div>
      <img src={logo} alt="Sonoclock - Listen to the time" />
    </div>
    <div>
      <span>
        <FormControlLabel control={<Switch defaultChecked />} label="Hour" />
      </span>
       <span>
         <FormControlLabel control={<Switch defaultChecked />} label="Minute" />
       </span>
     </div>
     <div>{currentTime}</div>
     </>
  );
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
export default App;
