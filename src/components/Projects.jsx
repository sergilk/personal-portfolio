import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, techs } from "../data/data";
import SpriteIcon from "./SpriteIcon";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-title">Projects</h2>
      <div className="grid gap-2.5">
        {projects.map((project) => {
          return (
            <article
              className="item-card item-hover hover:translate-y-[-0.3125rem] hover:bg-item-dark hover:duration-300 light:hover:bg-item-light"
              key={project.id}
            >
              <div className="flex gap-2.5">
                <div>
                  <img
                    src={project.img}
                    className="aspect-square min-h-[13rem] min-w-[13rem] rounded-item select-none max-[608px]:hidden"
                    alt={`${project.name} preview`}
                    width={208}
                    height={208}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-subtitle">{project.name}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repo"
                      >
                        <FaGithub
                          className="text-[18px] hover:fill-accent"
                          title="GitHub repo"
                        />
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt
                          className="text-[18px] hover:fill-accent"
                          title="Live demo"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="text-descr">{project.descr}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5">
                    {project.techs.map((projectTech) => {
                      const tech = techs.find(
                        (tech) => tech.name === projectTech,
                      );
                      return (
                        tech && (
                          <li
                            key={tech.name}
                            className="item-card item-hover text-misc flex items-center gap-1 p-1 select-none hover:shadow-none"
                          >
                            <SpriteIcon
                              icon={tech.icon}
                              className="max-h-[1.125rem] max-w-[1.125rem]"
                              alt={`${tech.name} logo`}
                            />
                            <p>{tech.name}</p>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
        <div className="flex flex-wrap items-center gap-1">
          <p className="text-normal">Current project:</p>
          <ul className="text-descr flex flex-wrap gap-1 underline">
            <li>
              <a href="#">test</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
