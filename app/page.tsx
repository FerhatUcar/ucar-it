import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderTitle from "@/components/custom/header";

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
      <h2 className="text-2xl font-bold">Software Engineer</h2>
      <div className="flex gap-2 justify-between mt-3">
        <Button>
          <Link href="/contact">Book me</Link>
        </Button>
        <Button variant="secondary">
          <Link href="/about">About me</Link>
        </Button>
      </div>
    </MotionWrapper>
  );
}
