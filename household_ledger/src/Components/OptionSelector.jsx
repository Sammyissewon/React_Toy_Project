import React, { useState } from "react";

const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="option-selector">
      <label>
        <input
          type="radio"
          value="한다"
          checked={selectedOption === "한다"}
          onChange={handleChange}
        />
        한다
      </label>
      <label>
        <input
          type="radio"
          value="안한다"
          checked={selectedOption === "안한다"}
          onChange={handleChange}
        />
        안한다
      </label>
    </div>
  );
};

export default OptionSelector;
