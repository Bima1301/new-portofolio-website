"use client"

import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BiPaperPlane } from 'react-icons/bi';
import { HiDownload } from "react-icons/hi";
import { CiLinkedin } from 'react-icons/ci';
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from '@/context/active-section-context';
export default function LeftContent() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <motion.section className='flex flex-col lg:justify-start justify-center lg:max-w-[50%]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <p className='text-[#7d7ab1] font-semibold md:text-xl text-lg origin-bottom -rotate-12 md:w-fit w-full -ms-3 mb-3 md:block hidden'>Hello!</p>
            <div className='md:text-7xl text-xl md:text-start font-semibold md:space-y-10 md:block hidden'>
                <p>We have</p>
                <p>Developing </p>
                <p>Experience</p>
            </div>
            <div className='mt-14 flex flex-row gap-6'>
                <div className='h-1 bg-black dark:bg-white w-10 mt-2' />
                <p className='text-start w-fit max-w-xl'>Hi! My name <span className='font-semibold'>Bima</span>. I&apos;am a Full Stack Developer --- creating responsive and interactive website for personal or companies all acros the world</p>
            </div>
            <motion.div
                className="flex sm:flex-row items-center justify-center md:justify-start gap-2  text-lg font-medium md:mt-14 mt-7"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-[#7d7ab1] text-white md:px-9 px-7 py-3 md:py-6 flex items-center gap-2 rounded-2xl outline-none focus:scale-110 hover:scale-110 hover:bg-transparent hover:border hover:border-[#7d7ab1] hover:text-[#7d7ab1] active:scale-105 transition md:text-base text-sm"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Let&apos;s Talk{" "}
                    <BiPaperPlane size={27} className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                    className="group  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer   md:text-base text-sm"
                    href="/YanuarBimaCV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload size={24} className="opacity-60 group-hover:translate-y-1 transition" />
                </Link>


            </motion.div>
            <div className='flex md:flex-row flex-col  gap-5 md:mt-14 mt-7 items-center'>
                <p>Check Out My</p>
                <div className='flex flex-row items-center justify-around md:w-fit w-full md:justify-start md:gap-4 gap-0 '>
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://linkedin.com"
                        target="_blank"
                    >
                        <CiLinkedin size={28} />
                    </a>

                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://instagram.com"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>

                </div>
            </div>
        </motion.section>
    )
}
