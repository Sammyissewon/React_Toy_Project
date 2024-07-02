import { useParams } from "react-router-dom";
// 버튼 같은 거 만들고 꾸미고 싶은데, CSS 파일 쓰기 싫을 때.
import styled from "styled-components";

// styled-component도 컴포넌트
let Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "pink" ? "grey" : "black")};
  padding: 10px;
`;

let NewButton = styled.button(Button);

// styled-component도 중복되는 내용이라면,
// 이런 하드코딩 하지말고, props를 활용할 것
// let Button2 = styled.button`
//   background: blue;
//   color: black;
//   padding: 10px;
// `;

function Detail(props) {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="container">
        {/* styled-component 삽입 */}
        <Button bg="pink">버튼</Button>
        <Button bg="skyblue">버튼2</Button>
        <NewButton bg="green">버튼3</NewButton>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
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
