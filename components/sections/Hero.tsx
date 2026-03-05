"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import Parallax from "@/components/animations/Parallax";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const flavors = [
    { name: "Injera Shiro Bite", time: "7m 20s", kcal: "230 kcal" },
    { name: "Doro Wot Layer", time: "5m 50s", kcal: "280 kcal" },
    { name: "Buna Honey Dessert", time: "6m 35s", kcal: "250 kcal" },
  ];

  useEffect(() => {
    if (!root.current) return;
    const cards = root.current.querySelectorAll("[data-float]");
    gsap.to(cards, {
      y: -12,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      duration: 2.5,
      stagger: 0.16,
    });
  }, []);

  return (
    <section className="pb-16 pt-8 md:pb-20 md:pt-12" ref={root}>
      <Container>
        <div className="rounded-[2.4rem] border border-[#70794f] bg-[#7d8451] p-4 shadow-[0_25px_80px_rgba(23,26,11,0.38)] md:p-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#616942] bg-[radial-gradient(circle_at_55%_30%,#5d7438_0%,#2f4524_50%,#23341c_100%)] px-5 pb-12 pt-6 md:px-8 md:pb-14 md:pt-8">
            <div className="grid-noise absolute inset-0 opacity-30" />
            <Parallax offset={25}>
              <div className="relative z-10 mx-auto max-w-[14rem] rounded-full border border-[#92a272]/70 bg-[#4f6032]/70 p-1 text-center text-xs text-[#efeedf]">
                upload . detect . print
              </div>
            </Parallax>

            <div className="relative z-10 mx-auto mt-8 w-full max-w-3xl">
              <div className="relative mx-auto h-72 w-48 overflow-hidden rounded-[2.4rem] border border-[#d9dfc9]/30 shadow-[0_30px_70px_rgba(7,10,4,0.65)] md:h-96 md:w-60">
                <Image src="/images/hero/matcha-cup.svg" alt="Food printed matcha dessert cup" fill className="object-cover" />
                <div className="absolute inset-x-5 top-3 h-6 rounded-full border border-[#f5f5ed]/35" />
                <div className="absolute inset-x-8 bottom-14 rounded-lg bg-[#f0eddc]/16 px-3 py-1 text-center text-xs tracking-wide text-[#f5f4ec]">
                  Original
                </div>
              </div>

              <div data-float className="absolute left-0 top-24 h-24 w-24 -translate-x-1/4 rotate-[-18deg] overflow-hidden rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32">
                <Image src="/images/hero/berry.svg" alt="Berry ingredient card" fill className="object-cover" />
              </div>
              <div data-float className="absolute left-[16%] top-8 h-24 w-24 rotate-[14deg] overflow-hidden rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32">
                <Image src="/images/hero/strawberry.svg" alt="Strawberry ingredient card" fill className="object-cover" />
              </div>
              <div data-float className="absolute right-[18%] top-10 h-24 w-24 rotate-[-12deg] overflow-hidden rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32">
                <Image src="/images/hero/blueberry.svg" alt="Blueberry ingredient card" fill className="object-cover" />
              </div>
              <div data-float className="absolute right-0 top-24 h-24 w-24 translate-x-1/4 rotate-[17deg] overflow-hidden rounded-3xl border border-[#dfe3cf]/80 bg-[#f4f1e3] shadow-[0_16px_30px_rgba(0,0,0,0.25)] md:h-32 md:w-32">
                <Image src="/images/hero/cherry.svg" alt="Cherry ingredient card" fill className="object-cover" />
              </div>
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-[20rem] -translate-x-1/2 rounded-[100%] bg-[#334726] blur-3xl md:h-36 md:w-[30rem]" />
            </div>

            <div className="relative z-10 mt-12 text-center">
              <Badge>AI Powered Food Printing</Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#f8f7f0] md:text-6xl">Print Ethiopian Food From A Photo</h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-[#e2e0cd] md:text-base">
                Turn dishes like injera rolls, shiro bites, and coffee desserts into real edible prints in minutes with AI recipe generation.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button href="/pricing">Pre-Order Now</Button>
                <Button href="/demo" className="border border-[#d8dcc1] bg-[#5a6438]/60 text-[#f6f5ec] hover:bg-[#657244]">
                  Watch Demo
                </Button>
              </div>
              <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
                {flavors.map((flavor) => (
                  <div key={flavor.name} className="rounded-2xl border border-[#899561] bg-[#4c5736]/80 p-3">
                    <p className="text-sm font-semibold text-[#f6f5ec]">{flavor.name}</p>
                    <p className="mt-1 text-xs text-[#dfdbc6]">Print {flavor.time}</p>
                    <p className="text-xs text-[#dfdbc6]">{flavor.kcal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
