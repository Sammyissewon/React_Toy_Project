import React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Viewer from "../Components/Viewer";
import useDiary from "../hooks/useDiary";

// URL Parameter를 가져오는 훅
import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-Stringed-Date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩중...!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        // 버튼 구현
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
