import { useParams } from "react-router-dom";
// 버튼 같은 거 만들고 꾸미고 싶은데, CSS 파일 쓰기 싫을 때.
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { useContext, useEffect, useState } from "react";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

// 부모가 보낸 state 보관함을 import
import { Context1 } from "../App";

// styled-component도 컴포넌트이며, props, js 삼항연산자 활용 가능
let Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "pink" ? "grey" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [input, setInput] = useState("");
  let [tap, setTap] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();

  // /detail/:id와 연결됨
  let { id } = useParams();

  // state 보관함을 해체 및 object 형식으로 저장
  let { stock } = useContext(Context1);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 입력값이 숫자인지 확인
    if (isNaN(input) == true) {
      alert("숫자만 입력하세요!");
    }
    //❗️❗️❗️❗️❗️❗️❗️❗️❗️
  }, [input]);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div>
      <div className={"container start " + fade}>
        <div className="alert alert-warning">
          {alert ? <div>2초 할인</div> : <></>}
        </div>

        <Button bg="pink">버튼</Button>
        <Button bg="skyblue">버튼2</Button>

        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              width="100%"
            />
          </div>

          <div>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
          </div>

          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      </div>{" "}
      {/* defaultActiveKey: 기본으로 눌려있을 버튼 */}
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            eventKey="/home"
            onClick={() => {
              setTap(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTap(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            eventKey="Link-2"
            onClick={() => {
              setTap(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent shoes={props.shoes} tap={tap} />
    </div>
  );
}

function TapContent({ tap, shoes }) {
  let [fade, setFade] = useState("");
  // 부모의 부모 컴포넌트(App.jsx) state를 갖다 쓸 수 있음 -> props 없이 작업 가능
  let { stock } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tap]);

  return (
    <div className={"start " + fade}>
      {[<div>{stock}</div>, <div>내용1</div>, <div>내용2</div>][tap]}
    </div>
  );
}

export default Detail;
