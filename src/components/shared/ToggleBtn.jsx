import React from "react";

const ToggleBtn = () => {
  return (
    <label className="switch">
      <input className="input_toggle" type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleBtn;
