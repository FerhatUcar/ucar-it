"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { workInformation } from "@/data/data";
import { Button } from "@/components/ui/button";
import useHandleMore from "@/hooks/useHandleMore";
import HeaderTitle from "@/components/custom/header";
import { TimeLine } from "@/components/custom/timeline";
import { Download } from "lucide-react";

const WorkPage = () => {
  const initialData = workInformation.slice(0, 3);
  const { data, handleLoadMore, hideButton } = useHandleMore(initialData);

  const pageParagraphs = data.map((p, i) => (
    <div key={i} className="flex">
      <TimeLine date={p.date} months={p.months} />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Card
          className={`bg-stone-950/50 shadow lg:mr-0 mr-6 ml-3 md:mr-6 md:ml-0 ${hideButton && "last:mb-6"}`}
        >
          <CardHeader className="text-gray-700">
            <CardTitle className="text-white">
              <span className="text-xl md:text-3xl">{p.company}</span>
            </CardTitle>
            <CardDescription>
              <span className="text-zinc-300">{p.place} |</span>{" "}
              <span className="text-rose-400">{p.title}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col text-gray-400 space-y-4">
            <p>{p.text}</p>
            {p.text2 && <p>{p.text2}</p>}
            {p.text3 && <p>{p.text3}</p>}
            {p.text4 && <p>{p.text4}</p>}
            {p.text5 && <p>{p.text5}</p>}
          </CardContent>
          <CardFooter>
            <p>{p.stack}</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  ));

  const handleDownload = () => window.open("CV-2024-black.pdf", "_blank");

  return (
    <MotionWrapper>
      <HeaderTitle text="Work Experience" bottomSpace />
      <div className="grid grid-cols-1 gap-4">
        {/*<Card className="bg-stone-950/50 shadow lg:mr-0 mx-6 md:mr-6 p-3 flex items-center gap-4 flex-col md:justify-between md:flex-row">*/}
        {/*  <span>Want to read this on a PDF file?</span>*/}
        {/*  <Button*/}
        {/*    onClick={handleDownload}*/}
        {/*    className="w-full md:w-[200px] flex flex-row gap-2 items-center bg-rose-600 hover:bg-rose-800"*/}
        {/*  >*/}
        {/*    <Download size={18} />*/}
        {/*    <span>Download CV</span>*/}
        {/*  </Button>*/}
        {/*</Card>*/}
        {pageParagraphs}
        {!hideButton && (
          <div className="flex">
            <div className="ml-6 w-[80px] md:ml-0 md:min-w-32"></div>
            <Button
              className="mb-6 w-full transition-all lg:mr-0 mr-6 bg-rose-600 hover:bg-rose-800"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
};

export default WorkPage;
