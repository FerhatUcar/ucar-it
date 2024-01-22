import React from "react";

import { motion } from "framer-motion";
import { Counter } from "@/components/custom/counter";

export const ProgressCircle = ({
  percents,
  stroke = "#c20050",
  emptyStroke = stroke,
  emptyStrokeOpacity = 0.25,
  duration = 1,
  delay = 0.5,
  size = 100,
  strokeWidth = 6,
}: any) => {
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100)),
  );

  const transition = {
    duration: duration,
    delay: delay,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <div className="relative">
      <div className="absolute top-[38px] left-[70px] flex justify-center">
        <Counter valueTo={percents} totalDuration={duration + delay} />%
      </div>
      <div className="relative flex justify-center">
        <svg
          viewBox="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle"
            strokeWidth={strokeWidth}
            stroke={emptyStroke}
            strokeOpacity={emptyStrokeOpacity}
            fill="transparent"
          />
        </svg>
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          style={{
            position: "absolute",
            top: 0,
            transform: "rotate(-90deg)",
            overflow: "visible",
          }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            stroke={stroke}
            fill="transparent"
            strokeDashoffset={fillPercents}
            strokeDasharray={circumference}
            variants={variants}
            initial="hidden"
            animate="show"
          />
        </svg>
      </div>
    </div>
  );
};
