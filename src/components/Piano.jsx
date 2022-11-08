import React, { useContext, useEffect } from "react";
import { Context } from "../contexts/globalState";

import "../styles/components/Piano.sass";

/* Send bank to global state*/
const dataSoundPiano = {
  q: { sound: new Audio("/pianoSounds/do.wav"), displayData: "Do" },
  w: { sound: new Audio("/pianoSounds/re.wav"), displayData: "Re" },
  e: { sound: new Audio("/pianoSounds/mi.wav"), displayData: "Mi" },
  a: { sound: new Audio("/pianoSounds/fa.wav"), displayData: "Fa" },
  s: { sound: new Audio("/pianoSounds/sol.wav"), displayData: "Sol" },
  d: { sound: new Audio("/pianoSounds/la.wav"), displayData: "La" },
  z: { sound: new Audio("/pianoSounds/si.wav"), displayData: "Si" },
  x: { sound: new Audio("/pianoSounds/doM.wav"), displayData: "Do Maior" },
};

const Piano = (props) => {
  /* Call context*/
  const globalState = useContext(Context);

  /* Send bank to global state*/
  useEffect(() => {
    globalState.dispatch({ type: "sound", payload: dataSoundPiano });
  }, [globalState.state.drumOfPiano]);

  return (
    <div className="animate__animated animate__zoomIn opacity">
      <ul className="set">
        <li className="white b" onClick={props.play} id="q"></li>
        <li className="black as"></li>
        <li className="white a" onClick={props.play} id="w"></li>
        <li className="black gs"></li>
        <li className="white g" onClick={props.play} id="e"></li>
        <li className="black fs"></li>
        <li className="white f" onP={props.play} id="a"></li>
        <li className="black es"></li>
        <li className="white e" onClick={props.play} id="s"></li>
        <li className="black ds"></li>
        <li className="white d" onClick={props.play} id="d"></li>
        <li className="black cs"></li>
        <li className="white c" onClick={props.play} id="z"></li>
        <li className="black hs"></li>
        <li className="white h" onClick={props.play} id="x"></li>
      </ul>
    </div>
  );
};

export default Piano;
