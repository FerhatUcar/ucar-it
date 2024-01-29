import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderTitle from "@/components/custom/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services } from "@/data/data";
import { baseColor } from "@/app/const";

export default function Home() {
  return (
    <MotionWrapper>
      <Image
        src="/portrait.jpg"
        className="rounded-full w-32 h-32 mb-6 border-solid border-4 border-white"
        alt="ferry"
        width="120"
        height="160"
      />
      <HeaderTitle text="I am Ferhat Ucar" />
      <h2 className="text-2xl font-bold text-gray-400">Software Engineer</h2>
      <div className="flex gap-2 justify-between mt-3 mb-6">
        <Button>
          <Link href="/contact">Book me</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/about">About me</Link>
        </Button>
      </div>
      <div className="my-6">
        <Card className="bg-stone-950/50 shadow p-3 m-4 mb:m-0">
          <h2 className="text-3xl font-bold text-center">Services</h2>
        </Card>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-2 m-4 mb:m-0">
          {services.map((s) => (
            <Card key={s.title} className="bg-stone-950/50 shadow last:mb-6">
              <CardHeader className="flex flex-row gap-3 items-center">
                <s.icon color={baseColor} />
                <span className="font-black" style={{ marginTop: 0 }}>
                  {s.title}
                </span>
              </CardHeader>
              <CardContent className="text-gray-400">{s.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
