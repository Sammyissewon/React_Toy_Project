import React from "react";
import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Filter.css";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("유형 필터");
  const [selectedStandard, setSelectedStandard] = useState("정렬 기준");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="filter">
      <Dropdown className="category">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelectedCategory("식료품")}>
            식료품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("생필품")}>
            생필품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("교통비")}>
            교통비
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("공과금")}>
            공과금
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("사치품")}>
            사치품
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedCategory("적금")}>
            적금
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="standard">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedStandard}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelectedStandard("가격 높은 순")}>
            가격 높은 순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedStandard("가격 높은 순")}>
            가격 낮은 순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedStandard("가격 높은 순")}>
            최신 순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedStandard("가격 높은 순")}>
            오래된 순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* 기간 범위 */}
    </div>
  );
};

export default Filter;
