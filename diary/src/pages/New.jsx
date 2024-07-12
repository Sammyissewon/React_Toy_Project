import React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Editor from "../Components/Editor";

import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();

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
      <Editor />
    </div>
  );
};

export default New;
