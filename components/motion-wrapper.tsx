"use client";

import { AnimatePresence, motion } from "framer-motion";

type WrapperProps = {
  children: React.ReactNode;
};
export function MotionWrapper({ children }: WrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <main className="flex flex-col m-auto items-center w-[75%] xl:w-[65%] py-20">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
