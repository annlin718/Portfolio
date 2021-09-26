import React from "react";
import { Tween } from "react-gsap";

const Circle = () => {
  return (
    <>
      <svg
        className="ImgCircle"
        viewBox="-60 -60 120 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="radialGradient"
            cx="0.7"
            cy="0.7"
            r="0.7"
            fx="0.4"
            fy="0.4"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#FF0080" stopOpacity="1" />
            <stop offset="30%" stopColor="#EB6447" stopOpacity="1" />
            <stop offset="50%" stopColor="#FF00FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#D9006C" stopOpacity="1" />
          </radialGradient>
        </defs>
        <Tween
          from={{
            svgDraw: 0,
          }}
          to={{
            svgDraw: 1.1,
          }}
        >
          <circle
            r="55"
            stroke="url(#radialGradient)"
            strokeWidth="2"
            fill="transparent"
          />
        </Tween>
      </svg>
    </>
  );
};

export default Circle;
