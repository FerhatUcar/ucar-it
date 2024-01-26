import React from "react";
import { MotionWrapper } from "@/components/motion-wrapper";
import HeaderTitle from "@/components/custom/header";

const ThankPage = () => {
  return (
    <MotionWrapper>
      <HeaderTitle text="Thanks" />
      <h2 className="text-2xl font-bold">I will get back 2 you soon!</h2>
    </MotionWrapper>
  );
};

export default ThankPage;
