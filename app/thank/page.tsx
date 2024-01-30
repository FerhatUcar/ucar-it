import React from "react";
import { MotionWrapper } from "@/components/motion-wrapper";
import HeaderTitle from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ThankPage = () => {
  return (
    <MotionWrapper>
      <HeaderTitle text="Thanks" />
      <h2 className="text-2xl font-bold">I will get back 2 you soon!</h2>
      <div className="flex gap-2 justify-between mt-3">
        <Button className="bg-rose-600 hover:bg-rose-800">
          <Link href="/">Back to home</Link>
        </Button>
        <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">
          <Link href="/contact">Another message?</Link>
        </Button>
      </div>
    </MotionWrapper>
  );
};

export default ThankPage;
