import React, { useContext } from "react";
import { toolBarContext } from "../App";

const Stroke = () => {
  const { strokeSize, handleStrokeSize } = useContext(toolBarContext);

  return (
    <div
      className={`flex justify-between items-center absolute w-full bg-gray-100 inset-x-0 rounded-xl mx-auto p-3 bottom-16`}>
      <label htmlFor="stroke">stroke width</label>
      <input
        type="range"
        id="stroke"
        min="0"
        max="10"
        step="1"
        value={strokeSize}
        onChange={handleStrokeSize}
        className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-8 w-10/12 "
      />
    </div>
  );
};

export default Stroke;
