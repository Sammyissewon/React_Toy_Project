import React, { useEffect } from "react";
import "./Editor.css";

import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { emotionList } from "../util/constants";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-Stringed-Date";

// 이모티콘 5개를 하드코딩 하지말고, 컴포넌트 외부에 배열로 선언하고 map 돌리기

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  // 오늘의 날짜, 감정, 일기내용 저장 state
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // initData(curDiaryItem) 변경될 때, 즉 수정하기 버튼을 누르면 렌더링될 해당 일기의 기본값 내용
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

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

  // 새 일기 작성 함수
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

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
              // 감정 이모션 고르는 로직
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              // map을 돌린 각 감정이미지 Id를 넘기고
              key={item.emotionId}
              // 스프레드 연산자로 5개 감정이미지를 보여주고
              {...item}
              // 5가지 감정 중에 선택한 이미지 1개에 효과주기. true/false로 판별.
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          // 일기 내용
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>

      <section className="button_section">
        <Button
          onClick={() => {
            nav(-1);
          }}
          text={"취소하기"}
        />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
