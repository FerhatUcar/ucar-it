"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ProgressCircle } from "@/components/custom/progress-bar";
import HeaderTitle from "@/components/custom/header";
import { skills } from "@/data/data";

const SkillsPage = () => (
  <MotionWrapper>
    <HeaderTitle text="Skills" bottomSpace />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:w-auto w-full px-8">
      {skills.map(({ src, title, percents, logoWidth }) => (
        <Card key={title} className="bg-stone-950/50 last:mb-6">
          <CardHeader className="flex flex-row items-center gap-3 text-gray-700">
            <CardTitle className="text-white flex items-center gap-2">
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
