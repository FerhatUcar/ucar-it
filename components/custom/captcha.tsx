import React, { Dispatch, FC, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { baseColor } from "@/app/const";
import { Bot } from "lucide-react";

type CaptchaProps = {
  captchaValue: string;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
};

const Captcha: FC<CaptchaProps> = ({
  captchaValue,
  userInput,
  setUserInput,
}) => {
  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <div className="flex flex-row gap-2 mb-2 text-white items-center">
        <Bot size={20} color={baseColor} />
        <span>Are you a human?</span>
      </div>
      <div className="flex flex-row items-center">
        <label className="w-[100px]">{captchaValue} =</label>
        <Input type="text" value={userInput} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Captcha;
