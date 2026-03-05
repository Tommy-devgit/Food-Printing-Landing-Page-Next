"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Demo() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="Live Demo"
          title="See The Printer In Action"
          description="Watch real-time layer creation with ingredient switching and smooth finishing passes."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-3xl border border-[#727b4c] bg-[#4f5738] p-4 md:p-6"
        >
          <div className="aspect-video rounded-2xl border border-[#6a7348] bg-[radial-gradient(circle_at_30%_30%,#79904f_0%,#314724_55%,#25361d_100%)]" />
        </motion.div>
      </Container>
    </section>
  );
}
