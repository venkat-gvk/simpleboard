import React from "react";
import circle from "../static/circle.png";
import rectangle from "../static/rectangle.png";
import line from "../static/line.png";
import arrow from "../static/arrow.png";

const ShapeSelector = ({ setShapeTool, setTool }) => {
  const resetTool = () => {
    setTool("none");
  };

  return (
    <div className="flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16">
      <button
        onClick={() => {
          setShapeTool("rectangle");
          resetTool();
        }}
        className="w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow">
        <img className="w-6 h-6 mx-auto" src={rectangle} alt="rectangle" />
      </button>
      <button
        onClick={() => {
          setShapeTool("circle");
          resetTool();
        }}
        className="w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow">
        <img className="w-6 h-6 mx-auto" src={circle} alt="circle" />
      </button>
      <button
        onClick={() => {
          setShapeTool("line");
          resetTool();
        }}
        className="w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow">
        <img className="w-6 h-6 mx-auto" src={line} alt="line" />
      </button>
      <button
        onClick={() => {
          setShapeTool("arrow");
          resetTool();
        }}
        className="w-7 h-7 hover:bg-gray-400 hover:rounded-md hover:shadow">
        <img className="w-6 h-6 mx-auto" src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default ShapeSelector;
