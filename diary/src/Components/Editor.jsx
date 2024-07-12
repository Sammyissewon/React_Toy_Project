import React from "react";
import "./Editor.css";

import EmotionItem from "./EmotionItem";
import Button from "./Button";

// 이모티콘 5개를 하드코딩 하지말고, 컴포넌트 외부에 배열로 선언하고 map 돌리기
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
  const emotionId = 5;

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
            <EmotionItem
              // map을 돌린 각 감정이미지 Id를 넘기고
              key={item.emotionId}
              // 스프레드 연산자로 5개 감정이미지를 보여주고
              {...item}
              // 5가지 감정 중에 선택한 이미지 1개에 효과주기. true/false로 판별.
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
