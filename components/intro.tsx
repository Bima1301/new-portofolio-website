"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import LeftContent from "./Intro/LeftContent";
import RightContent from "./Intro/RightContent";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="md:mb-10 w-full gap-10 text-center sm:mb-0 scroll-mt-[100rem] flex lg:flex-row md:justify-around md:items-center flex-col-reverse"
    >
      <LeftContent />
      <RightContent />
    </section>
  );
}
