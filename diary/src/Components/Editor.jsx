import React from "react";
import "./Editor.css";

import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그저 그럼",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "완전 나쁨",
  },
];

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* 이모티콘 5개를 하드코딩 하지말고, 컴포넌트 외부에 배열로 선언하고 map 돌리기 */}
          {emotionList.map((item) => (
            <EmotionItem key={item.emotionId} {...item} />
          ))}
        </div>
      </section>
      <section className="content_section"></section>
      <section className="button_section"></section>
    </div>
  );
};

export default Editor;
