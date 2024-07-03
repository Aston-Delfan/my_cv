"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Boostrap",
    name: "Portfolio Website",
    description: "This is my first portfolio website that uses the Bootstrap framework.", 
    link: "https://portfolio-first-2kqwe5tsc-aston-delfans-projects.vercel.app",
    github: "https://github.com/Aston-Delfan/portfolio-first.git",
  },
  {
    image: "/work/2.png",
    category: "PHP",
    name: "School Website",
    description: "This is a school website for entering student, teacher, and department data.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Java",
    name: "Student Website",
    description: "This is a Java program for entering student data using Java and MySQL.",
    link: "/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = ["all projects", ...new Set(projectData.map((project) => project.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  console.log(filterProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {filterProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
