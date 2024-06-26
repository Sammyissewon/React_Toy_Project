import { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChangeSetInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const addItem = () => {
    // 기존 todoList를 남기고, 새로운 입력값을 추가
    setTodoList([...todoList, inputValue]);
  };

  return (
    <>
      <input value={inputValue} type="text" onChange={onChangeSetInputValue} />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} />
    </>
  );
}

export default App;
