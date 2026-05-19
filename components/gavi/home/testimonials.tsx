"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error swiper v8 module resolution with Next 13
import { Navigation } from "swiper";
import { testimonialsData } from "@/lib/gavi-data";
import "swiper/css";

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
};

export default function Testimonials() {
  return (
    <div className="sec-box testimonials section-padding">
      <div className="pad-left">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-7">
              <h6 className="sub-title opacity-7 mb-15">Testimonials</h6>
              <h3>
                Trusted by <span className="main-color">Teams & Clients</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="testim-swiper">
              <Swiper id="content-carousel-container-unq-testim" className="swiper-container" {...swiperOptions}>
                {testimonialsData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="icon-img-60 mr-60">
                        <img src="/assets/imgs/svg-assets/quote.png" alt="" />
                      </div>
                      <div>
                        <div className="cont mb-30">
                          <div className="d-flex align-items-center">
                            <div className="rate-stars fz-12">
                              <span className="rate main-color">
                                {Array.from({ length: item.rating }).map((_, j) => (
                                  <i key={j} className="fas fa-star" />
                                ))}
                              </span>
                            </div>
                          </div>
                          <p className="fz-20 mt-15">{item.quote}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="img">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6 className="main-color">{item.name}</h6>
                              <span className="fz-13 mt-10 opacity-8">{item.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end justify-content-end">
            <div className="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto">
              <div className="swiper-button-prev" role="button" aria-label="Previous slide">
                <span className="left">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="swiper-button-next ml-50" role="button" aria-label="Next slide">
                <span className="right">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="icon-qoute"><i className="fas fa-quote-left" /></span>
    </div>
  );
}
