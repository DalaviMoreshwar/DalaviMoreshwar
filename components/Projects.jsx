import Image from "next/image";
import Link from "next/link";
import { projectsDetails } from "../utils/content";
import { BsGithub, BsLaptop } from "react-icons/bs";

const Projects = () => {
  return (
    <div>
      {/* projects section start */}
      <div id="projects" className="w-full my-10">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-purple-500">
            Projects
          </p>
          <h2 className="py-4 text-gray-500">What I Built</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {projectsDetails.map((project) => (
              <div
                key={project.id}
                className="shadow-xl bg-slate-50 rounded-xl my-10 dark:bg-gray-800 flex-1"
              >
                <Image
                  className="rounded-xl shadow-xl"
                  loading="lazy"
                  src={project.bgImg}
                  alt={project.title}
                />
                <div className="p-3">
                  <h3 className="text-lg text-center font-medium pb-3 text-purple-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>

                  <div className="flex space-x-3 mt-3">
                    <span className="bg-gradient-to-tr cursor-pointer from-purple-800 to-rose-500 text-white px-3 py-1 border-none rounded-md">
                      <Link href={project.githubUrl} target="_blank">
                        <div className="flex gap-2">
                          <BsGithub className="m-auto" /> Github
                        </div>
                      </Link>
                    </span>
                    <span className="bg-gradient-to-tr cursor-pointer from-purple-800 to-green-400 text-white px-3 py-1 border-none rounded-md">
                      <Link href={project.webUrl} target="_blank">
                        <div className="flex gap-2">
                          <BsLaptop className="m-auto" /> View
                        </div>
                      </Link>
                    </span>
                  </div>

                  <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                  {project.tags.map((tag, index) => (
                    <div key={index}>
                      <code className="row-span-3 col-span-2">
                        <span className="bg-[#ccc] p-1 text-sm  rounded  text-gray-800">
                          {tag}
                        </span>
                      </code>{" "}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* projects section end */}
    </div>
  );
};

export default Projects;
