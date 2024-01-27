"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import axios from "axios";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Field, { selectFieldSubjects } from "@/components/custom/formfield";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { wait } from "next/dist/lib/wait";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { generateCaptcha } from "@/utils/captcha";
import { baseColor } from "@/app/const";
import dynamic from "next/dynamic";
import HeaderTitle from "@/components/custom/header";
import { contactDetails, socialMedia } from "@/data/data";
import Link from "next/link";

const Captcha = dynamic(() => import("@/components/custom/captcha"), {
  ssr: false,
});

type FormDataType = z.infer<typeof formSchema>;

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email(),
  subject: z.string().refine((value) => selectFieldSubjects.includes(value), {
    message: "Select a subject",
  }),
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
      subject: "",
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
        setSubmitting(true);

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
      <HeaderTitle text="Lets chats" />
      <div className="grid grid-col-1 gap-4 lg:grid-cols-4 w-full px-4 lg:px-0">
        <Card className="bg-stone-950/50 shadow lg:col-span-3 p-6 mt-4">
          {error && (
            <Alert className={`mb-4 ${shouldShake && "shake"}`}>
              <AlertCircle className="h-4 w-4" color={baseColor} />
              <AlertTitle>Oops..</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Field form={form} label="name" type="input" />
              <Field form={form} label="email" type="input" />
              <Field form={form} label="subject" type="select" />
              <Field form={form} label="message" type="textarea" />
              <Captcha
                captchaValue={captchaValue}
                userInput={userInput}
                setUserInput={setUserInput}
              />
              <Button
                className="m-0 w-full md:w-[150px] float-right"
                type="submit"
                disabled={isSubmitting}
              >
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
        <Card className="bg-stone-950/50 shadow mt-4">
          <CardHeader className="uppercase pb-3">Information</CardHeader>
          <CardContent className="pb-0">
            {contactDetails.map((detail) => (
              <div
                key={detail.text}
                className="flex flex-row gap-2 mb-4 items-center"
              >
                <detail.icon size={16} color={baseColor} />
                <span>{detail.text}</span>
              </div>
            ))}
          </CardContent>
          <CardHeader className="uppercase pb-2">Lets connect</CardHeader>
          <CardContent className="pb-0 flex justify-center">
            {socialMedia.map((social) => (
              <Button size="icon" variant="ghost" key={social.link}>
                <Link target="_blank" href={social.link}>
                  <social.icon size={16} color={baseColor} />
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </MotionWrapper>
  );
};

export default ContactPage;
