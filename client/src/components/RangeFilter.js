import React, { useRef, useState } from "react";
import "./RangeFilter.css";

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function RangeFilter({ min = 0, max = 100, onChange }) {
  const [left, setLeft] = useState(min);
  const [right, setRight] = useState(max);
  const [drag, setDrag] = useState(null); 
  const sliderRef = useRef();

  const getPercent = (val) => ((val - min) / (max - min)) * 100;

  function handleMouseDown(which) {
    setDrag(which);
  }

  function handleMouseUp() {
    setDrag(null);
  }

  function handleMouseMove(e) {
    if (!drag) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.type.startsWith("touch")
      ? e.touches[0].clientX
      : e.clientX;
    let percent = clamp((x - rect.left) / rect.width, 0, 1);
    let value = Math.round(percent * (max - min) + min);

    if (drag === "left") {
      value = Math.min(value, right - 1);
      setLeft(value);
      if (onChange) onChange({ minValue: value, maxValue: right });
    } else if (drag === "right") {
      value = Math.max(value, left + 1);
      setRight(value);
      if (onChange) onChange({ minValue: left, maxValue: value });
    }
  }

  React.useEffect(() => {
    if (drag) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("touchend", handleMouseUp);
      };
    }
  });

  const leftPercent = getPercent(left);
  const rightPercent = getPercent(right);

  return (
    <div className="custom-slider-container" ref={sliderRef}>
      <div className="slider-track" />
      <div
        className="slider-range"
        style={{
          left: leftPercent + "%",
          width: rightPercent - leftPercent + "%",
        }}
      />
      <div
        className="slider-thumb"
        style={{ left: leftPercent + "%" }}
        onMouseDown={() => handleMouseDown("left")}
        onTouchStart={() => handleMouseDown("left")}
        tabIndex={0}
      >
        <span className="slider-value">{left}</span>
      </div>
      <div
        className="slider-thumb"
        style={{ left: rightPercent + "%" }}
        onMouseDown={() => handleMouseDown("right")}
        onTouchStart={() => handleMouseDown("right")}
        tabIndex={0}
      >
        <span className="slider-value">{right}</span>
      </div>
    </div>
  );
}

export default RangeFilter;