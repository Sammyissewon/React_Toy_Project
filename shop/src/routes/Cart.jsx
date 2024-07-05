import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeUpAge } from "../store/userSlice";
import { buyOne, deleteOne } from "../store";
import { useState, memo, useMemo } from "react";

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
            <th>장바구니 담기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* i = 0, 1 */}
          {state.cart.map((a, i) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    // (state.cart[i].id) -> payload. store.js로 전송됨
                    dispatch(buyOne(state.cart[i].id));
                  }}
                >
                  담기
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteOne(state.cart[i].id));
                  }}
                >
                  삭제하기
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
