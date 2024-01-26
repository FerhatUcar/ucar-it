"use client";

import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeaderTitle from "@/components/custom/header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/") {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }

    return () => {
      document.body.classList.remove("homepage");
    };
  }, [pathName]);

  return (
    <MotionWrapper>
      <Image
        src="/ferry.jpg"
        className="rounded-full w-32 h-32 mb-6 border-solid border-4 border-white"
        alt="ferry"
        width="145"
        height="129"
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
