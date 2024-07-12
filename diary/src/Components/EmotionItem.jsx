import React from "react";
import { getEmotionImage } from "../util/get-emotion-image";

import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div
      className={`EmotionItem ${
        // isSelected={item.emotionId === emotionId}이게 참이라면,
        // 해당 EmotionItem_on_${emotionId}을 클래스네임으로 부여하고, css 효과 적용
        // EmotionItem(띄우고) EmotionItem_on_${emotionId} -> 요소 1개에 클래스네임 2개 부여
        // 예) <div className="class1 class2">내용</div>
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
