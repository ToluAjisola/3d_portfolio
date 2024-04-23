import { Link } from "react-router-dom";

import CTA  from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="purple-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-indigo-800">
        <p>
          Bachelor's Degree and experience working in a Software Development
          company. I picked up many skills along the way while also working on personal projects, listed below:
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-indigo-800">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />

      <CTA />
      <Footer/>
    </section>
  );
};

export default Projects;
