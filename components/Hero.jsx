"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-16 mb-12 xl:mb-0 xl:py-14 h-[85vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8 xl:mx-16">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h2">Hello,</h1>
            <h1 className="h1">I'm Antonius Aston Delfan</h1>
            <div className="h2">
              A{" "}
              <span className="text-primary tracking-[4px]">
                <Typewriter words={["Student", "Web Developer", "Web Designer"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={100} delaySpeed={1500} />
              </span>
            </div>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I am a student at SMK Wira Harapan majoring in RPL, with interests and skills in programming and experience in web development.</p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2 text-white ">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a href="https://drive.google.com/file/d/1pJ3cQlt0SsmpqX92qhB_UJnEKehAH9bJ/view?usp=sharing">
                <Button variant="secondary" className="gap-x-2">
                  Download CV
                  <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[480px] h-[490px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="w-[480px] h-[432px] bg-no-repeat relative bg-bottom" imgSrc='/hero/profile.png' />
          </div>
        </div>
        {/* icon */}
        <div className="hidden xl:flex flex-col absolute left-2/4 bottom-44 xl:bottom-12 amimate-bounce transform transition-transform duration-1000 ease-in-out">
          <a href="#about"><RiArrowDownSLine className="text-3xl text-primary" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
