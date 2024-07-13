import React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Viewer from "../Components/Viewer";

// URL Parameter를 가져오는 훅
import { useParams, useNavigate } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        // 버튼 구현
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
};

export default Diary;
