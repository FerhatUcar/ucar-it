import { MotionWrapper } from "@/components/motion-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AboutParagraphs } from "@/data/data";
import { baseColor } from "@/app/const";
import HeaderTitle from "@/components/custom/header";

const AboutPage = () => {
  const pageParagraphs = AboutParagraphs.map((p, i) => (
    <Card key={i} className="dark:bg-stone-950/50 shadow">
      <CardHeader className="flex flex-row items-center gap-3">
        <p.icon color={baseColor} />
        <div className="text-gray-700">
          <CardTitle className="dark:text-white">{p.title}</CardTitle>
          <CardDescription>{p.desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-gray-400">
        <p>{p.text}</p>
      </CardContent>
    </Card>
  ));

  return (
    <MotionWrapper>
      <HeaderTitle text="About me" bottomSpace />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {pageParagraphs}
      </div>
    </MotionWrapper>
  );
};

export default AboutPage;
