import React from "react";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionSelector from "./OptionSelector";

import "./Header.css";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("구매유형");
  const [memo, setMemo] = useState("");
  const [isMemoChecked, setIsMemoChecked] = useState(false);
  const dispatch = useDispatch();

  const idRef = useRef(3);

  const handleSubmit = () => {
    const newItem = {
      id: idRef.current,
      date: date.getTime(),
      type,
      name,
      price: Number(price),
      memo,
    };
    dispatch(addItem(newItem));
    idRef.current += 1;
  };

  return (
    <div className="input-form">
      <div className="name">
        <label htmlFor="name">이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="price">
        <label htmlFor="price">가격</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {type}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setType("식료품")}>
            식료품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setType("생필품")}>
            생필품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setType("교통비")}>
            교통비
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setType("공과금")}>
            공과금
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setType("사치품")}>
            사치품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setType("적금")}>적금</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="purchasing-date">
        <div>구입날짜</div>
        <DatePicker
          className="calendar"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>

      <div className="memo">
        <input
          type="checkbox"
          checked={isMemoChecked}
          onChange={(e) => setIsMemoChecked(e.target.checked)}
        />
        <label>메모 작성</label>
        {isMemoChecked && (
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
        )}
      </div>

      <div className="option-selector">
        <lable>재구매의사</lable>
        <OptionSelector />
      </div>
      <button onClick={handleSubmit}>저장하기</button>
    </div>
  );
};

export default Header;
