import { useState } from "react";
import "./styles.css";

//const arr=[0,0,0];
const Fun = (props) => {
  const obj = "option " + props.x + " is selected " + props.y + " times";
  if (props.x === 0) return null;
  return obj;
};

export default function App() {
  const [arr, usecnt] = useState([0, 0, 0]);
  const [lastclick, change] = useState(0);
  const changeVal = (props) => {
    change(props);
    const brr=[...arr];
    brr[props-1]+=1;
    usecnt(brr);
    //console.log(arr);
  };
  return (
    <div className="App">
      <div className="side">
        <button
          onClick={() => {
            changeVal(1);
          }}
        >
          option1
        </button>
        <button
          onClick={() => {
            changeVal(2);
          }}
        >
          option2
        </button>
        <button
          onClick={() => {
            changeVal(3);
          }}
        >
          option3
        </button>
      </div>
      <div className="centre">
        <Fun x={lastclick} y={arr[lastclick - 1]} />
      </div>
    </div>
  );
}
