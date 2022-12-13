import React from "react";

const ToggleBtn = () => {
  return (
    <label class="switch">
      <input className="input_toggle" type="checkbox" />
      <span class="slider"></span>
    </label>
  );
};

export default ToggleBtn;
