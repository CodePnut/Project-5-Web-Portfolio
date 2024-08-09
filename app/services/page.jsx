"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Harnessing my expertise as a software developer, I create high-quality, responsive websites tailored to your needs. Leveraging modern technologies like HTML5, CSS3, JavaScript, React, and Node.js, I ensure your site is not only visually appealing but also functional and user-friendly.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design and build state-of-the-art, functional user interfaces that enhance user experience. Using Figma and advanced AI design tools, I craft intuitive and visually engaging designs that captivate and delight users, ensuring seamless navigation and interaction.",
  },
  {
    num: "03",
    title: "Brand Logo Design",
    description:
      "I create eye-catching brand logos that make a lasting impression. Utilising AI tools like MidJourney and Leonardo AI, along with Adobe Photoshop and Canva, I deliver unique, lucrative logo designs that perfectly represent your brand identity and stand out in the market.",
  },
  {
    num: "04",
    title: "Marketing & SEO",
    description:
      "Maximise your online presence with my expert marketing and SEO services. Specialising in eCommerce optimisation, I enhance your product titles, descriptions, and overall SEO to drive traffic and boost sales. My copywriting skills ensure your content is compelling and effective, turning visitors into loyal customers.",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link
                    href={service.href || "/"}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
