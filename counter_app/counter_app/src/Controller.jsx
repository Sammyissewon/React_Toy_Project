import React from "react";
import "../App.css";

const Controller = ({ onClick }) => {
  return (
    <div>
      <button className="button" onClick={() => onClick(-1)}>
        -1
      </button>
      <button className="button" onClick={() => onClick(-10)}>
        -10
      </button>
      <button className="button" onClick={() => onClick(-100)}>
        -100
      </button>
      <button className="button" onClick={() => onClick(+100)}>
        +100
      </button>
      <button className="button" onClick={() => onClick(+10)}>
        +10
      </button>
      <button className="button" onClick={() => onClick(+1)}>
        +1
      </button>
    </div>
  );
};

export default Controller;
