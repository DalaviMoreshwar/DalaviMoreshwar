interface Experiences {
  id: number;
  fromDate: string;
  toDate: string;
  company: string;
  role: string;
  link: string;
  description: string;
  techStack: string[];
}

export const experiences: Experiences[] = [
  {
    id: 1,
    fromDate: "15 Oct 2016",
    toDate: "30 Apr 2018",
    company: "Dot Logic Web Solutions Private Limited",
    role: "Software Developer",
    description: "",
    link: "https://www.dotweb.in/",
    techStack: ["HTML", "PHP", "AngularJS"],
  },
  {
    id: 2,
    fromDate: "2 May 2018",
    toDate: "19 Jul 2019",
    company: "Infoworld Technologies Pvt. Ltd.",
    role: "Hybrid Mobile Application Developer",
    description: "",
    link: "https://infoworldindia.com/",
    techStack: ["Angular v2", "Ionic Framework"],
  },
  {
    id: 3,
    fromDate: "1 Jul 2019",
    toDate: "7 Aug 2020",
    company: "BiCS Infotech pvt. ltd.",
    role: "FullStack Developer",
    description: "",
    link: "https://www.bicsinfotech.com/",
    techStack: ["ReactJs", "NodeJs", "MySQL"],
  },
  {
    id: 4,
    fromDate: "2 Sept 2020",
    toDate: "16 Nov 2022",
    company: "Acclivis Technologies Pvt Ltd",
    role: "Frontend Developer",
    description: "",
    link: "https://acclivistech.com/",
    techStack: ["ReactJs", "NodeJs", "Redux"],
  },
  {
    id: 5,
    fromDate: "23 Nov 2022",
    toDate: "Present",
    company: "Capgemini",
    role: "Senior Consultant & Application Developer",
    description: "",
    link: "https://www.capgemini.com/",
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
