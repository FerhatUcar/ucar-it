import { MotionWrapper } from "@/components/motion-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AboutParagraphs } from "@/data/data";
import { baseColor } from "@/app/const";
import HeaderTitle from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Link as WebLink } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const pageParagraphs = AboutParagraphs.map((p, i) => (
    <Card key={i} className="bg-stone-950/50 shadow last:mb-6">
      <CardHeader className="flex flex-row items-center gap-3">
        <p.icon color={baseColor} />
        <div className="text-gray-700">
          <CardTitle className="text-white">{p.title}</CardTitle>
          <CardDescription>{p.desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent
        className={`text-gray-400 ${p.image && "flex flex-col md:mr-4 md:flex-row gap-2"}`}
      >
        {p.image && (
          <Image
            src={p.image}
            className="mx-auto mb-3 md:mr-4 w-32 h-32 rounded-full border-solid border-4 border-white"
            alt={p.title}
            width="120"
            height="160"
          />
        )}
        <p>{p.text}</p>
      </CardContent>
      {p.links && (
        <CardFooter className="flex flex-row gap-2">
          <Button>
            <Link
              className="flex flex-row gap-2 items-center"
              target="_blank"
              href="https://www.instagram.com/ferrygraphy/"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </Link>
          </Button>
          <Button variant="secondary">
            <Link
              className="flex flex-row gap-2 items-center"
              target="_blank"
              href="https://www.ferrygraphy.nl/"
            >
              <WebLink size={16} />
              <span>Website</span>
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  ));

  return (
    <MotionWrapper>
      <HeaderTitle text="About me" bottomSpace />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6 lg:mx-0">
        {pageParagraphs}
      </div>
    </MotionWrapper>
  );
};

export default AboutPage;
