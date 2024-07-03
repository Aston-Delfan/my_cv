"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "HTML, Boostrap",
    name: "Portfolio Website",
    description: "This is my first portfolio website that uses the Bootstrap framework.",
    link: "https://portfolio-first-2kqwe5tsc-aston-delfans-projects.vercel.app",
    github: "https://github.com/Aston-Delfan/portfolio-first.git",
  },
  {
    image: "/work/2.png",
    category: "HTML, Boostrap, PHP, MySQL",
    name: "School Website",
    description: "This is a school website for entering student, teacher, and department data.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Java, MySQL",
    name: "Student Website",
    description: "This is a Java program for entering student data using Java and MySQL.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut quisquam aspernatur a ducimus, aliquam, tenetur dicta ab vel vero</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only 4 project for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
