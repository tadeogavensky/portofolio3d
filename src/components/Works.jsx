import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { github, external } from "../assets";
import Layout from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  image,
  index,
  source_code_link,
  name,
  description,
  tags,
  live
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="name"
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 gap-3 card-img_hover">
            <div
              onClick={() => {
                window.open(live, "blank");
              }}
              className="black-gradient w-10 h-10 full flex justify-center items-center rounded-full cursor-pointer"
            >
              <img
                src={external}
                alt="Github"
                className="w-[65%] h-[65%] object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(source_code_link, "blank");
              }}
              className="black-gradient w-10 h-10 full flex justify-center items-center rounded-full cursor-pointer"
            >
              <img
                src={github}
                alt="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          How am I changing the world?
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Have a glance of my projects that showcases my skills and experience.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </>
  );
};

export default Layout(Works, "works");
