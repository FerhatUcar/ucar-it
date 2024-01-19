import { useState } from "react";
import { workInformation } from "@/data/data";
import { WorkDataType } from "@/app/types";

const useHandleMore = (initialData: WorkDataType[]) => {
  const [data, setData] = useState(initialData);
  const [hideButton, setHideButton] = useState(false);

  const handleLoadMore = () => {
    const remainingData = workInformation.slice(
      data.length,
      data.length + 8,
    );

    setData((prev) => [...prev, ...remainingData]);
    setHideButton(true);
  };

  return {
    hideButton,
    handleLoadMore,
    data,
  };
};

export default useHandleMore;
