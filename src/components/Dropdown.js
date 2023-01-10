import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const el = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (!el.current) return;

      if (!el.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded p-1 cursor-pointer"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative" ref={el}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select"}
        {<GoChevronDown className="text-lg" />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
