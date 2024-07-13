import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  // App.jsx로부터 Context로 공유된 삭제함수 불러오기
  const { onDelete } = useContext(DiaryDispatchContext);

  // 삭제하기 버튼 눌렀을 때 추가확인알림 표시
  const onClickDelete = () => {
    // 브라우저 팝업 함수
    // 확인: true, 취소: false 반환
    if (
      window.confirm(
        "일기를 정말 삭제하시겠습니까? 한번 삭제된 일기는 복구되지 않습니다."
      )
    ) {
      // 확인(true)라면, 일기의 id를 인수로 받아 함수 실행하고, 홈으로 이동 및 뒤로가기 방지
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title="일기수정하기"
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </div>
  );
};

export default Edit;
