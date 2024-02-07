import React from "react";
import RainbowText from "@/components/custom/rainbowText";

const HeaderTitle = ({
  text,
  bottomSpace,
  rainbowText,
  fadeIn,
}: {
  text?: string;
  rainbowText?: string;
  bottomSpace?: boolean;
  fadeIn?: boolean;
}) => (
  <h1
    className={`text-4xl md:text-6xl font-black ${bottomSpace && "mb-6"} ${fadeIn && "fadeIn"}`}
  >
    {text && text}
    {rainbowText && <RainbowText text={rainbowText} />}
    <span className="text-rose-600 bounce">.</span>
  </h1>
);

export default HeaderTitle;
