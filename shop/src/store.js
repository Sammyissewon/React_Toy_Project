import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 만들기, state 1개 = slice
// createSlice({
//   name: "state이름",
//   initialState: "값",
// });

let user = createSlice({
  name: "user",
  initialState: "lee",
});

let stock2 = createSlice({
  name: "stock2",
  initialState: [10, 11, 12],
});

export default configureStore({
  // 여기에 slice(state)를 등록해야 함. state명.reducer
  reducer: {
    // 작명: 변수명.reducer
    user: user.reducer,
    stock2: stock2.reducer,
  },
});
