import React from "react";
import {
  Briefcase,
  CircleUserRound,
  Home,
  Phone,
  School,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const NavigationSidebar = () => {
  const links = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: CircleUserRound },
    { label: "Education", href: "/education", icon: School },
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "Skills", href: "/skills", icon: BarChart2 },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <div className="mx-8 py-1.5 flex absolute rounded-lg flex-col w-[50px] items-center text-primary translate-y-2/4 dark:bg-[#1E1F22] bg-[#E3E5E8]">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          <Button key={index} className="py-6" variant="ghost" size="icon">
            <link.icon />
          </Button>
        </Link>
      ))}
      <Separator className="h-[2px] my-2 bg-zinc-300 dark:bg-zinc-700 rounded-md w-10" />
      <ModeToggle />
    </div>
  );
};

export default NavigationSidebar;
