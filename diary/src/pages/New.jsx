import React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
