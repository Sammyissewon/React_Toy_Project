import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import OptionSelector from "./OptionSelector";

import "./Header.css";

const Header = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="input-form">
      <div className="name">
        <label htmlFor="name">이름</label>
        <input type="text" />
      </div>
      <div className="price">
        <label htmlFor="price">가격</label>
        <input type="text" />
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          유형
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">식료품</Dropdown.Item>
          <Dropdown.Item href="#/action-2">생필품</Dropdown.Item>
          <Dropdown.Item href="#/action-3">교통비</Dropdown.Item>
          <Dropdown.Item href="#/action-4">공과금</Dropdown.Item>
          <Dropdown.Item href="#/action-5">사치품</Dropdown.Item>
          <Dropdown.Item href="#/action-6">적금</Dropdown.Item>
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
        <input type="checkbox" />
        <label>메모 작성</label>
        <input type="text" />
      </div>

      <div className="option-selector">
        <lable>재구매의사</lable>
        <OptionSelector />
      </div>
    </div>
  );
};

export default Header;
