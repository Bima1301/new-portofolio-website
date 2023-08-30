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
            After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
          </p>

          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my dog. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">history and philosophy</span>. I'm also
            learning how to play the guitar.
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
