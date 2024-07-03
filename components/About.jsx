import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Antonius Aston Delfan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+6281 3380 88787",
  },
  {
    icon: <MailIcon size={20} />,
    text: "astondelfan@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 19 August, 2006",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Jln. Poh Gading, No. 03, Dawas, Kuta Utara, Badung, Bali",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "SMP Wana Murni",
        years: "2019 - 2022",
      },
      {
        school: "SMK Wira Harapan",
        years: "2022 - Today",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        titleData: "Creating a Portfolio Website",
        explanation: "Create a portfolio website using HTML and CSS",
      },
      {
        titleData: "Creating a CRUD Application",
        explanation: "Create a student data CRUD application using basic JAVA and MySQL",
      },
      {
        titleData: "Creating a Data Website",
        explanation: "Create a student and major data website with Input, View, Delete, and Edit features using basic PHP",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pd-12 xl:py-24 mb-16 xl:mb-0 pt-2" id="about">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mg-16 xl:mb-12 text-center mx-auto">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="flex flex-1 relative justify-center items-center">
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[355px] h-[355px] xl:w-[455px] xl:h-[455px] rounded-full bg-no-repeat relative" imgSrc="/about/developer.png" />
          </div>
          {/* tabs */}
          <div className="flex-1 mt-8 xl:mt-0">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:xl:border-none ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualifications
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Learn about coding over 2 years</h3>
                    <p className="subtitle max-w-xl xl:mx-0">I create a website for task, school work, and for fun</p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages Skill</div>
                      <div className="border-b border-border"></div>
                      <div className="">Indonesia, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8">My Awesome Journey</h3>
                    {/* experience and education wrapper */}
                    <div className="grid xl:grid-cols-2 gap-y-8 gap-x-12">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "experience").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { titleData, explanation } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{titleData}</div>
                                  <div className="text-lg  leading none text-muted-foreground mb-4">{explanation}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "education").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { school, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{school}</div>
                                  <div className="text-lg  leading none text-muted-foreground mb-4">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
