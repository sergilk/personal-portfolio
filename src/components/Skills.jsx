import { techs } from "../data/data";
import SpriteIcon from "./SpriteIcon";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-title">Skills</h2>
      <div className="grid gap-2">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(6.33rem,1fr))] gap-2">
          {techs.map((tech) => (
            <li
              key={tech.name}
              className="item-card item-hover flex flex-col items-center gap-0.5"
            >
              <SpriteIcon
                icon={tech.icon}
                className="max-h-[1.875rem] max-w-[1.875rem] select-none"
                alt={`${tech.name} logo`}
                width={30}
                height={30}
              />
              <p className="text-normal text-[1rem]">{tech.name}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-1">
          <p className="text-normal">Current learning path:</p>
          <ul className="text-descr flex flex-wrap gap-1 underline">
            <li>TailwindCSS</li>
            <span>|</span>
            <li>React.js</li>
            <span>|</span>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
