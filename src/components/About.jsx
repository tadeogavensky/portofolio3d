import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Layout  from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          About myself
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
        I´m a Full Stack Dev, trying to learn new things each time I wake up.
        Experienced in backend and frontend technologies like JavaSript,
        TypeScript, React.js, Node.js, JAVA and SQL. I'm a quick learner who
        likes to collaborate in teams which are very passionate about building
        solutions to everyday problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          );
        })}
      </div>
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12" />
          <h3 className="text-center text-white text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Layout(About, "about");
