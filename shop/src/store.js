import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "lee",
});

let cart2 = createSlice({
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
    cart: cart2.reducer,
  },
});
