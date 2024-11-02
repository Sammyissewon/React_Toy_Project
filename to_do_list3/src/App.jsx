import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "React 복습하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "React 예습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  // ⭐️
  const idRef = useRef(3);

  const handleAddTodos = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const handleUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor handleAddTodos={handleAddTodos} />
        <List
          todos={todos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
