import React from "react";

const HeaderTitle = ({
  text,
  bottomSpace,
}: {
  text: string;
  bottomSpace?: boolean;
}) => (
  <h1 className={`text-6xl font-black ${bottomSpace && "mb-6"}`}>
    {text}
    <span className="text-rose-600">.</span>
  </h1>
);

export default HeaderTitle;
