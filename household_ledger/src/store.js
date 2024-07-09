import { configureStore, createSlice } from "@reduxjs/toolkit";

let data = createSlice({
  name: "data",
  initialState: [
    {
      id: 0,
      date: new Date().getTime(),
      type: "식료품",
      name: "쌀",
      price: 15000,
      memo: "안녕",
    },
    {
      id: 1,
      date: new Date().getTime(),
      type: "생필품",
      name: "화장지",
      price: 20000,
      memo: "안녕",
    },
    {
      id: 2,
      date: new Date().getTime(),
      type: "공과금",
      name: "전기세",
      price: 78000,
      memo: "안녕",
    },
  ],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { addItem, setFilter, setSort } = data.actions;

export default configureStore({
  reducer: {
    data: data.reducer,
  },
});
