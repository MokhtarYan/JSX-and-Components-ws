import React from "react";
import LeftSide from "./leftSide/LeftSide";
import "./MiddlePart.css";
import RightSide from "./rightSide/RightSide";

const MiddlePart = () => {
  return (
    <div className="middlep">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default MiddlePart;
