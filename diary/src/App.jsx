import React, { useReducer, useRef, createContext } from "react";
// components
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

// Link: a 태그와 같은 역할. a태그와 다르게 불필요한 새로고침이 없어서 쾌적.
// useNavigate: 특정 경로로 네비게이션(이동)할 수 있는 함수를 반환
import { Routes, Route } from "react-router-dom";

// data state를 모든 자식 컴포넌트에게 데이터+버튼을 공급하기 위한 작업
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-05-15").getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createdDate: new Date("2024-05-14").getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
  {
    id: 3,
    createdDate: new Date("2024-06-10").getTime(),
    emotionId: 2,
    content: "3번 일기",
  },
];

//기능 3가지(생성, 수정, 삭제)를 담당할 함수
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        // 기존 state의 id 중에 수정하려는 id와 동일한게 있으면, UPDATE 객체 데이터로 변환. 아니면, 원래 값 유지
        // 혹시 모르니, string으로 한번씩 감싸기
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      // 필터링 돌려서, action.id와 같지 않은 item들만 반환 -> 즉, Id와 같은 Item은 삭제한다는 뜻
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // mockData에 1,2가 있으니, 3부터 시작

  //기능 1. 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, // 2부터 1씩 증가
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기능 2. 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, // 2부터 1씩 증가
        createdDate,
        emotionId,
        content,
      },
    });
  };

  //기능 3. 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      {/* data state를 모든 자식 컴포넌트에게 공급하기 위한 작업 */}
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            {/* :id : 동적경로인 URL Parameter를 사용하겠다 */}
            <Route path="/diary/:id" element={<Diary />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            {/* *: wild card */}
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
