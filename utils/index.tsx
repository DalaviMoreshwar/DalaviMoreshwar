import React from "react";
import { StaticImageData } from "next/image";

import summarizeArticlesImg from "@/public/project/summarize-articles.png";
import cryptoTransferImg from "@/public/project/crypto-transfer.png";

interface Experiences {
  id: number;
  fromDate: string;
  toDate: string;
  company: string;
  role: string;
  link: string;
  description: React.ReactNode;
  techStack: string[];
}

interface ProjectDetails {
  id: number;
  name: string;
  details: React.ReactNode;
}

interface Education {
  institute: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  link: string;
  grade: string;
}

interface Projects {
  id: number;
  name: string;
  techStack: string[];
  webLink: string;
  githubLink: string;
  description: string;
  image: StaticImageData;
}

const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    name: "BMW Group | SCP Apps",
    details: (
      <div className="ml-3">
        Integrate is an BMW internal open-source platform that empowers business
        departments to digitalise and automate their processes. It provides a
        robust ecosystem for creating, deploying, and managing custom web apps,
        interconnected with each other and with other BMW data source systems.
      </div>
    ),
  },
  {
    id: 2,
    name: "Mercedes-Benz R&D India | Integrated Product Planning",
    details: (
      <div className="ml-3">
        React Query + Material UI based application for Integrated Product
        Planning (IPP). Developed modular reusable components; implemented React
        Testing Library for unit tests.{" "}
      </div>
    ),
  },
  {
    id: 3,
    name: "Mercedes-Benz R&D India | HoT Inside",
    details: (
      <div className="ml-3">
        Created dashboard for Software Engineering metrics using DORA KPIs.
        Utilized Ant Design, Axios, and React Testing Library to build dynamic
        and testable UIs. Enhanced user experience through effective use of
        modern React tools and libraries.
      </div>
    ),
  },
  {
    id: 4,
    name: "Mercedes-Benz R&D India | Ansify Q&A Platform",
    details: (
      <div className="ml-3">
        Developed full UI for an internal knowledge-sharing platform that
        received client appreciation. Managed local storage for state
        persistence ensuring seamless user experience. Delivered maintainable
        and extensible frontend code.
      </div>
    ),
  },
];

export const experiences: Experiences[] = [
  {
    id: 1,
    fromDate: "15 Oct 2016",
    toDate: "30 Apr 2018",
    company: "Dot Logic Web Solutions Private Limited",
    role: "Software Developer",
    description: (
      <div className="text-sm ml-3">
        Developed web and mobile applications using AngularJS, PHP, and MySQL.
        Created multiple admin dashboards. Enhanced UI/UX using HTML, CSS, and
        JavaScript improving overall user engagement.
      </div>
    ),
    link: "https://www.dotweb.in/",
    techStack: ["HTML", "PHP", "AngularJS"],
  },
  {
    id: 2,
    fromDate: "2 May 2018",
    toDate: "19 Jul 2019",
    company: "Infoworld Technologies Pvt. Ltd.",
    role: "Hybrid Mobile Application Developer",
    description: (
      <div className="text-sm ml-3">
        Developed hybrid mobile applications using Ionic and ASP.NET MVC.
        Integrated applications with SAP B1 and PowerBuilder. Delivered mobile
        solutions aligned with enterprise requirements.
      </div>
    ),
    link: "https://infoworldindia.com/",
    techStack: ["Angular v2", "Ionic Framework"],
  },
  {
    id: 3,
    fromDate: "1 Jul 2019",
    toDate: "7 Aug 2020",
    company: "BiCS Infotech pvt. ltd.",
    role: "FullStack Developer",
    description: (
      <div className="text-sm ml-3">
        Worked on MMRI Genetics Research Portal utilizing React, Node.js, and
        MySQL. Built RESTful APIs and implemented complex UI tables with
        advanced functionalities. Ensured seamless backend-frontend integration
        and data consistency.
      </div>
    ),
    link: "https://www.bicsinfotech.com/",
    techStack: ["ReactJs", "NodeJs", "MySQL"],
  },
  {
    id: 4,
    fromDate: "2 Sept 2020",
    toDate: "16 Nov 2022",
    company: "Acclivis Technologies Pvt Ltd",
    role: "Frontend Developer",
    description: (
      <div className="text-sm ml-3">
        Developed Smart System Designer tool for electronic component search.
        Implemented Redux Thunk for advanced state management. Contributed to
        desktop support and ETL testing to ensure software quality.
      </div>
    ),
    link: "https://acclivistech.com/",
    techStack: ["ReactJs", "NodeJs", "Redux"],
  },
  {
    id: 5,
    fromDate: "23 Nov 2022",
    toDate: "Present",
    company: "Capgemini, India",
    role: "Senior Consultant & Application Developer",
    description: (
      <div className="ml-3">
        {projectDetails.map(({ id, name, details }) => {
          return (
            <div key={id}>
              <p className="bg-linear-to-br text-sm text-stone-700 dark:text-stone-200">
                {name}
              </p>
              <span className="text-sm">{details}</span>
            </div>
          );
        })}
      </div>
    ),
    link: "https://www.capgemini.com/",
    techStack: [
      "ReactJs",
      "TypeScript",
      "NodeJs",
      "Redux",
      "React Query",
      "GraphQL",
      "Redis",
      "MongoDB",
    ],
  },
];

export const education: Education = {
  institute: "DKTE'S Textile and Engineering Institute",
  degree: "Bachelor of Engineering - BE",
  fieldOfStudy: "Computer Science & Engineering",
  startDate: "June 2011",
  endDate: "12 July 2016",
  link: "https://www.dkte.ac.in/index.php",
  grade: "63.73%",
};

export const projects: Projects[] = [
  {
    id: 1,
    name: "Crypto Transfer",
    techStack: [
      "ReactJS",
      "TailwindCSS",
      "Solidity",
      "Ethers JS",
      "Hardhat",
      "Alchemy",
      "Blockchain",
      "Metamask",
    ],
    webLink: "https://crypto-transfer-psi.vercel.app/",
    githubLink: "https://github.com/DalaviMoreshwar/crypto-transfer",
    description:
      "Crypto Transfer: Modern and Real World Web 3.0 Blockchain Application",
    image: cryptoTransferImg,
  },
  {
    id: 2,
    name: "Summarize Articles: GPT-4",
    techStack: ["ReactJS", "Redux", "TailwindCSS", "Rapid API"],
    webLink: "https://ai-summerize-project.vercel.app/",
    githubLink: "https://github.com/DalviMoreshwar/ai-summerize-project",
    description: "Summarize articles using OpenAI GPT-4.",
    image: summarizeArticlesImg,
  },
];
