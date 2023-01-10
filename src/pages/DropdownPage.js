import React, { useState } from "react";

import Dropdown from "../components/Dropdown";
function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => {
    setSelected(option);
  };
  const options = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelect} value={selected} />
    </div>
  );
}

export default DropdownPage;
