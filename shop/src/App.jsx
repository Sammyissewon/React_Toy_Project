import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Stack } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Main from "./routes/Main";
import shoes from "./components/Shoes";
import Detail from "./routes/Detail";
import Event from "./routes/Event";
import About from "./routes/About";
import Cart from "./routes/Cart";

import { createContext } from "react";

// state 보관함을 자식들에게 export
export let Context1 = createContext();

function App() {
  let navigate = useNavigate();
  let [stock] = useState([10, 11, 12]);

  // 서버에서 유저 이름 가져와 보여주기
  // useQuery의 장점
  // 1. 성공/ 실패/ 로딩중 파악 용이
  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((a) => {
        console.log("요청됨");

        return a.data;
      });
  });

  return (
    <div className="App">
      <Navbar className="navBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OOTD</Navbar.Brand>
          <Nav className="me-auto">
            {result.isLoading && "로딩중"}
            {result.error && "에러남"}
            {result.data && result.data.name}
            <Nav.Link
              onClick={() => {
                navigate("./");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("./event");
              }}
            >
              Event
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("./cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          {/* 페이지 이동 버튼 만들기 */}
          <Link to="/">홈</Link>
          <Link to="/detail/0">상세페이지</Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>} />

        {/* Nested Route: 라우트 안의 라우트 */}
        {/* /about/member, /about/contact와 같다 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>직원 정보</div>} />
          <Route path="contact" element={<div>회사 연락처</div>} />
        </Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
