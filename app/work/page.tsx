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

const WorkPage = () => {
  const initialData = workInformation.slice(0, 3);
  const { data, handleLoadMore, hideButton } = useHandleMore(initialData);

  const pageParagraphs = data.map((p, i) => (
    <div key={i} className="flex">
      <div className="flex flex-col min-w-32">
        <div className="text-xs mx-auto mb-2 rounded-md bg-gray-200 dark:bg-rose-900 p-2 flex flex-col text-center">
          <span>{p.date}</span>
          <span>{p.months}</span>
        </div>
        <div className="border-2 border-rose-900 dark:border-white mx-auto h-full"></div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Card className="dark:bg-stone-950/50 shadow">
          <CardHeader className="text-gray-700">
            <CardTitle className="dark:text-white">{p.company}</CardTitle>
            <CardDescription>
              {p.place} | {p.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col text-gray-400 space-y-2">
            <p>{p.text}</p>
            <p>{p.text2}</p>
            <p>{p.text3}</p>
            <p>{p.text4}</p>
          </CardContent>
          <CardFooter>
            <p>{p.stack}</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  ));

  return (
    <MotionWrapper>
      <h1 className="text-6xl font-black mb-6">Work experience.</h1>
      <div className="grid grid-cols-1 gap-4">
        {pageParagraphs}
        {!hideButton && (
          <div className="flex">
            <div className="flex flex-col min-w-32"></div>
            <Button className={`mt-3 w-full`} onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
};

export default WorkPage;
