import React, { useReducer, createContext } from "react";

/*Initial State*/
let stateInit = {
  powerOnOff: false,
  drumOrPiano: false,
  vol: 0.5,
  display: "",
  sound: {},
  orientation: true,
  controlMenu: false
};

/*Reducers*/
const reducer = (state, action) => {
  switch (action.type) {
    case "power":
      return { ...state, powerOnOff: !state.powerOnOff };

    case "instrument":
      return { ...state, drumOrPiano: !state.drumOrPiano };

    case "display":
      return { ...state, display: action.payload };

    case "volume":
      return { ...state, vol: action.payload };

    case "sound":
      return { ...state, sound: action.payload };

    case "orientation":
      return { ...state, orientation: action.payload };

    case "menus":
      return { ...state, controlMenu: !state.controlMenu };
  }
};

/*Context*/
export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, stateInit);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
