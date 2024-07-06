import React from "react";
import { useState } from "react";

import "./TicTacToe.css";

import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

// 배열의 현재 상태를 저장
let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  // 현재 턴의 count 홀수는 o, 짝수는 x
  let [count, setCount] = useState(0);
  // 게임의 잠금 상태. 값이 true면, 클릭이 무시된다.
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      // 짝수 턴에는 cross 이미지를 삽입
      e.target.innerHTML = `<img src ='${cross_icon}'>`;
      // 짝수 턴에는 배열의 값을 x로 저장
      data[num] = "x";
      // 카운트 +1 (홀수 턴으로 전환)
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src ='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>

        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>

        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTacToe;
