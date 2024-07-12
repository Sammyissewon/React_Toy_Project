import React from "react";
import "./Editor.css";

import EmotionItem from "./EmotionItem";
import Button from "./Button";

import { useState } from "react";

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

// 날짜 -> YYYY-MM-DD로 변환하는 함수
// 그냥 new Date()를 쓰면, 오늘의 날짜 value가 인식하지 못함. 문자열로 변환해서 전달해야 함
// 따라서 input.createdDate를 getStringedDate 함수로 돌려줘야 함
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월, 일이 1자리 수일때, 앞에 0을 붙여주는 로직
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = () => {
  // 오늘의 날짜, 감정, 일기내용 저장 state
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // 오늘의 날짜, 감정, 일기내용 state 변경 이벤트 로직
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 날짜를 바꾼거라면, 날짜(현재 문자열)을 new Date로 한번 변환시켜줘야함
    if (name === "createdDate") {
      value = new Date(value);
    }

    // input state가 배열형태이기 때문에, 스프레드 연산자로 가져와서 이벤트가 실행된 name의 값만 업데이트 하는 형태
    setInput({ ...input, [name]: value });
  };

  const emotionId = 5;

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
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
