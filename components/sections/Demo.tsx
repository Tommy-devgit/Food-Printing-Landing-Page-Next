"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Demo() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Live Demo"
          title="See The Printer In Action"
          description="Watch real-time layer creation with teff blends, berbere sauces, and smooth finishing passes."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-3xl border border-[#727b4c] bg-[#4f5738] p-4 md:p-6"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-[#6a7348]">
            <Image
              src="/images/demo/print-process.svg"
              alt="Food printer demo process visualization"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#687349] bg-[#59643c] p-3">
            <p className="text-sm text-[#f5f3e8]">Current print: Mini Injera Shiro Stack | 68% complete</p>
            <Button href="/contact" className="px-4 py-2 text-xs">
              Request Live Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
