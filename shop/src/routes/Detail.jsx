import { useParams } from "react-router-dom";
// 버튼 같은 거 만들고 꾸미고 싶은데, CSS 파일 쓰기 싫을 때.
import styled from "styled-components";
import { useEffect, useState } from "react";

// styled-component
// 1. styled-component도 컴포넌트이며, props 활용 가능
let Button = styled.button`
  background: ${(props) => props.bg};
  // 2. JS 문법도 활용 가능
  color: ${(props) => (props.bg == "pink" ? "grey" : "black")};
  padding: 10px;
`;

// 다른 styled-component의 속성값을 그대로 가져올 수도 있음
let NewButton = styled.button(Button);

// styled-component도 중복되는 내용이라면,
// 이런 하드코딩 하지말고, props를 활용할 것
// let Button2 = styled.button`
//   background: blue;
//   color: black;
//   padding: 10px;
// `;

function Detail(props) {
  // useEffect 용도
  // 1. 어려운 연산
  // 2. 서버에서 데이터 가져오는 작업
  // 3. 타이머 장착하는 거
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  // let [count, setCount] = useState(0);
  let { id } = useParams();

  return (
    <div>
      <div className="container">
        {/* 렌더링 2초 뒤에 숨기기 */}
        <div className="alert alert-warning">
          {alert ? <div>2초 할인</div> : <></>}
        </div>
        {/* {count} */}
        {/* styled-component 삽입 */}
        <Button
          bg="pink"
          // onClick={() => {
          //   setCount(count + 1);
          // }}
        >
          버튼
        </Button>
        <Button bg="skyblue">버튼2</Button>
        <NewButton bg="green">버튼3</NewButton>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              width="100%"
            />
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
