import React, { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { useIntersection } from "react-use";

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
  const { inView } = useContext(IntersectionContext);
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
            animate={inView ? "show" : "hidden"}
          />
        </svg>
      </div>
    </div>
  );
};

export const Counter = ({
  valueFrom = 0,
  valueTo = 100,
  totalDuration = 3.5,
}) => {
  const { inView } = useContext(IntersectionContext);
  const [count, setCount] = useState(valueFrom);

  useInterval(
    () => {
      if (inView && count < valueTo) {
        setCount(count + 1);
      }
    },
    (totalDuration / valueTo) * 1000,
  );

  return count;
};

export function useInterval(callback: any, delay: any) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const IntersectionContext = React.createContext({ inView: true });

export const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}: any) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  );
};
