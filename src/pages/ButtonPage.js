import { FaBeer } from "react-icons/fa";
import { FiAirplay } from "react-icons/fi";
import React from "react";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <div>
      <Button secondary rounded className="mb-5" onClick={handleClick}>
        <FaBeer />
        test
      </Button>
      <Button success>
        <FiAirplay />
        test
      </Button>
      <Button waring>test</Button>
      <Button danger>test</Button>
      <Button primary>test</Button>
      <Button rounded>test</Button>
    </div>
  );
}

export default ButtonPage;
