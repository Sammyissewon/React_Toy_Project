import React from "react";
import TodoItem from "./TodoItem";
import "./List.css";
import { useState } from "react";

const List = ({ todos, handleUpdate, handleDelete }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodo = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodo = getFilteredTodo();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos-wrapper">
        {filteredTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
