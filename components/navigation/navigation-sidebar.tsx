"use client";

import React from "react";
import {
  Briefcase,
  CircleUserRound,
  Home,
  Phone,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationSidebar = () => {
  const pathName = usePathname();
  const links = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: CircleUserRound },
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "Skills", href: "/skills", icon: BarChart2 },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="mx-8 hidden md:flex py-1.5 absolute rounded-lg flex-col w-[50px] items-center text-primary translate-y-2/4 dark:bg-[#1E1F22] bg-gray-100">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          <Button
            key={index}
            className="py-6"
            variant={link.href === pathName ? "outline" : "ghost"}
            size="icon"
          >
            <link.icon />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
