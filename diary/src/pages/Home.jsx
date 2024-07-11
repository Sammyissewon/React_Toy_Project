import React from "react";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../Components/Header";
import Button from "../Components/Button";
import DiaryList from "../Components/DiaryList";

// pivotDate: Home 페이지에 설정된 월 state
// data: App.jsx에서 받아온 일기 데이터
// 가독성을 위해서 컴포넌트 외부에 선언
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    // 해당 월의 시작일: state 날짜의 연, 월, 1일, 0시 0분 0초
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    // 해당 월의 마지막일: state 날짜의 연, 월, 23시 59분 59초
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  // 일기데이터 중에서 현재설정된 월의 시작일자 보다 이상, 마지막 일자보다 이하인 데이터만 필터링
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  // App.jsx에서 export한 데이터
  // 날짜로 데이터를 필터링 하는 과정
  // 부모로부터 모든 데이터를 받아옴
  const data = useContext(DiaryStateContext);

  // Home 페이지에 설정된 월 state
  const [pivotDate, setPivotDate] = useState(new Date());
  // 설정한 월에 해당하는 데이터만 불러오는 함수
  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
