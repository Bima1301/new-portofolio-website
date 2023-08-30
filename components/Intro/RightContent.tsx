"use client"

import Image from 'next/image'
import React from 'react'
import imgProfile from '@/public/yanuarBima.png'
import { motion } from 'framer-motion'

export default function RightContent() {
    return (
        <motion.section className='h-full flex flex-row relative lg:w-[50%] w-full lg:justify-start justify-center' initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <div className='md:w-fit w-full h-fit md:block flex flex-row justify-center gap-4 items-center'>
                <div className='md:hidden block '>
                    <p className='text-[#7d7ab1] font-semibold md:text-xl text-lg origin-bottom -rotate-12 md:w-fit w-full -ms-10 -mb-1 '>Hello!</p>
                    <div className='md:text-7xl text-xl text-start font-semibold md:space-y-10 '>
                        <p>We have</p>
                        <p>Developing </p>
                        <p>Experience</p>
                    </div>
                </div>
                <div className='bg-[#7d7ab1] rounded-full md:px-10 overflow-hidden md:py-20 md:w-[380px] md:h-[580px] h-52 w-32 relative xl:ms-32  me-0'>
                    <motion.div
                        className='md:absolute left-10 bottom-0 z-[99]'
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                    >
                        <Image
                            src={imgProfile}
                            height="550"
                            quality="95"
                            alt='Bima'
                        />
                    </motion.div>
                </div>
                <div className='absolute -right-20   origin-bottom -rotate-90 md:hidden flex'>
                    <div className='h-fit flex flex-row items-center  w-fit'>
                        <p className='w-fit h-fit text-xs text-gray-400'>Scroll Down</p>
                        &nbsp;
                        &nbsp;
                        <div className='w-3 h-[1px] bg-gray-400' />
                        &nbsp;
                        &nbsp;
                        <div className='w-10 h-[1px] bg-gray-400' />
                    </div>
                </div>
            </div>
            <div className='absolute -right-48 bottom-52 origin-bottom -rotate-90 md:flex hidden'>
                <div className='h-fit flex flex-row items-center w-fit'>
                    <p className='w-fit h-fit'>Scroll Down</p>
                    &nbsp;
                    &nbsp;
                    <div className='w-10 h-[1px] bg-gray-400' />
                    &nbsp;
                    &nbsp;
                    <div className='w-52 h-[1px] bg-gray-400' />
                </div>
            </div>
            <p className='absolute md:flex hidden font-semibold md:-right-10 right-0'>
                &quot;Coding harmony, crafting <br /> fullstack digital experiences.&quot;
            </p>
        </motion.section>
    )
}
