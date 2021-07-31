import React, { useState, Fragment, useEffect } from "react";
import Canvas from "./components/Canvas";
import ColorSelector from "./components/ColorSelector";
import ShapeSelector from "./components/ShapeSelector";
import Stroke from "./components/Stroke";
import eraserimg from "./static/eraser.png";

export const toolBarContext = React.createContext();

const App = () => {
  const [strokeSize, setStrokeSize] = useState(2);
  const [isModal, setIsModal] = useState(false);
  const [tool, setTool] = useState("draw");
  const [drawingColor, setDrawingColor] = useState("black");
  const [shapeTool, setShapeTool] = useState("none");
  const [toolbar, setToolbar] = useState({
    color: false,
    stroke: false,
    shape: false,
  });

  const handleStrokeSize = (e) => {
    setStrokeSize(e.target.value);
  };

  const resetIsOpen = (e) => {
    if (toolbar.color || toolbar.stroke || toolbar.shape)
      setToolbar({
        color: false,
        stroke: false,

        shape: false,
      });

    if (isModal) setIsModal(false);
  };

  const handleTools = (e) => {
    setToolbar({ color: false, stroke: false, shape: false });

    if (e.target.id === "move") setTool("drag");
    else if (e.target.id === "draw") {
      setTool("draw");
      setShapeTool("none");
    } else if (e.target.id === "eraser") {
      setTool("eraser");
      setShapeTool("none");
    }
  };

  useEffect(() => {
    const watch = ({ key }) => {
      switch (key) {
        case "z":
          setIsModal(true);
          break;
        case "v":
          setTool("drag");
          break;
        case "d":
          setTool("draw");
          break;
        case "Escape":
          setIsModal(false);
          break;
        case "Enter":
          setTool("clear");
          break;
      }
    };
    document.addEventListener("keypress", watch);

    return () => document.removeEventListener("keypress", watch);
  }, [isModal]);

  return (
    <Fragment>
      <toolBarContext.Provider
        value={{
          strokeSize,
          handleStrokeSize,
          tool,
          setTool,
          setIsModal,
          drawingColor,
          shapeTool,
          setShapeTool,
        }}>
        {isModal && (
          <div
            className="flex flex-col items-center justify-evenly bg-white z-10
               shadow-md border border-gray-100 rounded-lg inset-0 m-auto absolute w-9/12 sm:w-3/12 h-32">
            <p className="text-md md:text-lg">This will clear everything</p>
            <div className="flex justify-center w-full space-x-7 items-center text-center">
              <button
                onClick={() => setTool("clear")}
                className="px-5 w-20 py-1 bg-indigo-800 text-white hover:bg-indigo-500 rounded-md">
                Ok
              </button>
              <button
                onClick={() => setIsModal(false)}
                className="px-5 py-1 w-20 bg-red-500 text-white hover:bg-red-400 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        )}

        <Canvas />

        {/* button to close opened toolbars */}

        {(toolbar.color || toolbar.stroke || isModal || toolbar.shape) && (
          <button
            className="bg-black opacity-0 fixed inset-0 w-full 
          cursor-default"
            onClick={resetIsOpen}
            tabIndex={-1}
            onKeyDown={resetIsOpen}
            onTouchStart={resetIsOpen}
          />
        )}

        <section className="fixed bottom-5 w-11/12 rounded-xl bg-gray-100 inset-x-0 mx-auto p-3 flex justify-between items-center">
          {/* stroke */}
          <button
            onClick={() =>
              setToolbar({
                ...toolbar,
                stroke: !toolbar.stroke,
                color: false,
                shape: false,
              })
            }>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-7 h-6 hover:rounded-md hover:bg-gray-400 ${
                toolbar.stroke && "bg-gray-400 rounded-md shadow"
              }`}>
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="0"
                style={{ stroke: "rgb(0,0,0)", strokeWidth: 4 }}
              />
            </svg>
          </button>

          {toolbar.stroke && <Stroke />}

          {/* move tool */}
          <button onClick={handleTools}>
            <img
              src="https://img.icons8.com/ios-filled/100/000000/move.png"
              id="move"
              alt="drag"
              className={`w-7 h-7 hover:rounded-md hover:bg-gray-400 ${
                tool === "drag" && "bg-gray-400 rounded-md shadow"
              }`}
            />
          </button>

          {/* shape tool */}
          <button
            className={`w-8 h-7 flex justify-center items-center hover:rounded-md hover:bg-gray-400 ${
              toolbar.shape && "bg-gray-400 rounded-md shadow"
            }`}
            onClick={() =>
              setToolbar({
                ...toolbar,
                shape: !toolbar.shape,
                stroke: false,
                color: false,
              })
            }>
            <img
              src="https://img.icons8.com/windows/96/000000/shape.png"
              alt="shape"
            />
          </button>

          {toolbar.shape && (
            <ShapeSelector setShapeTool={setShapeTool} setTool={setTool} />
          )}

          {/* draw tool */}
          <button onClick={handleTools}>
            <svg
              id="draw"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-8 hover:rounded-md hover:bg-gray-400 ${
                tool === "draw" && "bg-gray-400 rounded-md shadow"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>

          {/* color swatch */}
          <button
            onClick={() =>
              setToolbar({
                ...toolbar,
                color: !toolbar.color,
                stroke: false,
                shape: false,
              })
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 hover:rounded-md hover:bg-gray-400 ${
                toolbar.color && "bg-gray-400 rounded-md shadow"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {toolbar.color && <ColorSelector setDrawingColor={setDrawingColor} />}

          {/* Eraser */}
          <button onClick={handleTools}>
            <img
              id="eraser"
              src={eraserimg}
              alt="eraser"
              className={`w-7 h-7 hover:rounded-md hover:bg-gray-400 ${
                tool === "eraser" && "bg-gray-400 rounded-md shadow"
              }`}
            />
          </button>

          {/* clear */}
          <button onClick={() => setIsModal(!isModal)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 hover:rounded-md hover:bg-gray-400 ${
                isModal && "bg-gray-400 rounded-md shadow"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </toolBarContext.Provider>
    </Fragment>
  );
};

export default App;
