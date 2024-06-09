"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { GoDotFill } from "react-icons/go";

export default function Experience() {
  const { ref } = useSectionInView("Experiences", 0.3);
  const { theme } = useTheme();
  return (
    <section id="experiences" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 overflow-hidden">
      <SectionHeading>
        <div className="text-start w-fit">
          <p>
            My Experience
          </p>
          <small className="text-xl text-center dark:text-[#a8acd1] text-[#58567d] font-semibold">
            Where I&apos;ve Worked
          </small>
        </div>
      </SectionHeading>
      <VerticalTimeline lineColor="">
        {([...experiencesData].reverse()).map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              // date={<p className="font-normal text-sm px-5 !mt-0">{item.date}</p>}
              date={item.date}
              dateClassName="md:!font-normal !font-bold  !mx-3 !mt-0"
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold text-lg capitalize">{item.title}</h3>
              <p className="font-normal text-sm !mt-0">{item.location}</p>
              {/* <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 py-2">
                {item.description}
              </p> */}
              <ul className="!font-normal text-gray-700 dark:text-white/75 !mt-1 py-2">
                {item.details.map((desc, index) => (
                  <li key={index} className="flex flex-row gap-1">
                    <GoDotFill
                      className="min-w-[1rem] min-h-[1rem] mt-1"
                    />
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
