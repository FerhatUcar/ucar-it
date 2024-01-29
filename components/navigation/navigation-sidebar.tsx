"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/data/data";
import {baseColor} from "@/app/const";

const NavigationSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-stone-950/50 mx-8 hidden md:flex py-1.5 absolute rounded-lg flex-col w-[50px] items-center text-primary translate-y-2/4">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="pb-1 last:pb-0">
          <Button
            key={index}
            className="py-6"
            variant={link.href === pathName ? "outline" : "ghost"}
            size="icon"
          >
            <link.icon color={link.href === pathName ? "#FFF" : baseColor} />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
