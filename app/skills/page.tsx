"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ProgressCircle } from "@/components/custom/progress-bar";

const headers = [
  {
    title: "React",
    src: "/react.png",
    percents: 99
  },
  {
    title: "TypeScript",
    src: "/ts.png",
    percents: 95
  },
  {
    title: "Next.js",
    src: "/next.png",
    percents: 90
  },
  {
    title: "Tailwind",
    src: "/tailwind.png",
    percents: 98
  },
  {
    title: "Prisma",
    src: "/tailwind.png",
    percents: 78
  },
  {
    title: "Docker",
    src: "/tailwind.png",
    percents: 60
  },
  {
    title: "MySQL",
    src: "/tailwind.png",
    percents: 66
  },
  {
    title: "Cypress",
    src: "/tailwind.png",
    percents: 83
  },
];

const SkillsPage = () => {
  return (
    <MotionWrapper>
      <h1 className="text-6xl font-black mb-6">Skills.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {headers.map(({ src, title, percents }, i) => (
          <Card key={i} className="dark:bg-stone-950/50 shadow">
            <CardHeader className="flex flex-row items-center gap-3 text-gray-700">
              <CardTitle className="dark:text-white flex items-center gap-2">
                <Image src={src} alt={title} width="32" height="32" />
                <span>{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="progress text-gray-400">
              <ProgressCircle percents={percents} />
            </CardContent>
          </Card>
        ))}
      </div>
    </MotionWrapper>
  );
};

export default SkillsPage;
