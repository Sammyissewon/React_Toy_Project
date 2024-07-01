import data from "./data";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function MainPage() {
  return (
    <div>
      {" "}
      {/* 1. data 배열을 Map으로 돌림
                2. 이미지 파일은 각각 index만 다르게 함 */}
      <div className="main-bg"></div>
      <Stack direction="horizontal" gap={3}>
        {data.map((item, i) => (
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

export default MainPage;
