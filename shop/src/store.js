import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 0 },
    { id: 2, name: "Grey Yordan", count: 0 },
  ],
  reducers: {
    // 상품 수량 +1
    buyOne(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },

    // 상품 수량 -1
    deleteOne(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count--;
    },

    // 중복 체크 후 아이템 추가 또는 수량 증가
    addItem(state, action) {
      let 존재하는아이템 = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (존재하는아이템 === -1) {
        state.push(action.payload);
      } else {
        state[존재하는아이템].count++;
      }
    },
  },
});

export let { buyOne, addItem, deleteOne } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
