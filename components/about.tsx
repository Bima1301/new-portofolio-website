"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-6xl w-full leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <div className="text-start w-fit">
          <p>
            About me
          </p>
          <small className="text-xl text-center dark:text-[#a8acd1] text-[#58567d] font-semibold">My Story</small>
        </div>
      </SectionHeading>
      <div className=" flex  md:gap-5 flex-col">
        <div className="text-center">
          <p className="mb-3">
            As a senior student majoring in{" "}
            <span className="font-medium">Information Technology</span> at Brawijaya University, I became proficient in{" "}
            <span className="font-medium">Laravel, ReactJs, NextJs</span>, and other technologies.{" "}
            <span className="italic">I&apos;m particularly drawn to problem-solving</span>. I find immense satisfaction in successfully unraveling complex issues. I&apos;m also experienced with TypeScript and Prisma. I&apos;m always enthusiastic about embracing new technologies. Currently, I&apos;m actively seeking a{" "}
            <span className="font-medium">full-time software developer position</span>.
          </p>

          <p>
            <span className="italic">Outside the coding realm</span>, my interests span from indulging in video games and movies to{" "}
            <span className="font-medium">exploring new horizons</span>. Presently, I&apos;m delving into the realms of{" "}
            <span className="font-medium">history and philosophy</span>. I&apos;m also in the process of learning to play the piano.
          </p>


        </div>
        <div className="flex md:flex-row md:justify-around flex-col md:gap-10 max-w-6xl mt-12">
          <div>
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3">
              AGE :
              <span className="text-black dark:text-white ms-3 text-base">21</span></p>
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3"> GENDER
              :<span className="text-black dark:text-white ms-3 text-base">MALE</span></p>
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3"> PHONE
              :<span className="text-black dark:text-white ms-3 text-base">+6282264692531</span></p>
          </div>

          <div className="ms-lg-5 " id="educate">
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3"> ADDRESS
              :<span className="text-black dark:text-white ms-3 text-base">Tulungagung, Jawatimur</span></p>
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3">
              RECIDENCE :<span className="text-black dark:text-white ms-3 text-base">INA</span></p>
            <p className="dark:text-[#a8acd1] text-[#58567d] font-semibold md:text-xl text-lg md:mb-7 mb-3"> EMAIL
              :<span className="text-black dark:text-white ms-3 text-base">bima.aji1380@gmail.com</span></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
