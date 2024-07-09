import "./App.css";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import List from "./Components/List";
import { useState, useSelector } from "react";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <List />
    </>
  );
}

export default App;
