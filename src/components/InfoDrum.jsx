import React from "react";

import "../styles/components/Info.sass";

const InfoDrum = () => {
  return (
    <div className="animate__animated animate__fadeInRight space">
      <div className="div-info">
        <div className="box">
          <div className="keyboards">Q</div>
          <p>Bumbo</p>
        </div>
        <div className="box">
          <div className="keyboards">W</div>
          <p>Caixa</p>
        </div>
        <div className="box">
          <div className="keyboards">E</div>
          <p>Chimball fechado</p>
        </div>
        <div className="box">
          <div className="keyboards">A</div>
          <p>Chimball aberto</p>
        </div>
        <div className="box">
          <div className="keyboards">S</div>
          <p>Ride</p>
        </div>
        <div className="box">
          <div className="keyboards">D</div>
          <p>Surdo</p>
        </div>
        <div className="box">
          <div className="keyboards">Z</div>
          <p>Ton 1</p>
        </div>
        <div className="box">
          <div className="keyboards">X</div>
          <p>Ton 2</p>
        </div>
      </div>
    </div>
  );
};

export default InfoDrum;
