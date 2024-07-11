import React from "react";

import { useNavigate } from "react-router-dom";

import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  // 지정한 페이지로 이동하게 해주는 함수
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      {/* // 이모션 이미지의 배경색 동적으로 관리하기 */}
      {/* 이미지 클릭하면 Diary 페이지로 이동 */}
      <div
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className={`img_section img_section_${emotionId}`}
      >
        {/* // 이모션 이미지의 배경색 동적으로 관리하기 */}
        <img src={getEmotionImage(emotionId)} />
      </div>

      {/* 날짜 클릭하면 Diary 페이지로 이동 */}
      <div
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className="info_section"
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>

        <div className="created_content">{content}</div>
      </div>

      <div className="button_section">
        {/* 버튼 클릭하면 Edit 페이지로 이동 */}
        <Button
          onClick={() => {
            nav(`/edit/${id}`);
          }}
          text={"수정하기"}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
