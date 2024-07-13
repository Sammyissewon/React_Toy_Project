import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  // params: 일기의 id 저장
  const params = useParams();
  const nav = useNavigate();
  // App.jsx로부터 Context로 공유된 삭제함수 불러오기
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  // App.jsx로부터 data state 불러오기
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  // params.id, data가 바뀔 때마다 실행될 함수
  useEffect(() => {
    // 일기 data.id 중에서 현재 열린 일기의 id값과 동일한 것을 반환하여, 변수 currentDiaryItem에 저장
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    // 없는 params.id로 접근했을 시 알림 로직
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    // currentDiaryItem로 반환된 값을 state로 저장
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

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

  // 수정하기 -> 작성완료 버튼 클릭 시 함수
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정하겠습니까?")) {
      // App.jsx에 있는 함수
      onUpdate(
        // 인수 순서 틀리면 안됨.
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
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
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
