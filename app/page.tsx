import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";

export default function Home() {
  return (
    <MotionWrapper>
      <Image
        src="/ferry.jpg"
        className="rounded-full w-32 h-32 mb-6 border-solid border-4 border-white"
        alt="ferry"
        width="145"
        height="129"
      />
      <h1 className="text-6xl font-black">I am Ferhat Ucar</h1>
      <h2 className="text-2xl font-bold">Software Engineer</h2>
    </MotionWrapper>
  );
}
