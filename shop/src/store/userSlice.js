import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  // state가 1개인 경우라도, 일부러 {}로 감싸면 더 편함
  initialState: { name: "Lee", age: 35 },
  reducers: {
    changeName(state) {
      // return { name: "Park", age: 25 };
      state.name = "Park";
    },
    changeUpAge(state, parameter) {
      state.age += parameter.payload;
    },
  },
});

export let { changeName, changeUpAge } = user.actions;

export default user;
