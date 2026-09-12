import React, { Dispatch, FC, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { baseColor } from "@/app/const";
import { Bot } from "lucide-react";

type CaptchaProps = {
  captchaValue: string;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  error?: string;
};

const Captcha: FC<CaptchaProps> = ({
  captchaValue,
  userInput,
  setUserInput,
  error,
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
        <span>Quick check</span>
      </div>
      <div className="flex flex-row items-center">
        <label htmlFor="captcha-answer" className="w-[100px]">{captchaValue} = <span className="sr-only">Your answer</span></label>
        <Input id="captcha-answer" type="text" inputMode="numeric" autoComplete="off" required value={userInput} onChange={handleInputChange} aria-invalid={!!error} aria-describedby={error ? "captcha-error" : undefined} />
      </div>
      {error && <p id="captcha-error" role="alert" className="mt-2 text-xs text-rose-300">{error}</p>}
    </div>
  );
};

export default Captcha;
