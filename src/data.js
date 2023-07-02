//  icons
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// projects images
import Project0 from "./assets/img/projects/p0.jpg";
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.jpg";
import Project4 from "./assets/img/projects/p4.png";
import Project6 from "./assets/img/projects/p6.png";
import Project7 from "./assets/img/projects/p7.png";

// skills images for web-3
import SkillImg1 from "./assets/img/skills/eth_logo.png";
import SkillImg2 from "./assets/img/skills/ethers_js.png";
import SkillImg3 from "./assets/img/skills/hardhat.png";

// skills images for web-2
import SkillImg4 from "./assets/img/skills/html5.png";
import SkillImg5 from "./assets/img/skills/css3.png";
import SkillImg6 from "./assets/img/skills/tailwind.png";
import SkillImg7 from "./assets/img/skills/js.png";
import SkillImg8 from "./assets/img/skills/tslogo.png";
import SkillImg9 from "./assets/img/skills/reactjs.png";
import SkillImg10 from "./assets/img/skills/nextjs.jfif";
import SkillImg11 from "./assets/img/skills/git.png";
import SkillImg12 from "./assets/img/skills/jq.png";
import SkillImg19 from "./assets/img/skills/prism.png";

//skills for understanding
import SkillImg13 from "./assets/img/skills/bootstrap.png";
import SkillImg14 from "./assets/img/skills/figma.png";
import SkillImg15 from "./assets/img/skills/node.js.png";
import SkillImg16 from "./assets/img/skills/php.png";
import SkillImg17 from "./assets/img/skills/laravel.png";
import SkillImg18 from "./assets/img/skills/docker.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/leopico",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/leopico-412a2624b/",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/hTmI2022",
  },
];

// web-3 skills
export const skillsThree = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
];

// web-2 skills
export const skillsTwo = [
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg19,
  },
];

//understanding skills
export const skillsUnderstanding = [
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
  {
    image: SkillImg15,
  },
  {
    image: SkillImg16,
  },
  {
    image: SkillImg17,
  },
  {
    image: SkillImg18,
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Own-pj",
  },
  {
    name: "Full-stack",
  },
  {
    name: "Front-end",
  },
  {
    name: "Web-3 at eth",
  },
];

// project
export const projectsData = [
  {
    id: "0",
    image: Project0,
    name: "Blog-app with next.js(new app router)",
    category: "Own-pj",
    description:
      "This pj is full-stack Blog-app and fully responsive with next.js, typescript, mongodb, prisma and cloudinary for uploading images.Admin acc is - [email-paypalmoney967@gmail.com/password-admin123].You can check ReadMe.md and how to start to run for this app.",
    github: "https://github.com/leopico/Bog-app.git",
    link: "https://leopico-blogapp.vercel.app/",
  },
  {
    id: "1",
    image: Project1,
    name: "Airbnb-clone with next.js(new app router)",
    category: "Full-stack",
    description:
      "This pj is full-stack airbnb-clone and fully responsive with next.js, typescript, mongodb, prisma and cloudinary for uploading images.You can check ReadMe.md and how to start to run for this app.",
    github: "https://github.com/leopico/airbnb-clone.git",
    link: "https://booking-app-six-flame.vercel.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Messenger-clone with next.js(new app router)",
    category: "Full-stack",
    description:
      "This pj is full-stack messenger-clone and fully responsive with next.js, typescript, mongodb, prisma, pusher for real time and cloudinary for uploading images.You can check ReadMe.md and how to start to run for this app.",
    github: "https://github.com/leopico/chat-app.git",
    link: "https://chat-app-clone-kappa.vercel.app/",
  },
  {
    id: "4",
    image: Project4,
    name: "Note application with Laravel-api",
    category: "Front-end",
    description:
      "This pj is note application with laravel-api.This pj is not fully responsive.You can clone on github's link for laravel-api and check ReadME.md how to start to run for this app.",
    github: "https://github.com/leopico/note-app-api.git",
    link: "https://react-note-app-vercel.vercel.app/",
  },
  {
    id: "6",
    image: Project6,
    name: "Voting DAO Dapp",
    category: "Web-3 at eth",
    description:
      "This pj is Voting DAO demo pj with fully responsive.You can clone on github's link for back-end side and check on ReadME.md how to start to run for this app.",
    github: "https://github.com/leopico/voting-dao-backend.git",
    link: "https://voting-dao-frontend.vercel.app/",
  },
  {
    id: "7",
    image: Project7,
    name: "NFT Minting Site Dapp with keccak256 for whitelist function",
    category: "Web-3 at eth",
    description:
      "This pj is NFT minting pj with solidity smart contract with fully responsive.You can clone on github's link for back-end side and check on ReadME.md how to start to run for this app.",
    github: "https://github.com/leopico/nft-space.git",
    link: "https://nft-space-frontend.vercel.app/",
  },
];

// services
export const services = [
  {
    icon: <FiSettings />,
    name: "Web Blockchain Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to assist you.",
    description: "Email me at leopico.peceng@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Myanmar, Yangon",
    description: "Serving clients worldwide",
  },
];
