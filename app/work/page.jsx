"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    description:
      "Developed a Star Wars-themed tic-tac-toe game using JavaScript, CSS, and HTML\nImplemented an AI algorithm to enable gameplay against bots.\nIntegrated audio elements to enhance the gaming experience.\nDesigned a user-friendly interface with responsive design.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/image1.png",
    live: "https://codepnut.github.io/Project-1/",
    github: "https://github.com/CodePnut/Project-1",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description: `Created a platform for players to share and like games using JavaScript, CSS, and HTML.
    Utilised 'CRUD' operations for interactive feature development and data management.
    Integrated PostgreSQL for robust SQL database management.
    Ensured seamless user experience without relying on external APIs.`,
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Express.js" },
    ],
    image: "/assets/work/image2.png",
    live: "",
    github: "https://github.com/CodePnut/Project-2-CRUD",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "Developed Epsilon Servo, a web app to locate nearby petrol stations, as part of a group project. Implemented Google Maps API for precise location-based services. Highlighted station features such as stats, favorites, weather, and local time. Utilised Express.js as middleware and PostgreSQL for database management.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Figma" },
      { name: "API" },
    ],
    image: "/assets/work/image3.png",
    live: "",
    github: "https://github.com/angelatolim/epsilon_servo",
  },
  {
    num: "04",
    category: "fullstack",
    title: "project 4",
    description:
      "Built a game library app accessing over 800k games from RAWG.io using TypeScript, React, Chakra UI, and Vite. Developed search functionality and game cards displaying essential details. Enabled quick filtering through sidebar genre icons. Designed for responsive use and optimized performance with caching strategies.",
    stack: [
      { name: "Typescript" },
      { name: "Vite.js" },
      { name: "React" },
      { name: "Chakra UI" },
      { name: "Figma" },
      { name: "API" },
    ],
    image: "/assets/work/image4.png",
    live: "https://mako-zone.vercel.app/",
    github: "https://github.com/CodePnut/Mako-Zone",
  },
  {
    num: "05",
    category: "fullstack",
    title: "project 5",
    description:
      "Developed a personal website portfolio using Next.js and React for a dynamic experience. Tailwind CSS ensured responsive design, while Framer Motion added smooth animations. Implemented backend forms with MongoDB for secure data management, showcasing seamless integration of front-end and back-end technologies.",
    stack: [
      { name: "Next.js" },
      { name: "Framer Motion" },
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "mongoDB" },
    ],
    image: "/assets/work/final-image.png",
    live: "",
    github: "https://github.com/CodePnut/website-portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentSlide = swiper.activeIndex;
    // set project based on current slide
    setProject(projects[currentSlide]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap=[30px]">
          <div className="w-full xl:w-[50%] xl:h[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] pl-4">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove comma if not last item */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] pl-6">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="w-full h-full object-contain md:object-contain lg:object-contain xl:object-fill"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none lg:bottom-0 lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
