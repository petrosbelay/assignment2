import React from "react";
import "./styles.css";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.date.toLocaleTimeString("en-US", {
            hour12: this.props.hour12
          })}
        </h2>
      </div>
    );
  }
}
