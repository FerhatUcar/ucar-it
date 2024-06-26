"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/data/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { wait } from "next/dist/lib/wait";
import { motion } from "framer-motion";
import Image from "next/image";
import { baseColor } from "@/app/const";

const NavigationMobile = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const handleMenuItem = async () => {
    await wait(250);
    handleMenu();
  };

  return (
    <div className="md:hidden flex flex-row items-center justify-between bg-neutral-950 w-full h-14">
      <div className="flex flex-row items-center gap-2 pl-4 font-black">
        <Image
          src="/portrait.jpg"
          className="rounded-full border-solid border-white"
          alt="ferry"
          width="25"
          height="9"
        />
        <h2>
          Ucar IT<span className="text-rose-600">.</span>
        </h2>
      </div>
      <Button
        variant="ghost"
        className="absolute right-1 top-2"
        onClick={handleMenu}
      >
        <Menu />
      </Button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-neutral-800 fixed inset-0 h-screen p-2 z-20">
            <Button
              variant="ghost"
              className="float-right mb-1"
              onClick={handleMenu}
            >
              <CloseIcon />
            </Button>
            {links.map(({ href, icon: Icon, label }) => (
              <Link href={href} key={href} onClick={handleMenuItem}>
                <Button
                  className="py-4 flex flex-row items-center gap-2 w-full h-32 hover:bg-neutral-700"
                  variant={href === pathName ? "outline" : "ghost"}
                  size="icon"
                >
                  <Icon color={baseColor} />
                  <h2 className="uppercase text-xl font-black">{label}</h2>
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavigationMobile;
