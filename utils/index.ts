interface Experiences {
  id: number;
  fromDate: string;
  toDate: string;
  company: string;
  role: string;
  description: string;
  techStack: string[];
}

export const experiences: Experiences[] = [
  {
    id: 1,
    fromDate: "September 2016",
    toDate: "May 2018",
    company: "Dot Logic Web Solutions Private Limited",
    role: "Software Developer",
    description: "",
    techStack: ["HTML", "PHP", "AngularJS"],
  },
  {
    id: 2,
    fromDate: "May 2018",
    toDate: "July 2019",
    company: "Infoworld Technologies Pvt. Ltd.",
    role: "Hybrid Mobile Application Developer",
    description: "",
    techStack: ["Angular v2", "Ionic Framework"],
  },
  {
    id: 3,
    fromDate: "June 2019",
    toDate: "September 2020",
    company: "BiCS Infotech pvt. ltd.",
    role: "FullStack Developer",
    description: "",
    techStack: ["ReactJs", "NodeJs", "MySQL"],
  },
  {
    id: 4,
    fromDate: "September 2020",
    toDate: "November 2022",
    company: "Acclivis Technologies Pvt Ltd",
    role: "Frontend Developer",
    description: "",
    techStack: ["ReactJs", "NodeJs", "Redux"],
  },
  {
    id: 5,
    fromDate: "November 2022",
    toDate: "Present",
    company: "Capgemini",
    role: "Senior Consultant & Application Developer",
    description: "",
    techStack: [
      "ReactJs",
      "TypeScript",
      "NodeJs",
      "Redux",
      "React Query",
      "GraphQL",
      "Rest API",
      "MongoDB",
    ],
  },
];

export const education = {
  institute:
    "DKTE'S Textile and Engineering Institute - An Empowered Autonomous Institute",
  degree: "Bachelor of Engineering - BE",
  fieldOfStudy: "Computer Science",
  startDate: "June 2011",
  endDate: "12 July 2016",
  logo: "",
};
