import React, { useContext } from "react";
import { Context } from "../contexts/globalState";

import "../styles/components/Controls.sass";

const Controls = () => {
  /*Call context*/
  const globalState = useContext(Context);

  /* Function button volume*/
  (function () {
    var is_dragging;
    is_dragging = false;
    $(document).on("mousedown touchstart", ".circleVol", function (e) {
      return (is_dragging = true);
    });
    $(document).on("mouseup touchend", function (e) {
      return (is_dragging = false);
    });
    return $(window).on("mousemove touchmove", function (e) {
      var angle,
        center_x,
        center_y,
        circle,
        delta_x,
        delta_y,
        pos_x,
        pos_y,
        touch;
      if (is_dragging) {
        circle = $(".circleVol");
        touch = void 0;
        if (e.originalEvent.touches) {
          touch = e.originalEvent.touches[0];
        }
        center_x = $(circle).outerWidth() / 2 + $(circle).offset().left;
        center_y = $(circle).outerHeight() / 2 + $(circle).offset().top;
        pos_x = e.pageX || touch.pageX;
        pos_y = e.pageY || touch.pageY;
        delta_y = center_y - pos_y;
        delta_x = center_x - pos_x;
        angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI);
        angle -= 90;
        if (angle < 1) {
          angle = 360 + angle;
        }
        angle = Math.round(angle);
        $("#circle").css("transform", "rotate(" + angle + "deg)");
        globalState.dispatch({
          type: "volume",
          payload: (angle / 3.55) * 0.01,
        });
        globalState.dispatch({
          type: "display",
          payload: "Volume: " + Math.floor(angle / 3.55),
        });
      }
    });
  }.call(this));

  /* Function change instrument name*/
  const instrumentDisplay = () => {
    globalState.state.drumOrPiano
      ? globalState.dispatch({ type: "display", payload: "Piano" })
      : globalState.dispatch({ type: "display", payload: "Bateria" });
  };

  return (
    <div className="control">
      <p className="instrumentIndicator">Instrument</p>

      <div className="button-theme">
        <label className="switch" onTouchStart={() => {
              globalState.dispatch({ type: "instrument" });
              document.getElementById('switchInstrument').checked = !globalState.state.powerOnOff
            }}>
          <input
            type="checkbox"
            name="instrument"
            id="switchInstrument"
            onTouchStart={() => {
              globalState.dispatch({ type: "instrument" });
            }}
            onClick={() => {
              globalState.dispatch({ type: "instrument" });
            }}
            onChange={instrumentDisplay}
            disabled={!globalState.state.powerOnOff}
          />
          <span className="slider">
            <span className="stick"></span>
          </span>
          <span className="base"></span>
        </label>
      </div>

      <p className="powerIndicator">Power</p>

      <div className="button-power">
        <label className="switch" onTouchStart={() => {
              globalState.dispatch({ type: "power" });
              document.getElementById('switchPower').checked = !globalState.state.powerOnOff
            }}>
          <input
            type="checkbox"
            name="power"
            id="switchPower"
            onClick={() => {
              globalState.dispatch({ type: "power" });
            }}
          />
          <span className="slider">
            <span className="stick"></span>
          </span>
          <span className="base"></span>
        </label>
      </div>

      <p className="display">{globalState.state.display}</p>

      <div className="backVol">
        <div className="pointVol"></div>
        <div id="circle" className="circleVol"></div>
      </div>
    </div>
  );
};

export default Controls;
