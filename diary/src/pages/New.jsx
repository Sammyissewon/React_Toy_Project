import React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  // 부모로부터 일기 생성 함수를 불러옴
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (input) => {
    // getTime: 타임스탬프 형식으로 저장
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    // 작성하기 버튼 클릭 후, 홈으로 이동
    // replace: true : 뒤로가기 방지
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            text={"< 뒤로 가기"}
            onClick={() => {
              // -1하면 뒤로감
              nav(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
