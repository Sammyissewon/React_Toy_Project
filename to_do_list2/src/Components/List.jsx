// 6. 타이틀 넣고
// 7. 서치바 넣고
// 8. CSS 넣고
// 9. TodoItem.jsx 컴포넌트 만들어서 추가

import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos }) => {
  // 37. To-do 검색창 로직
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 39. 서치창에 입력한 값으로 필터링 리스트 필터링하기
  const getFilteredData = () => {
    // 40. 서치창 빈값이면, 리스트 모두 반환
    if (search === "") {
      return todos;
    }
    // 41. 서치창에 입력값을 포함한 값들만 걸러서 반환
    // 43. true인 값들만 filter해서 반환
    return todos.filter((todo) =>
      // 42. content가 서치 입력창 내용을 includes하면 true
      // 45. 대소문자 관계 없이 검색되도록, 소문자 전환 메서드 사용
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 44. 서치창 필터링함수를 변수로 지정
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>To-do list</h4>
      <input
        value={search}
        // 38. 유저가 서치창에 입력하면, 그 입력값이 search state에 저장됨
        onChange={onChangeSearch}
        placeholder="What to search"
      ></input>

      <div className="todos_wrapper">
        {/* 32. todos 배열 state를 map 돌려서 */}
        {/* 33. 각 배열의 요소를 todo로 받고 */}
        {/* 45. 필터링된 값으로 map 돌리기 */}
        {filteredTodos.map((todo) => {
          // 34. 콜백함수(return)으로 요소 갯수만큼 반환하기
          return (
            <div>
              {/* 35. 콜백함수는 컴포넌트{...props} 형태를 받을 수 있다 */}
              {/* 36. map 등으로 만들어진 배열의 요소들은 고유의 key(id)를 가져야함 */}
              <TodoItem key={todo.id} {...todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
