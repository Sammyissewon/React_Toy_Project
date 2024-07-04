import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/useSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

// 여기에 slice(state)를 등록해야 함. state명.reducer
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
