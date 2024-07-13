// 커스텀훅 만들기

import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  // App.jsx로부터 data state 불러오기
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    // 일기 data.id 중에서 현재 열린 일기의 id값과 동일한 것을 반환하여, 변수 currentDiaryItem에 저장
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    // 없는 params.id로 접근했을 시 알림 로직
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    // currentDiaryItem로 반환된 값을 state로 저장
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);

  return curDiaryItem;
};

export default useDiary;
