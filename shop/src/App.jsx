import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Stack } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import MainPage from "./routes/MainPage";
import DetailPage from "./routes/DetailPage";

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
                navigate("./product");
              }}
            >
              Product
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("./detail");
              }}
            >
              Info
            </Nav.Link>
          </Nav>
          {/* 페이지 이동 버튼 만들기 */}
          <Link to="/">홈</Link>
          <Link to="/detail">상세페이지</Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>} />
      </Routes>

      <Route path="/about" element={<About />}>
        {/* Nested Route: 라우트 안의 라우트 */}
        {/* /about/member, /about/contact와 같다 */}
        <Route path="member" element={<div>직원 정보</div>} />
        <Route path="contact" element={<About />} />
      </Route>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
