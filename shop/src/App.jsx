import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Stack } from "react-bootstrap";
import data from "./data";
import Card from "./components/Card";

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
        </Container>
      </Navbar>

      {/* 1. slice로 data 배열의 일부를 추출
        2. 추출한 일부를 Map으로 돌림
        3. 이미지 파일은 각각 index만 다르게 함 */}
      <div className="main-bg"></div>
      <Stack direction="horizontal" gap={3}>
        {data.slice(0, 3).map((item, i) => (
          <Card
            key={i}
            img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
            data={data[i]}
          />
        ))}
      </Stack>
    </div>
  );
}

export default App;
