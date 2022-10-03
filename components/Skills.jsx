import React from "react";
import Image from "next/image";
import javascript from "../public/assets/skills/javascript.png";
import node from "../public/assets/skills/node.png";
import react from "../public/assets/skills/react.png";
import bootstrap from "../public/assets/skills/bootstrap.png";
import antd from "../public/assets/skills/antd.png";
import tailwind from "../public/assets/skills/tailwind.png";
import nextjs from "../public/assets/skills/nextjs.png";
import github from "../public/assets/skills/github.png";
import git from "../public/assets/skills/git.png";
import solidity from "../public/assets/skills/solidity.png";
import hardhat from "../public/assets/skills/hardhat.png";
import ethers_js_blue from "../public/assets/skills/ethers_js_blue.png";
import web3js from "../public/assets/skills/web3js.png";

const fundamentals = [
  // {
  //   skillIcon: "../public/assets/skills/html.png",
  //   skillName: "HTML",
  // },
  // {
  //   skillIcon: "../public/assets/skills/css.png",
  //   skillName: "CSS",
  // },
  {
    skillIcon: javascript,
    skillName: "JavaScript",
    level: "Intermediate",
  },
  {
    skillIcon: node,
    skillName: "Node JS",
    level: "Beginner",
  },
];

const web2 = [
  {
    skillIcon: react,
    skillName: "React JS",
    level: "Intermediate",
  },
  {
    skillIcon: bootstrap,
    skillName: "Bootstrap",
    level: "Intermediate",
  },
  {
    skillIcon: antd,
    skillName: "Ant Design",
    level: "Intermediate",
  },
  {
    skillIcon: tailwind,
    skillName: "Tailwind",
    level: "Beginner",
  },
  {
    skillIcon: nextjs,
    skillName: "Next JS",
    level: "Beginner",
  },
  {
    skillIcon: git,
    skillName: "Git",
    level: "Intermediate",
  },
];

const web3 = [
  {
    skillIcon: solidity,
    skillName: "Solidity",
    level: "Beginner",
  },
  {
    skillIcon: hardhat,
    skillName: "Hardhat",
    level: "Beginner",
  },
  {
    skillIcon: ethers_js_blue,
    skillName: "Ethers Js",
    level: "Beginner",
  },
  {
    skillIcon: web3js,
    skillName: "Web3JS",
    level: "Beginner",
  },
];

const renderSkills = (skills, level) => (
  <>
    <p className="uppercase text-sm py-8 font-bold">{level}</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="p-2 shadow-md dark:shadow-purple-300 dark:bg-gray-800  rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={skill.skillIcon}
                  width="64px"
                  height="64px"
                  alt={skill.skillName}
                />
              </div>
              <div className="flex text-gray-600 dark:text-[#ccc] flex-col itmes-center justify-center">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-[#666] to-[#222] dark:text-[#bbb] drop-shadow-lg">
                  {skill.skillName}
                </h3>
              </div>
            </div>
            <small
              className="text-center shadow-sm text-gray-500 bg-blue-100 dark:text-gray-800 p-0 px-2 rounded"
              style={{
                borderLeft:
                  skill.level === "Beginner"
                    ? "2px solid #f43f5e"
                    : skill.level === "Intermediate"
                    ? "2px solid #007672"
                    : "#FFE0FF",
                background:
                  skill.level === "Beginner"
                    ? "#fffdf0"
                    : skill.level === "Intermediate"
                    ? "#f4ffff"
                    : "#FFE0FF",
                color:
                  skill.level === "Beginner"
                    ? "#f43f5e"
                    : skill.level === "Intermediate"
                    ? "#007672"
                    : "#FFE0FF",
              }}
            >
              <small className="drop-shadow-lg">
                {skill.level}
                </small> 
            </small>
          </div>
        </div>
      ))}
    </div>
  </>
);

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 my-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full-height">
        <p className="text-xl tracking-widest uppercase text-purple-500">
          {" "}
          Skills
        </p>
        <h2 className="py-4 text-gray-500">What I Can Do</h2>
        {renderSkills(fundamentals, "Fundamentals")}
        {renderSkills(web2, "web 2.0")}
        {renderSkills(web3, "web 3.0")}
      </div>
    </div>
  );
};

export default Skills;
