import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeUpAge } from "../store/useSlice";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name}
        {state.user.age}의 장바구니
      </h6>
      <button
        onClick={() => {
          dispatch(changeUpAge(10));
        }}
      >
        나이 1업
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>1</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(changeName());
                  }}
                >
                  이름바꾸기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
    </div>
  );
}

export default Cart;
