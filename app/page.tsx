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
      <HeaderTitle fadeIn text="I am " rainbowText="Ferhat Ucar" />
      <h2 className="text-1xl font-black tracking-widest uppercase text-gray-300 fadeIn">
        Software Engineer
      </h2>
      <div className="flex gap-2 justify-between mt-6 mb-6">
        <Button className="bg-rose-600 hover:bg-rose-800">
          <Link href="/contact">Book me</Link>
        </Button>
        <Button className="bg-zinc-800 hover:bg-zinc-700">
          <Link href="/about">About me</Link>
        </Button>
      </div>
      <div className="my-6">
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-2 m-4 mb:m-0">
          {services.map((s) => (
            <Card key={s.title} className="bg-stone-950 shadow">
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
