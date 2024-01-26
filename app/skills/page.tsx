"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ProgressCircle } from "@/components/custom/progress-bar";
import HeaderTitle from "@/components/custom/header";

const headers = [
  {
    title: "React",
    src: "/react.png",
    percents: 99,
  },
  {
    title: "Angular",
    src: "/angular.png",
    percents: 70,
  },
  {
    title: "Node.js",
    src: "/node.png",
    percents: 77,
  },
  {
    title: "Python",
    src: "/python.png",
    percents: 35,
  },
  {
    title: "TypeScript",
    src: "/ts.png",
    percents: 95,
  },
  {
    title: "Next.js",
    src: "/next.png",
    percents: 90,
  },
  {
    title: "Tailwind",
    src: "/tailwind.png",
    percents: 98,
  },
  {
    title: "Prisma",
    src: "/prisma.png",
    percents: 78,
  },
  {
    title: "Docker",
    src: "/docker.png",
    logoWidth: 50,
    percents: 60,
  },
  {
    title: "MySQL",
    src: "/sql.png",
    logoWidth: 50,
    percents: 66,
  },
  {
    title: "Echarts",
    src: "/echarts.png",
    percents: 95,
  },
  {
    title: "Cypress",
    src: "/cypress.png",
    percents: 83,
  },
];

const SkillsPage = () => (
  <MotionWrapper>
    <HeaderTitle text="Skills" bottomSpace />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:w-auto w-full px-8">
      {headers.map(({ src, title, percents, logoWidth }) => (
        <Card key={title} className="bg-stone-950/50">
          <CardHeader className="flex flex-row items-center gap-3 text-gray-700">
            <CardTitle className="dark:text-white flex items-center gap-2">
              <Image
                src={src}
                alt={title}
                width={logoWidth ?? "32"}
                height="32"
              />
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

export default SkillsPage;
