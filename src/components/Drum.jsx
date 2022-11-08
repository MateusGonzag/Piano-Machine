import React, { useContext, useEffect } from "react";
import { Context } from "../contexts/globalState";

import "../styles/components/Drum.sass";

/* Sound bank*/
const dataSoundDrum = {
  q: { sound: new Audio("/bateriaSounds/bumbo.flac"), displayData: "Bumbo" },
  w: { sound: new Audio("/bateriaSounds/caixa.flac"), displayData: "Caixa" },
  e: { sound: new Audio("/bateriaSounds/chimball-fechado.flac"), displayData: "Chimball Fechado" },
  a: { sound: new Audio("/bateriaSounds/chimball.flac"), displayData: "Chimball" },
  s: { sound: new Audio("/bateriaSounds/ride.wav"), displayData: "Ride" },
  d: { sound: new Audio("/bateriaSounds/surdo.wav"), displayData: "Surdo" },
  z: { sound: new Audio("/bateriaSounds/tom-1.wav"), displayData: "Ton 1" },
  x: { sound: new Audio("/bateriaSounds/tom-2.wav"), displayData: "Ton 2" },
};

const Drum = (props) => {

  /* Call context*/
  const globalState = useContext(Context);

  /* Send bank to global state*/
  useEffect(() => {
    globalState.dispatch({ type: "sound", payload: dataSoundDrum });
  }, [globalState.state.drumOfPiano]);

  return (
    <div className="animate__animated animate__zoomIn opacity">
      <div id="drum-machine">
        <ul className="table">
          <li className="drum o" onClick={props.play} id="a"></li>
          <li className="drum j" onClick={props.play} id="e"></li>
          <li className="drum n" onClick={props.play} id="s"></li>
          <li className="drum k" onClick={props.play} id="d"></li>
          <li className="drum l" onClick={props.play} id="x"></li>
          <li className="drum v" onClick={props.play} id="z"></li>
          <li className="drum x" onClick={props.play} id="w"></li>
          <li className="drum z" onClick={props.play} id="q"></li>
        </ul>
      </div>
    </div>
  );
};

export default Drum;
