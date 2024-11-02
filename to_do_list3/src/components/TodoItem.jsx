import React from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  content,
  date,
  isDone,
  handleUpdate,
  handleDelete,
}) => {
  const handleCheckbox = () => {
    handleUpdate(id);
  };

  const handleClickDelete = () => {
    handleDelete(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={handleCheckbox} />
      <div className="contents">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleClickDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
