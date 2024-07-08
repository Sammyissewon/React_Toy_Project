import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import OptionSelector from "./OptionSelector";

const Header = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">이름</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="price">가격</label>
        <input type="text" className="form-control" />
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

      <div>
        <div>구입날짜</div>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <div>
        <input type="checkbox" />
        <label htmlFor="check">메모 작성</label>
        <input type="text" />
      </div>

      <div>
        재구매의사
        <OptionSelector />
      </div>
    </div>
  );
};

export default Header;
