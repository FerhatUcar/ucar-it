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

const MobileNavigation = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const handleMenuItem = async () => {
    await wait(250);
    handleMenu();
  };

  return (
    <div className="flex flex-row items-center justify-between bg-neutral-950 w-full h-14">
      <div className="flex flex-row items-center gap-2 pl-4">
        <Image
          src="/ferry.jpg"
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
        className="fixed right-1 top-2"
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
          <div className="md:hidden bg-neutral-800 fixed inset-0 h-screen p-2 z-20">
            <Button
              variant="ghost"
              className="float-right"
              onClick={handleMenu}
            >
              <CloseIcon />
            </Button>
            <div>
              {links.map((link, index) => (
                <Link key={index} href={link.href} onClick={handleMenuItem}>
                  <Button
                    key={index}
                    className="py-6 flex flex-row items-center gap-2 w-full h-32 hover:bg-neutral-700"
                    variant={link.href === pathName ? "outline" : "ghost"}
                    size="icon"
                  >
                    <link.icon />
                    <h2>{link.label}</h2>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
