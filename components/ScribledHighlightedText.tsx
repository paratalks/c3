import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScribledHighlightedText = ({
  textInput,
  path = "M131.557 10.3436C104.591 -3.33072 52.7375 -1.01729 26.121 10.9484C13.9991 16.398 -8.35323 32.1883 5.24827 47.0964C7.64722 49.7259 10.5633 51.8621 13.5803 53.7106C46.7836 74.053 93.0937 71.9813 128.728 59.8094C134.043 57.9941 139.273 55.839 144.084 52.9101C147.682 50.7195 151.161 48.0043 153.964 44.8357C162.167 35.5597 160.024 26.2246 151.198 18.3605C140.965 9.2427 126.972 6.41714 113.768 4.8697C102.223 3.51661 90.6915 3.25678 79.0913 3.80902C57.3358 4.84456 32.2641 6.49229 14.0177 18.958C6.04817 24.4028 -2.51407 36.0375 4.31726 45.4541C11.7199 55.6581 29.1745 58.9621 40.9145 61.1153C72.5857 66.9243 122.698 64.0439 151.546 48.8004C154.657 47.1565 157.809 45.6246 160.592 43.4629C162.791 41.7549 164.896 39.8073 166.723 37.6995C179.666 22.7622 150.784 13.3702 140.598 11.7573C108.554 6.68344 61.1281 -0.638734 31.6176 12.8588",
  scrible = true,
  ...props
}: {
  textInput: string;
  scrible?: boolean;
  path?: any;
}) => {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    setSmallScreen(window.innerWidth < 1200);
  }, []);
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 1.5,
            bounce: 0,
            repeat: Infinity,
          },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <span className={" relative bg-primary px-1 text-white rounded-xl"}>
      <motion.svg
        initial="hidden"
        animate="visible"
        width={400}
        height={100}
        fill="none"
        className={`absolute -top-2 -left-2`}
        {...props}
      >
        <motion.path
          d={`${smallScreen ? "" : path}`}
          stroke="white"
          stroke-width="0.873615"
          stroke-miterlimit="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={draw}
        />
      </motion.svg>
      {textInput}
    </span>
  );
};
export default ScribledHighlightedText;
