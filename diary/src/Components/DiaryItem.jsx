import React from "react";

import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

import "./DiaryItem.css";

const DiaryItem = () => {
  // 이모션 이미지의 배경색 동적으로 관리하기
  const emotionId = 1;

  return (
    <div className="DiaryItem">
      {/* // 이모션 이미지의 배경색 동적으로 관리하기 */}
      <div className={`img_section img_section_${emotionId}`}>
        {/* // 이모션 이미지의 배경색 동적으로 관리하기 */}
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="created_content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
