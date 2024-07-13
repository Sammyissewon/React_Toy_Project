import React from "react";

import "./Viewer.css";

import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = () => {
  const emotionId = 1;

  // emotionList: emotionName과 emotionId를 저장해 둔 보관소
  // find를 통해서, 현재 emotionId와 보관소 내의 id가 같은 값을 불러옴
  // 혹시 모르니 String으로 감싸줌
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        {/* 동적 구현을 위한 class명 */}
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>일기...</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
