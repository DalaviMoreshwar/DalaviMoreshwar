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
            My Recent Work
          </p>
          <h2 className="py-4 text-gray-500">What I Built</h2>
          <p>
            On this site I write about my code, self-improvement, and learnings
            about Web 3.0 technologies.
          </p>
          <div className="grid grid-cols-3 gap-3 my-10">
            
            {projectsDetails.map((project) => (
             

              <div
                key={project.id}
                className="max-w-sm dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="bg-cover hover:bg-gray" >
                  <Image
                    className="rounded-sm shadow-xl"
                    loading="lazy"
                    src={project.bgImg}
                    alt={project.title}
                  />
                </div>
                <div className="mx-2 my-4 border-b border-gray-light">
                  <div className="font-medium text-base text-gray-darker mb-4">
                    {project.title}
                  </div>
                  <p className="h-28 font-normal text-gray-500 text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <span className="mb-2 bg-gradient-to-tr cursor-pointer from-purple-800 to-rose-500 text-white px-3 py-1 border-none rounded-md">
                      <Link href={project.githubUrl} target="_blank">
                        <div className="flex gap-2">
                          <BsGithub className="m-auto" /> Github
                        </div>
                      </Link>
                    </span>
                    <span className="mb-2 bg-gradient-to-tr cursor-pointer from-purple-800 to-green-400 text-white px-3 py-1 border-none rounded-md">
                      <Link href={project.webUrl} target="_blank">
                        <div className="flex gap-2">
                          <BsLaptop className="m-auto" /> View
                        </div>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="mx-2 my-4 flex">
                  <div className="flex-grow">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-50 rounded-xl px-2 py-1 text-xs font-thin text-gray-700 mr-2 mb-2"
                      >
                        <span style={{ fontSize: "10px" }}>⭕</span> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              // <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-800">
              //   <Image
              //     className="rounded-xl shadow-xl"
              //     loading="lazy"
              //     src={project.bgImg}
              //     alt={project.title}
              //   />
              //   <div className="px-6 py-4">
              //     <div className="font-bold text-lg mb-2">{project.title}</div>
              //     <p className="text-gray-700 text-md">
              //      {project.description}
              //     </p>
              //   </div>
              //   <div className="px-4 pt-4 pb-2">
              //     <span className="inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              //     <span className="inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              //     <span className="inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              //   </div>
              // </div>

              // <div
              //   key={project.id}
              //   className="shadow-xl bg-slate-50 rounded-xl my-10 dark:bg-gray-800 flex-1"
              // >
              //   <Image
              //     className="rounded-xl shadow-xl"
              //     loading="lazy"
              //     src={project.bgImg}
              //     alt={project.title}
              //   />
              //   <span className="px-2 text-sm text-gray-800 shadow-inner rounded-sm bg-gradient-to-tr from-[#fff] to-[#eee]"
              //     style={{
              //       borderBottom:
              //         project.web === "Web 3.0"
              //           ? "2px solid #f43f5e"
              //           : "2px solid #007672",
              //       fontFamily: "Consolas",
              //       fontSize: "15px"
              //     }}
              //   >
              //     {project.web}
              //   </span>
              //   <div className="p-3">
              //     <h3 className="text-lg text-center font-medium pb-3 text-purple-500">
              //       {project.title}
              //     </h3>
              //     <p className="text-gray-700 dark:text-gray-300 text-sm">
              //       {project.description}
              //     </p>

              //     <div className="flex space-x-3 mt-3">
              //       <span className="bg-gradient-to-tr cursor-pointer from-purple-800 to-rose-500 text-white px-3 py-1 border-none rounded-md">
              //         <Link href={project.githubUrl} target="_blank">
              //           <div className="flex gap-2">
              //             <BsGithub className="m-auto" /> Github
              //           </div>
              //         </Link>
              //       </span>
              //       <span className="bg-gradient-to-tr cursor-pointer from-purple-800 to-green-400 text-white px-3 py-1 border-none rounded-md">
              //         <Link href={project.webUrl} target="_blank">
              //           <div className="flex gap-2">
              //             <BsLaptop className="m-auto" /> View
              //           </div>
              //         </Link>
              //       </span>
              //     </div>

              //     {/* <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}

              //     {/* {project.tags.map((tag, index) => (
              //         <div key={index} className="row-span-3 col-span-2">
              //           <code className="bg-[#F1F7F7] border p-1 text-sm  rounded  text-gray-800">
              //             {tag}
              //           </code>{" "}
              //         </div>
              //       ))} */}
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
      {/* projects section end */}
    </div>
  );
};

export default Projects;
