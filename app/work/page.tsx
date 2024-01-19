import { MotionWrapper } from "@/components/motion-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { workInformation } from "@/data/data";

const WorkPage = () => {
  const pageParagraphs = workInformation.map((p, i) => (
    <div key={i} className="flex">
      <div className="flex flex-col min-w-32">
        <div className="text-xs mx-auto mb-2 rounded-md bg-gray-200 dark:bg-rose-900 p-2">2021-2023</div>
        <div className="border-2 border-rose-900 dark:border-white mx-auto h-full"></div>
      </div>
      <Card className="dark:bg-stone-950/50 shadow">
        <CardHeader className="text-gray-700">
          <CardTitle className="dark:text-white">{p.company}</CardTitle>
          <CardDescription>
            {p.place} | {p.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-gray-400">
          <p>{p.text}</p>
          <p>{p.text2}</p>
        </CardContent>
        <CardFooter>
          <p>{p.stack}</p>
        </CardFooter>
      </Card>
    </div>
  ));

  return (
    <MotionWrapper>
      <h1 className="text-6xl font-black mb-3">Work experience.</h1>
      <div className="grid grid-cols-1 gap-4">{pageParagraphs}</div>
    </MotionWrapper>
  );
};

export default WorkPage;
