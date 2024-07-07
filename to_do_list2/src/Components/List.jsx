// 6. 타이틀 넣고
// 7. 서치바 넣고
// 8. CSS 넣고
// 9. TodoItem.jsx 컴포넌트 만들어서 추가

import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  return (
    <div className="List">
      <h4>To-do list</h4>
      <input placeholder="What to search"></input>
      <div className="todos_wrapper">
        {/* 32. todos 배열 state를 map 돌려서 */}
        {/* 33. 각 배열의 요소를 todo로 받고 */}
        {todos.map((todo) => {
          // 34. 콜백함수(return)으로 요소 갯수만큼 반환하기
          return (
            <div>
              <TodoItem {...todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
