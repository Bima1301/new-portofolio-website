"use client";

import { useState } from "react";
import {
  PORTFOLIO_INITIAL_COUNT,
  PORTFOLIO_LOAD_MORE_COUNT,
  portfolioData,
} from "@/lib/gavi-data";

const ArrowSvg = () => (
  <svg
    className="arrow-right"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 34.2 32.3"
    style={{ strokeWidth: 2 }}
  />
);

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_INITIAL_COUNT);

  const visibleItems = portfolioData.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioData.length;
  const canShowLess = visibleCount > PORTFOLIO_INITIAL_COUNT;

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + PORTFOLIO_LOAD_MORE_COUNT, portfolioData.length)
    );
  };

  const handleShowLess = () => {
    setVisibleCount(PORTFOLIO_INITIAL_COUNT);
  };

  return (
    <div className="sec-box portfolio section-padding" data-scroll-index="3">
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-12">
            <h6 className="sub-title opacity-7 mb-15">My Portfolio</h6>
            <h3>
              Look at my work &{" "}
              <span className="main-color">give your feedback</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="portfolio-grid">
        <div className="row">
          {visibleItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="col-lg-6 col-md-6 items"
            >
              <div className="item mt-50">
                <div className="img">
                  {item.hasLink ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.photo} alt={item.title} />
                    </a>
                  ) : (
                    <img src={item.photo} alt={item.title} />
                  )}
                </div>
                <div className="cont mt-30 d-flex align-items-start">
                  <div className="portfolio-item-body flex-grow-1">
                    <div className="portfolio-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={`${item.title}-${tag}-${tagIndex}`} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h6 className="line-height-1 mb-15">
                      {item.hasLink ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </h6>
                    <p className="portfolio-desc fz-14 opacity-8">
                      {item.description}
                    </p>
                  </div>
                  {item.hasLink && (
                    <div className="ml-auto flex-shrink-0">
                      <div className="arrow">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${item.title}`}
                        >
                          <ArrowSvg />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
