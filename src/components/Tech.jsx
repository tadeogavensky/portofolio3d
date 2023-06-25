import BallCanvas from "./canvas/Ball";
import Layout from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div className="w-32 h-32 flex flex-col items-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p>{technology.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Layout(Tech, "tech");
