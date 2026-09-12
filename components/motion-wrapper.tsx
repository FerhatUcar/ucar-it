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
        <main className="flex w-full flex-col items-stretch px-[6%] text-left pt-6 md:px-[5%] md:py-20">
          {children}
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
