import { Stack } from "react-bootstrap";
import Shoes from "../components/Shoes";
import Card from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { toFormData } from "axios";
import { useState } from "react";

function Main() {
  let [shoesList, setShoesList] = useState(Shoes);

  return (
    <div>
      {" "}
      <div className="main-bg"></div>
      <Stack direction="horizontal" gap={3}>
        {shoesList.map((item, i) => (
          <Card
            key={i}
            img={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
            data={shoesList[i]}
          />
        ))}
        <div>
          <button
            onClick={() => {
              // 로딩 중 UI 띄우기
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  result;
                  let extraShoes = result.data;
                  setShoesList([...shoesList, ...extraShoes]);
                  // 로딩 중 UI 숨기기
                })
                .catch(() => {
                  console.log("데이터 요청을 실패");
                  // 로딩 중 UI 띄우기
                });
            }}
          >
            더보기
          </button>
        </div>
      </Stack>
    </div>
  );
}

export default Main;
