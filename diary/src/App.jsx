import React from "react";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./Components/Button";

// Link: a 태그와 같은 역할. a태그와 다르게 불필요한 새로고침이 없어서 쾌적.
// useNavigate: 특정 경로로 네비게이션(이동)할 수 있는 함수를 반환
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { getEmotionImage } from "./util/get-emotion-image";

//1. "/": 모든 일기를 조회하는 Home 페이지
//2. "/new": 새로운 일기를 작성하는 new 페이지
//3. "/diary": 일기를 상세히 조회하는 Diary 페이지

const App = () => {
  // useNavigate 함수 방법
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        {/* :id : 동적경로인 URL Parameter를 사용하겠다 */}
        <Route path="/diary:id" element={<Diary />}></Route>
        {/* *: wild card */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
};

export default App;
