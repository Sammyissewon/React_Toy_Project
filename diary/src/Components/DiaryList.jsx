import React from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./DiaryList.css";

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
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
      {data.map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default DiaryList;
