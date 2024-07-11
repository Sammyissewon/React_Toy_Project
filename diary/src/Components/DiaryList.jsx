import React from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./DiaryList.css";

// Home에서 선택한 월로 걸러진 데이터 props로 받음
const DiaryList = ({ data }) => {
  const nav = useNavigate();

  // 정렬버튼 상태
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // ❗️toSorted
  // 혹시 모르니까 Number로 한번 감싸기
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  // getSortedData 호출한 값을 저장
  // () 빼먹지 않도록 조심
  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        {/* onClick 일줄 알았는데, onChange 써야함 */}
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>

        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper"></div>
      {/* Home에서 필터링 된 아이템을 받아서 map 돌리고,
      돌린 아이템들은 배열이니까 각 아이템의 id를 설정하고, 스프레드 연산자로 아이템들을 DiaryItem에 props로 전달 */}
      {sortedData.map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default DiaryList;
