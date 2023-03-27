import React, { Component } from "react";
import logo from "./sonoclock-logo.png";
import { FormControlLabel, Switch } from '@mui/material';

export default class App extends Component {

    /**
   * Interval used to increment the clock;
   */
   interval;

  constructor(props) {
    super(props);
    this.time = props.time !== undefined ? props.time : this.formatAMPM(new Date());
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.time = this.formatAMPM(new Date());
      this.forceUpdate();
    }, 1000 );
  }

  render() {
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
        <div>{this.time}</div>
      </>
    );
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}