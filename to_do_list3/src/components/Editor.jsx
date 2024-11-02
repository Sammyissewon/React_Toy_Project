import React from "react";
import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ handleAddTodos }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    handleAddTodos(content);
    setContent("");
  };

  return (
    <form className="Editor" onSubmit={onSubmit}>
      <input
        type="text"
        value={content}
        ref={contentRef}
        onChange={handleChangeContent}
        placeholder="새로운 Todo"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default Editor;
