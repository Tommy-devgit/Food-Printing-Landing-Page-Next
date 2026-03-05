"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  offset?: number;
};

export default function Parallax({ children, offset = 40 }: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
