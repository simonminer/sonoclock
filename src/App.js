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
    this.time = props.time !== undefined ? props.time : new Date();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.time = new Date();
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
        <div className="clock">{this.formatTwelveHourTime(this.time)}</div>
      </>
    );
  }

  /**
   * Formats the specified (or current) time as a 12-hour clock.
   * (i.e. 12:34:56 pm)
   * @see https://stackoverflow.com/a/8888498/2171535 
   * @param {Date} date - the date to be formatted
   * @returns String
   */
  formatTwelveHourTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return strTime;
  }
}