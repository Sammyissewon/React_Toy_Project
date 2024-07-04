import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
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
