import { useParams } from "react-router-dom";
// 버튼 같은 거 만들고 꾸미고 싶은데, CSS 파일 쓰기 싫을 때.
import styled from "styled-components";
import { useEffect, useState } from "react";

// styled-component도 컴포넌트이며, props 활용 가능
let Button = styled.button`
  background: ${(props) => props.bg};
  // 2. JS 문법도 활용 가능
  color: ${(props) => (props.bg == "pink" ? "grey" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [input, setInput] = useState("");

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

  let { id } = useParams();

  return (
    <div>
      <div className="container">
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
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Detail;
