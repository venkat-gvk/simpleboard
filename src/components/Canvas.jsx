import { Stage, Layer, Line, Circle, Rect, Arrow, Group } from "react-konva";
import React, { useContext, useEffect, useState } from "react";
import { colorPallete } from "./utils";
import { toolBarContext } from "../App";

const Canvas = () => {
  const [freeDraw, setFreeDraw] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [action, setAction] = useState("none");
  const [line, setLine] = useState([]);
  const {
    tool,
    setTool,
    setIsModal,
    strokeSize,
    drawingColor,
    shapeTool,
    setShapeTool,
  } = useContext(toolBarContext);

  useEffect(() => {
    if (tool === "clear") {
      setTool("draw");
      setFreeDraw([]);
      setShapes([]);
      setShapeTool("none");
      setIsModal(false);
    }
  }, [tool, setIsModal]);

  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();

    if (tool === "drag") {
      setAction("drag");
      return;
    }

    if (tool === "draw" || tool === "eraser") {
      setFreeDraw([
        ...freeDraw,
        {
          erase: tool === "eraser",
          color: colorPallete[drawingColor],
          strokeWidth: Number(strokeSize),
          points: [pos.x, pos.y],
        },
      ]);

      tool === "eraser" ? setAction("erase") : setAction("write");
    } else if (shapeTool === "rectangle") {
      setShapes([
        ...shapes,
        {
          tool: shapeTool,
          color: colorPallete[drawingColor],
          strokeWidth: Number(strokeSize),
          x: pos.x,
          y: pos.y,
          width: 0,
          height: 0,
        },
      ]);

      setAction("write");
    } else if (shapeTool === "circle") {
      setShapes([
        ...shapes,
        {
          tool: shapeTool,
          color: colorPallete[drawingColor],
          strokeWidth: Number(strokeSize),
          x: pos.x,
          y: pos.y,
          radius: 10,
        },
      ]);

      setAction("write");
    } else if (shapeTool === "line" || shapeTool === "arrow") {
      setLine([
        {
          tool: shapeTool,
          color: colorPallete[drawingColor],
          strokeWidth: Number(strokeSize),
          points: [pos.x, pos.y, pos.x, pos.y],
        },
      ]);

      setAction("write");
    }
  };

  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const li = freeDraw.length - 1;
    const si = shapes.length - 1;

    if (action === "write" || action === "erase") {
      if (tool === "eraser" || shapeTool === "none") {
        let lastLine = freeDraw[li];
        // add point
        lastLine.points = lastLine.points.concat([point.x, point.y]);
        // replace last
        freeDraw.splice(li, 1, lastLine);

        setFreeDraw([...freeDraw]);
      } else if (shapeTool === "rectangle") {
        const lastRectangle = shapes[si];
        const newWidth = point.x - lastRectangle.x;
        const newHeight = point.y - lastRectangle.y;

        shapes.splice(si, 1, {
          ...lastRectangle,
          width: newWidth,
          height: newHeight,
        });

        setShapes([...shapes]);
      } else if (shapeTool === "circle") {
        const lastCircle = shapes[si];
        const rise = Math.pow(point.y - lastCircle.y, 2);
        const run = Math.pow(point.x - lastCircle.x, 2);

        let radius = Math.sqrt(rise + run);

        if (radius < 5) radius = 5;

        shapes.splice(si, 1, { ...lastCircle, radius: radius });

        setShapes([...shapes]);
      } else if (shapeTool === "line" || shapeTool === "arrow") {
        const last = line[line.length - 1];

        last.points[2] = point.x;
        last.points[3] = point.y;

        setLine([last]);
      }
    }
  };

  const handleMouseUp = (e) => {
    if (action === "write") {
      if (shapeTool === "line" || shapeTool === "arrow") {
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        const li = line.length - 1;

        const last = line[li];

        last.points[2] = point.x;
        last.points[3] = point.y;

        setShapes([...shapes, last]);
        setLine([]);
      }
    }

    setAction("none");
  };

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight - 90}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}>
        <Layer>
          {freeDraw.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={line.strokeWidth}
              lineCap="round"
              lineJoin="round"
              draggable={tool === "drag"}
              globalCompositeOperation={
                line.erase ? "destination-out" : "source-over"
              }
            />
          ))}

          <Group>
            {/* Rectangle, Circle */}
            {shapes.map((shape, i) => {
              if (shape.tool === "rectangle")
                return (
                  <Rect
                    key={shape.x + "-" + shape.y}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    stroke={shape.color}
                    strokeWidth={shape.strokeWidth}
                    draggable={tool === "drag"}
                  />
                );
              else if (shape.tool === "circle")
                return (
                  <Circle
                    key={shape.x + "-" + shape.y}
                    x={shape.x}
                    y={shape.y}
                    f
                    radius={shape.radius}
                    stroke={shape.color}
                    strokeWidth={shape.strokeWidth}
                    draggable={tool === "drag"}
                  />
                );
            })}
            {line.map((shape, i) => {
              if (shape.tool === "line") {
                const points = [...shape.points];
                return (
                  <Line
                    key={i}
                    points={points}
                    stroke={shape.color}
                    fill={shape.color}
                    strokeWidth={shape.strokeWidth}
                    tension={0.5}
                    lineCap="round"
                    lineJoin="round"
                    draggable={tool === "drag"}
                  />
                );
              } else if (shape.tool === "arrow") {
                const points = [...shape.points];
                return (
                  <Arrow
                    key={i}
                    points={points}
                    stroke={shape.color}
                    fill={shape.color}
                    strokeWidth={shape.strokeWidth}
                    tension={1}
                    lineCap="round"
                    lineJoin="round"
                    draggable={tool === "drag"}
                  />
                );
              }
            })}
            {shapes.map((shape, i) => {
              if (shape.tool === "line") {
                const points = [...shape.points];
                return (
                  <Line
                    key={i}
                    points={points}
                    stroke={shape.color}
                    fill={shape.color}
                    strokeWidth={shape.strokeWidth}
                    tension={0.1}
                    lineCap="round"
                    lineJoin="round"
                    draggable={tool === "drag"}
                  />
                );
              } else if (shape.tool === "arrow") {
                const points = [...shape.points];
                return (
                  <Arrow
                    key={i}
                    points={points}
                    stroke={shape.color}
                    fill={shape.color}
                    strokeWidth={shape.strokeWidth}
                    tension={1}
                    lineCap="round"
                    lineJoin="round"
                    draggable={tool === "drag"}
                  />
                );
              }
            })}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
