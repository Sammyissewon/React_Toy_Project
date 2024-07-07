// 6. 타이틀 넣고
// 7. 서치바 넣고
// 8. CSS 넣고
// 9. TodoItem.jsx 컴포넌트 만들어서 추가

import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {
  return (
    <div className="List">
      <h4>To-do list</h4>
      <input placeholder="What to search"></input>
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
