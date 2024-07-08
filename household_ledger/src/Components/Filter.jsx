import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <Dropdown className="category">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          유형 필터
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

      <Dropdown className="standard">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          정렬 기준
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">가격 높은 순</Dropdown.Item>
          <Dropdown.Item href="#/action-2">가격 낮은 순</Dropdown.Item>
          <Dropdown.Item href="#/action-3">최신 순</Dropdown.Item>
          <Dropdown.Item href="#/action-4">오래된 순</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* 기간 범위 */}
    </div>
  );
};

export default Filter;
