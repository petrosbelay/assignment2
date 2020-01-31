import React from "react";
import "./styles.css";

export default function Stats(props) {
  // functions taken from --> https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
  const arrMin = arr => Math.min(...arr);
  const arrMax = arr => Math.max(...arr);
  const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  if (props.data === undefined || props.data.length === 0) {
    return <h1>No Data</h1>;
  } else {
    return (
      <div>
        <h1>Min: {arrMin(props.data)}</h1>
        <h1>Max: {arrMax(props.data)}</h1>
        <h1>Avg: {arrAvg(props.data)}</h1>
      </div>
    );
  }
}
