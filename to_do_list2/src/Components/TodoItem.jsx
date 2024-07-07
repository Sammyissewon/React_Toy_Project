// 10. TodoItem div 짜고, css 설정

import "./TodoItem.css";

// 36. App.js -> List -> TodoItem으로 전달된 props를 분해할당하기
const TodoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="TodoItem">
      {/* 38. checked라는 props명은 정의하지 않았어서 콘솔에 에러 방출 -> readOnly로 임시 해결 */}
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      {/* 37. date 양식 변환 */}
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
