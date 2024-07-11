import React from "react";
import { getEmotionImage } from "../util/get-emotion-image";

import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName }) => {
  return (
    <div>
      <img src={getEmotionImage(emotionId)} />
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
