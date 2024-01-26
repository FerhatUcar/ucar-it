"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import axios from "axios";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Field from "@/components/custom/formfield";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Captcha } from "@/components/custom/captcha";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { wait } from "next/dist/lib/wait";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { generateCaptcha } from "@/utils/captcha";
import { baseColor } from "@/app/const";

type FormDataType = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(1, {
    message: "Message can't be empty",
  }),
});

const ContactPage = () => {
  const router = useRouter();
  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const [userInput, setUserInput] = useState("");
  const [shouldShake, setShouldShake] = useState(false);

  const inputCorrect = userInput === eval(captchaValue).toString();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (inputCorrect) {
        setCaptchaValue(generateCaptcha());
        setUserInput("");
        setSubmitting(true)

        await wait(2000);

        // await axios.post("/api/contact", values);

        router.push("/thank");
        router.refresh();
      } else {
        setShouldShake(true);
        setError("Please solve the captcha correctly.");
        setTimeout(() => setShouldShake(false), 500);
      }
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <MotionWrapper>
      <h1 className="text-6xl font-black">Lets chat.</h1>

      <Card className="dark:bg-stone-950/50 shadow p-4 m-4 w-[95%] md:w-full">
        {error && (
          <Alert
            className={`mb-4 ${shouldShake && "shake"}`}
          >
            <AlertCircle className="h-4 w-4" color={baseColor} />
            <AlertTitle>Oops..</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <Field form={form} label="name" />
            <Field form={form} label="email" />
            <Field form={form} label="message" isTextarea />
            <Captcha
              captchaValue={captchaValue}
              userInput={userInput}
              setUserInput={setUserInput}
            />
            <Button className="m-0" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex flex-row">
                  <svg className="spinner mr-3" viewBox="0 0 50 50">
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                  Sending email..
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </Card>
    </MotionWrapper>
  );
};

export default ContactPage;
