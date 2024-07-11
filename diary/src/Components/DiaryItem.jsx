import React from "react";

import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = () => {
  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className="create_date">{new Date().toLocaleDateString()}</div>
        <div>일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
