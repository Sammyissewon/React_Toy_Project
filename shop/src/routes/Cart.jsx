import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  // useSelector: redux store을 가져와줌
  // useSelector(함수 왜 넣니?): 그냥 넣어
  // (state): store.js에 저장된 모든 state를 의미
  // (state) => state.stock2 식으로, 특정 state만 불러올 수 있음
  let state = useSelector((state) => state.stock2);
  console.log(state);

  return (
    <div>
      <Table>
        <thead>
          {/* 가로칸 생성 */}
          <tr>
            {/* 세로칸 생성 */}
            <th>#</th>
            <th>{state}</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table>{" "}
    </div>
  );
}

export default Cart;
