"use client";

import { useState } from "react";
import {
  EXPERIENCE_INITIAL_COUNT,
  EXPERIENCE_LOAD_MORE_COUNT,
  workExperiencesData,
} from "@/lib/gavi-data";

export default function WorkExperience() {
  const [visibleCount, setVisibleCount] = useState(EXPERIENCE_INITIAL_COUNT);

  const visibleItems = workExperiencesData.slice(0, visibleCount);
  const hasMore = visibleCount < workExperiencesData.length;
  const canShowLess = visibleCount > EXPERIENCE_INITIAL_COUNT;

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + EXPERIENCE_LOAD_MORE_COUNT, workExperiencesData.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(EXPERIENCE_INITIAL_COUNT);
  };

  return (
    <div className="work-experience mt-100">
      <div className="sec-head mb-60">
        <h6 className="sub-title opacity-7 mb-15">Career Path</h6>
        <h3>
          Work <span className="main-color">Experience</span>
        </h3>
      </div>

      <div className="resume experience-timeline">
        {visibleItems.map((exp) => (
          <div
            key={`${exp.title}-${exp.date}`}
            className="experience-entry gavi-reveal gavi-reveal--visible"
          >
            <div className="row align-items-start">
              <div className="col-lg-3 col-md-4">
                <div className="date">
                  <p className="experience-period">{exp.date}</p>
                  {exp.duration ? (
                    <span className="experience-duration">{exp.duration}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="d-flex align-items-start">
                  <div className="experience-icon">{exp.icon}</div>
                  <div className="flex-grow-1">
                    <h5 className="mb-10">{exp.title}</h5>
                    <p className="fz-14 main-color mb-20">{exp.location}</p>
                    <ul className="rest experience-details">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(hasMore || canShowLess) && (
        <div className="text-center mt-50 d-flex justify-content-center portfolio-actions flex-wrap">
          {hasMore && (
            <div className="butn-presv">
              <button
                type="button"
                className="butn butn-md butn-bord radius-5 skew"
                onClick={handleShowMore}
              >
                <span>Show More</span>
              </button>
            </div>
          )}
          {canShowLess && (
            <div className="butn-presv">
              <button
                type="button"
                className="butn butn-md butn-bord radius-5 skew"
                onClick={handleShowLess}
              >
                <span>Show Less</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
