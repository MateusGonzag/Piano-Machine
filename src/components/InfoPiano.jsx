import React from "react";

import "../styles/components/Info.sass";

const InfoPiano = () => {
  return (
    <div className="animate__animated animate__fadeInRight space">
      <div className="div-info">
        <div className="box">
          <div className="keyboards">Q</div>
          <p>Dó</p>
        </div>
        <div className="box">
          <div className="keyboards">W</div>
          <p>Ré</p>
        </div>
        <div className="box">
          <div className="keyboards">E</div>
          <p>Mí</p>
        </div>
        <div className="box">
          <div className="keyboards">A</div>
          <p>Fá</p>
        </div>
        <div className="box">
          <div className="keyboards">S</div>
          <p>Sol</p>
        </div>
        <div className="box">
          <div className="keyboards">D</div>
          <p>Lá</p>
        </div>
        <div className="box">
          <div className="keyboards">Z</div>
          <p>Sí</p>
        </div>
        <div className="box">
          <div className="keyboards">X</div>
          <p>Dó Maior</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPiano;
