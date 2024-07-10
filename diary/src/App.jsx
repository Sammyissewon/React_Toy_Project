import React, { useReducer } from "react";
// components
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// Link: a 태그와 같은 역할. a태그와 다르게 불필요한 새로고침이 없어서 쾌적.
// useNavigate: 특정 경로로 네비게이션(이동)할 수 있는 함수를 반환
import { Routes, Route } from "react-router-dom";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
];

function reducer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        {/* :id : 동적경로인 URL Parameter를 사용하겠다 */}
        <Route path="/diary:id" element={<Diary />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        {/* *: wild card */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
