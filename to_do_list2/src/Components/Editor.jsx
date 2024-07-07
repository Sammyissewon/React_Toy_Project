import "./Editor.css";
import { useState, useRef } from "react";

// 16. 함수 props 받아와서
const Editor = ({ onCreate }) => {
  // 18. 매번 입력창에 입력한 값을 state로 저장
  const [content, setContent] = useState("");
  // 19. input에 입력한 값으로 content state 업데이트 하는 로직
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 26. 빈값인데 버튼 입력하면 input창에 focus 효과주기 위함
  const contentRef = useRef();

  // 22. 버튼을 누르면 입력한 값을 파라미터 삼아서 onCreate 함수(App.jsx)를 실행
  const onSubmit = () => {
    // 25. 버튼 눌렀는데, 빈값이라면 onCreate 실행하지 말고 바로 return 종료
    if (content == "") {
      // 28. 입력창이 빈칸시 focus 효과 적용하기
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    // 29. 매번 입력버튼 누르고나서 입력창 비우기
    setContent("");
  };

  // 30. 버튼 누르기 외에, 엔터키 눌러도 실행되는 로직
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    // 5. 디자인하기
    <div className="Editor">
      <input
        // 27. 입력창이 빈칸시 focus 효과 적용하기
        ref={contentRef}
        value={content}
        // 20. 뭔가를 입려하면 setContet 변경함수를 실행
        onChange={onChangeContent}
        // 31. 엔터기로 실행하기
        onKeyDown={onKeydown}
        placeholder="New To-do"
      ></input>
      {/* 21. 버튼을 누르면 onSubmit 함수 실행 */}
      <button onClick={onSubmit}>Add To-do</button>
    </div>
  );
};

export default Editor;
