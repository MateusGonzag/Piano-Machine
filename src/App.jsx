import React, { useEffect, useContext } from "react";
import "animate.css";

/*Import of components*/
import Controls from "./components/Controls";
import Drum from "./components/Drum";
import InfoDrum from "./components/InfoDrum";
import InfoPiano from "./components/InfoPiano";
import Piano from "./components/Piano";
import MenuMobile from "./components/MenuMobile";

/*Import of context*/
import { Provider, Context } from "./contexts/globalState";

import "./styles/App.sass";

function App() {
  /* Call Context*/
  const globalState = useContext(Context);

  /* Function for play sounds*/
  const play = (event) => {
    let sound = globalState.state.sound[event.target.id || event.key];
    if (globalState.state.powerOnOff) {
      sound["sound"].currentTime = 0;
      sound["sound"].play();
      sound["sound"].volume = globalState.state.vol;
      globalState.dispatch({ type: "display", payload: sound.displayData });
      document
        .getElementById(event.key)
        .classList.add(
          !globalState.state.drumOrPiano ? "whiteClick" : "drumActive"
        );
    } else {
      alert("Power Off");
    }
  };

  /* For remove event keydown*/
  useEffect(() => {
    document.addEventListener("keydown", play);
    return () => document.removeEventListener("keydown", play);
  });

  /* Function for remove style of intruments cliked keys*/
  const removeKey = (event) => {
    document
      .getElementById(event.key)
      .classList.remove(
        !globalState.state.drumOrPiano ? "whiteClick" : "drumActive"
      );
  };

  /* For remove event keyup*/
  useEffect(() => {
    document.addEventListener("keyup", removeKey);
    return () => document.removeEventListener("keyup", removeKey);
  });

  /*For clear display*/
  useEffect(() => {
    let clearDisplay = setTimeout(() => {
      globalState.dispatch({ type: "display", payload: "" });
    }, 1000);
    return () => {
      clearTimeout(clearDisplay);
    };
  }, [globalState.state.display]);

  /* For change theme power on of off*/
  useEffect(() => {
    if (globalState.state.powerOnOff) {
      document.querySelector(".opacity").style.opacity = 1;
      document.querySelector(".opacity").style.pointerEvents = "visible";
      document.querySelector(".control").style.animation =
        "neonControl 2s alternate infinite cubic-bezier( 1, 1, 1, -1 )";
      document.getElementById("ONShadow").classList.add("ONShadow");
      document.getElementById("ONShadow").innerHTML = "ON";
      document.querySelector(".circleVol").style.pointerEvents = "visible";
      document.querySelector(".backVol").style.opacity = 1;
      document.querySelector(".button-theme").style.opacity = 1;
      document.querySelector('.menu').style.animation =
        "neonControl 2s alternate infinite cubic-bezier( 1, 1, 1, -1 )";
      document.getElementById('painelMenu').innerHTML = 'ON';
      document.getElementById("painelMenu").classList.add("painelNeon");
    } else {
      document.querySelector(".opacity").style.opacity = 0.2;
      document.querySelector(".opacity").style.pointerEvents = "none";
      document.querySelector(".control").style.animation = "";
      document.getElementById("ONShadow").classList.remove("ONShadow");
      document.getElementById("ONShadow").innerHTML = "OFF";
      document.querySelector(".circleVol").style.pointerEvents = "none";
      document.querySelector(".backVol").style.opacity = 0.5;
      document.querySelector(".button-theme").style.opacity = 0.5;
      document.querySelector('.menu').style.animation = '';
      document.getElementById('painelMenu').innerHTML = 'OFF';
      document.getElementById("painelMenu").classList.remove("painelNeon");
    }
  }, [globalState.state.powerOnOff]);

  const show = () => {
    globalState.dispatch({type: 'orientation', payload: screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary'})
  };

  useEffect(() => {
    screen.orientation.addEventListener("change", show);
    window.onload = show;
    return () => screen.orientation.removeEventListener("change", show);
  },[]);

  useEffect(() => {
    globalState.state.controlMenu ? document.getElementById('buttons').classList.add('buttonsON') : document.getElementById('buttons').classList.remove('buttonsON')
  })


  /* Render with ternary operator for show elements*/
  return (
    <div className="wrapper">
      <div className="painel">
        <p id="ONShadow" className="painelLetter">
          OFF
        </p>
      </div>
      <div className="menuApp">
        <MenuMobile />
      </div>
      {!globalState.state.orientation ? <h1 className="portrait">Por favor, mude para o modo paisagem</h1> : null}
      {globalState.state.drumOrPiano ? (
        <div className="displayDrum">
          <Drum play={play} />
        </div>
      ) : null}
      {globalState.state.drumOrPiano && globalState.state.powerOnOff ? (
        <div className="displayInfo">
          <InfoDrum />
        </div>
      ) : null}
      {!globalState.state.drumOrPiano ? (
        <div className="displayPiano">
          <Piano play={play} />
        </div>
      ) : null}
      {!globalState.state.drumOrPiano && globalState.state.powerOnOff ? (
        <div className="displayInfo">
          <InfoPiano />
        </div>
      ) : null}
      <div className="buttons" id="buttons">
        <Controls />
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
