"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import ProjectMobile from "./projectMobile";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [visible, setVisible] = React.useState(2);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        <div className="text-start w-fit">
          <p>
            Projects
          </p>
          <small className="text-xl text-center dark:text-[#a8acd1] text-[#58567d] font-semibold">My Work</small>
        </div>
      </SectionHeading>
      <div className="md:block hidden">
        {([...projectsData].reverse()).slice(0, visible).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="md:hidden block">
        {([...projectsData].reverse()).slice(0, visible).map((project, index) => (
          <React.Fragment key={index}>
            <ProjectMobile {...project} />
          </React.Fragment>
        ))}
      </div >
      <div
        className="flex justify-center gap-5"
      >
        <div>
          {visible > 2 && (
            <button
              onClick={() => setVisible((prevValue) => prevValue - 2)}
              className="bg-[#7d7ab1] text-white px-4 py-2 rounded-md mt-5"
            >
              Load Less
            </button>
          )}
        </div>
        <div>
          {visible < projectsData.length && (
            <button
              onClick={() => setVisible((prevValue) => prevValue + 2)}
              className="bg-[#7d7ab1] text-white px-4 py-2 rounded-md mt-5"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section >
  );
}
