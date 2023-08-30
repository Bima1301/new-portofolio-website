"use client"

import { projectsData } from '@/lib/data';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { BsGithub } from 'react-icons/bs';
type ProjectProps = (typeof projectsData)[number];
import { CgWebsite } from 'react-icons/cg';

export default function ProjectMobile(
    {
        title,
        description,
        tags,
        imageUrl,
        githubUrl,
        url
    }: ProjectProps
) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div className="max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl mb-3 dark:bg-white/10" ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}>
            <Link target="_blank" href={url} className="h-48 object-cover">
                <Image src={imageUrl} alt="Project Image" />
            </Link>
            <div className="px-6 py-4">
                <Link target="_blank" href={url} className="text-xl font-bold">{title}</Link>
                <div className="flex items-center py-3">
                    <Link target="_blank" href={githubUrl} className="mr-2 rounded-full bg-[#946263] py-1 px-2 flex items-center font-medium text-white aspect-square">
                        <BsGithub />
                    </Link>
                    <Link target="_blank" href={url} className="mr-2 rounded-full bg-[#946263] py-1 px-2 flex items-center font-medium text-white aspect-square">
                        <CgWebsite />
                    </Link>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div className="px-6 pb-5 flex justify-between items-center">
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-[#7d7ab1] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div >
    )
}
