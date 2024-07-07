// 10. TodoItem div 짜고, css 설정

import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">To-do...</div>
      <div className="date">Date...</div>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
