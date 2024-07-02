import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Stack } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

import Main from "./routes/Main";
import Shoes from "./components/Shoes";
import Detail from "./routes/Detail";
import Event from "./routes/Event";
import About from "./routes/About";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar className="navBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OOTD</Navbar.Brand>
          <Nav className="me-auto">
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
          </Nav>
          {/* 페이지 이동 버튼 만들기 */}
          <Link to="/">홈</Link>
          <Link to="/detail">상세페이지</Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail shoes={Shoes} />} />
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
      </Routes>
    </div>
  );
}

export default App;
