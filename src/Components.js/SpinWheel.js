import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../well 2.png";
import "../index.css";
import { useState } from "react";

function SpinWheel() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  function spinHandler(e) {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      navigate("/result");
    }, 2000);
  }
  return (
    <div
      className="d-flex flex-column container m-2 p-2"
      style={{ width: "250px" }}
    >
      <img
        src={image}
        alt="spinWheel"
        className={isClicked ? "rotate linear infinite" : ""}
      />
      <button onClick={spinHandler} className="btn btn-primary mt-2">
        Spin
      </button>
    </div>
  );
}

export default SpinWheel;
