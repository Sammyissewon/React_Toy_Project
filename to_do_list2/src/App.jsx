import "./App.css";
import Header from "./Components/Header";
import Editor from "./Components/Editor";
import List from "./Components/List";
import { useState } from "react";

// 1. UI 짜기
// 2. 각 컴포넌트의 기본 CSS 설정
// 3. Header 구현하기

// 11. List.TodoItem에 구현할 목업 데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JavaScript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "CSS 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  // List 입력값을 업데이트하는 state
  const [todos, setTodos] = useState([mockData]);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
