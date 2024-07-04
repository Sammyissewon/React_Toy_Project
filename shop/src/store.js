import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 0 },
    { id: 2, name: "Grey Yordan", count: 0 },
  ],
  reducers: {
    buyOne(state, action) {
      // (state.cart[i].id) => action.payload
      // a는 state 배열 안의 요소들
      // a와 state.cart[i].id가 같다면, 그게 몇번째 자료인지 변수에 저장
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
  },
});

export let { buyOne } = cart.actions;

// 여기에 slice(state)를 등록해야 함. state명.reducer
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
