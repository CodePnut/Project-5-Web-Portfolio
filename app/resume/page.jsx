"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaRobot,
  FaVideo,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiVite,
  SiAdobephotoshop,
  SiCanva,
  SiWordpress,
  SiMicrosoftword,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: [
    "I pride myself on being someone others can count on—whether it’s meeting deadlines, offering creative solutions, or simply being a trustworthy teammate.",
    "I approach every task with meticulous attention to detail and a positive mindset, always aiming to bring out the best in any situation.",
    "My ambition drives me to continuously learn and grow, not just in my professional life but in everything I do.",
    <br key="br1" />,
    <br key="br2" />,
    "When I’m not immersed in coding, you’ll likely find me on the basketball court 🏀, badminton court 🏸, or taking a refreshing swim 🏊‍♂️.",
    "Sports keep me grounded, fuel my energy, and remind me of the importance of teamwork and persistence.",
    <br key="br3" />,
    <br key="br4" />,
    "I believe in the power of balance—staying active both mentally and physically, and always finding joy in the journey.",
  ],
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Mark Velasquez",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+65) 8087 1453",
    },
    {
      fieldName: "Experience:",
      fieldValue: "6 months web development",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email:",
      fieldValue: "markavel96@outlook.com",
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Available",
    },
  ],
};

// experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Versatile professional with a background in business development and marketing. Transitioned to web development after a General Assembly bootcamp. Experienced in full stack projects, CMS web development, and SEO. Currently freelancing as a Front End Developer, creating responsive interfaces using HTML, CSS, JavaScript, and React.",
  items: [
    {
      company: "Freelance",
      position: "Frontend Developer",
      duration: "2024 - Present",
    },
    {
      company: "General Assembly Australia",
      position: "Full Stack Immersive Student",
      duration: "2024",
    },
    {
      company: "Fiverr (Freelance)",
      position: "CMS Web Developer / SEO",
      duration: "2023 - 2024",
    },
    {
      company: "Saturn Visual Solution Ltd",
      position: "Marketing & Sales Assistant",
      duration: "2022 - 2023",
    },
    {
      company: "ECV Enterprise",
      position: "Business Development Executive",
      duration: "2021 - 2022",
    },
  ],
};

// education data
const education = {
  icons: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Starting in marketing with a BSc and MSc, my curiosity for tech led me to complete full stack programs at Codecademy and General Assembly. This journey transformed me into a versatile developer, blending business acumen with cutting-edge web development skills.",
  items: [
    {
      institution: "General Assembly Australia",
      degree: "Full Stack Immersive Bootcamp",
      duration: "2024",
    },
    {
      institution: "Codecademy",
      degree: "Full Stack Developer Path",
      duration: "2023",
    },
    {
      institution: "Lancaster University",
      degree: "MSc Advanced Marketing Management",
      duration: "2020 - 2021",
    },
    {
      institution: "Newcastle University",
      degree: "BSc (Hons) Marketing and Management",
      duration: "2017 - 2020",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: (
    <>
      <p>
        I am a versatile software developer with a robust skill set spanning
        front-end, back-end, and various other programs. My expertise in
        front-end development includes HTML, CSS, JavaScript, React, Figma,
        Tailwind CSS, Next.js, and Vite.js, enabling me to create responsive,
        user-friendly interfaces. On the back-end, I am proficient in Node.js,
        PostgreSQL, Express.js, and MongoDB, ensuring efficient and scalable
        server-side solutions.
      </p>
      <br />
      <p>
        Additionally, I have experience with tools like Photoshop, Canva,
        Wordpress, MidJourney, Microsoft Word, and Capcut, which enhance my
        ability to design, edit, and manage content effectively. This diverse
        skill set allows me to deliver comprehensive and high-quality web
        development projects that meet and exceed client expectations.
      </p>
    </>
  ),
  frontEndSkills: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Vite.js", icon: <SiVite /> },
    // Add more front-end skills here
  ],
  backEndSkills: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    // Add more back-end skills here
  ],
  otherPrograms: [
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Canva", icon: <SiCanva /> },
    { name: "Wordpress", icon: <SiWordpress /> },
    { name: "Midjourney", icon: <FaRobot /> },
    { name: "Microsoft Word", icon: <SiMicrosoftword /> },
    { name: "Capcut", icon: <FaVideo /> },
    // Add more other programs here
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 x;:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experience"
              className="hover:bg-gray-400 hover:text-black transition-transform duration-300 transform hover:rotate-3 hover:translate-y-1"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="hover:bg-gray-400 hover:text-black transition-transform duration-300 transform hover:rotate-3 hover:translate-y-1"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="hover:bg-gray-400 hover:text-black transition-transform duration-300 transform hover:rotate-3 hover:translate-y-1"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="hover:bg-gray-400 hover:text-black transition-transform duration-300 transform hover:rotate-3 hover:translate-y-1"
            >
              About Me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <h4 className="text-3xl font-semibold">Front-End Stack</h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.frontEndSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 transform group-hover:scale-110">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <h4 className="text-3xl font-semibold">Back-End Stack</h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.backEndSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 transform group-hover:scale-110">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <h4 className="text-3xl font-semibold">Other Programs</h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.otherPrograms.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 transform group-hover:scale-110">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start space-x-3"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
