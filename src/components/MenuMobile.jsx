import React, { useContext } from "react";

import "../styles/components/MenuMobile.sass";

import { Context } from "../contexts/globalState";

const MenuMobile = () => {
  const globalState = useContext(Context);

  return (
    <div className="menu">
      <label
      onTouchStart={() => {
          globalState.dispatch({ type: "menus" });
        }}
        className="switchMenu">
        <input type="checkbox" id="check" />
        <span className="xUm"><span className="xDois"></span></span>
      </label>
      <p className="menuDisplay">{globalState.state.display}</p>
      <p id="painelMenu" className="painelMenu">
        OFF
      </p>
    </div>
  );
};

export default MenuMobile;
