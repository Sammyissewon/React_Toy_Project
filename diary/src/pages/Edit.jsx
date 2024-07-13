import React from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  // 삭제하기 버튼 눌렀을 때 추가확인알림 표시
  const onClickDelete = () => {};

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
