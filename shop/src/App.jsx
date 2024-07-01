import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Stack } from "react-bootstrap";
import data from "./data";
import Card from "./components/Card";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar className="navBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OOTD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
          {/* 페이지 이동 버튼 만들기 */}
          <Link to="/">홈</Link>
          <Link to="/detail">상세페이지</Link>
        </Container>
      </Navbar>

      <Routes>
        {/* 1. 기존에 짠 작업태그들을 메인 element 안에 삽입
        2. 이러면 /detail에 접속 시엔 보이지 않게 됨 */}
        <Route
          path="/"
          element={
            <div>
              {" "}
              {/* 1. data 배열을 Map으로 돌림
                2. 이미지 파일은 각각 index만 다르게 함 */}
              <div className="main-bg"></div>
              <Stack direction="horizontal" gap={3}>
                {data.map((item, i) => (
                  <Card
                    key={i}
                    img={`https://codingapple1.github.io/shop/shoes${
                      i + 1
                    }.jpg`}
                    data={data[i]}
                  />
                ))}
              </Stack>
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="https://codingapple1.github.io/shop/shoes1.jpg"
                      width="100%"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                  </div>
                </div>
              </div>{" "}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
