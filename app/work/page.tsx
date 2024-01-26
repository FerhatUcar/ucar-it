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
import TimeLine from "@/components/custom/timeline";

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
        <Card className="dark:bg-stone-950/50 shadow lg:mr-0 mr-6">
          <CardHeader className="text-gray-700">
            <CardTitle className="dark:text-white">{p.company}</CardTitle>
            <CardDescription>
              {p.place} | <span className="text-rose-400">{p.title}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col text-gray-400 space-y-2">
            <p>{p.text}</p>
            {p.text2 && <p>{p.text2}</p>}
            {p.text3 && <p>{p.text3}</p>}
            {p.text4 && <p>{p.text4}</p>}
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
      <HeaderTitle text="Work Experience" bottomSpace />
      <div className="grid grid-cols-1 gap-4">
        {pageParagraphs}
        {!hideButton && (
          <div className="flex">
            <div className="flex flex-col min-w-32"></div>
            <Button
              className="mt-3 w-full transition-all lg:mr-0 mr-6"
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
