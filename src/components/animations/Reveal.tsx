"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
