import React from "react";

const ColorSelector = ({ setDrawingColor }) => {
  const style =
    "w-8 h-8 rounded-full border-2 border-gray-500 focus:outline-none focus:border-4";

  return (
    <div
      className={`flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16`}>
      <button
        onClick={() => setDrawingColor("black")}
        className={`${style} bg-black focus:border-gray-600 hover:bg-gray-800`}></button>
      <button
        onClick={() => setDrawingColor("red")}
        className={`${style} bg-red-600 focus:border-red-200 hover:bg-red-800`}></button>
      <button
        onClick={() => setDrawingColor("blue")}
        className={`${style} bg-blue-600 focus:border-blue-200 hover:bg-blue-800`}></button>
      <button
        onClick={() => setDrawingColor("green")}
        className={`${style} bg-green-600 focus:border-green-200 hover:bg-green-800`}></button>
      <button
        onClick={() => setDrawingColor("yellow")}
        className={`${style} bg-yellow-600 focus:border-yellow-200 hover:bg-yellow-800`}></button>
      <button
        onClick={() => setDrawingColor("purple")}
        className={`${style} bg-purple-600 focus:border-purple-200 hover:bg-purple-800`}></button>
    </div>
  );
};

export default ColorSelector;
