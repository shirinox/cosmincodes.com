"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const FadeInContainer = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInContainer;
