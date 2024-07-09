import "./App.css";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import List from "./Components/List";
import { useState } from "react";

const mockData = [
  {
    id: 0,
    date: new Date().getTime(),
    type: "식료품",
    name: "쌀",
    price: 15000,
  },
  // {
  //   id: 1,
  //   date: new Date().getTime(),
  //   type: "생필품",
  //   name: "화장지",
  //   price: 20000,
  // },
  // {
  //   id: 2,
  //   date: new Date().getTime(),
  //   type: "공과금",
  //   name: "전기세",
  //   price: 78000,
  // },
];

function App() {
  const [spend, setSpend] = useState(mockData);

  return (
    <>
      <Header />
      <Filter />
      <List spend={spend} />
    </>
  );
}

export default App;
