import "./App.css";
import Header from "./Components/Header";
import Editor from "./Components/Editor";
import List from "./Components/List";
import { useState, useRef } from "react";

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
  // 12. List 입력값을 업데이트하는 state
  const [todos, setTodos] = useState([mockData]);

  // 23. 목업데이터의 id가 0~2이어서, 새로 입력한 값은 id: 3부터 시작함. 따라서 useRef의 초기값은 3
  const idRef = useRef(3);

  const onCreate = (content) => {
    // 13. 새로운 입력값을 객체형태로 만들기
    const newTodo = {
      // 24. 초기값 3부터 시작해서 1씩 증가하는 id
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    // 14. 기존 todos 객체배열을 스프레드 연산자로 불러와서, 앞에 새로운 입력값(newTodo)를 추가
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      {/* 15. Editor 컴포넌트에 함수 props 전달 */}
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
