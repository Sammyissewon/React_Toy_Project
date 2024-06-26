import React from "react";
import TodoItem from "./TodoItems";

const TodoBoard = ({ todoList }) => {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default TodoBoard;
