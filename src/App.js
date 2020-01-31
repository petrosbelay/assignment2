import React from "react";
import "./styles.css";
import Clock from "./Clock";
import Stats from "./Stats";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.tick();
    this.timerID = setInterval(() => this.tick(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const url =
      "https://www.random.org/integers/?num=10&min=1&max=100&col=1&base=10&format=plain&rnd=new";
    fetch(url)
      .then(response => response.text())
      .then(response =>
        response
          .split("\n")
          .filter(item => item.length > 0)
          .map(Number)
      )
      .then(response => {
        this.setState({ data: response });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">Assignment 2 - Components</h1>
        <Clock hour12={false} />
        <h1>{this.state.data.join()}</h1>
        <Stats data={this.state.data} />
      </div>
    );
  }
}
