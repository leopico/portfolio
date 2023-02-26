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

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.png";
import Project6 from "./assets/img/projects/p6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/eth_logo.png";
import SkillImg6 from "./assets/img/skills/ethers_js.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/hardhat.png";
import SkillImg10 from "./assets/img/skills/bootstrap.png";

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

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
  },
  {
    img: UpworkBrandIcon,
  },
  {
    img: FiverBrandIcon,
  },
  {
    img: BehanceBrandIcon,
  },
  {
    img: DribbbleBrandIcon,
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg10,
  },
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
    image: SkillImg9,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg7,
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "front-end dev",
  },
  {
    name: "Blockchain dev",
  },
  {
    name: "branding",
  },
];

// project
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Note application with Laravel-api",
    category: "front-end dev",
    description:
      "This pj is note application with laravel-api.This pj is not fully responsive.You can clone on github's link for laravel-api and check ReadME.md how to start to run for this app.",
    link: "https://github.com/leopico/note-app-api.git",
  },
  {
    id: "2",
    image: Project2,
    name: "Bootstrap portfolio pj",
    category: "front-end dev",
    description:
      "This pj is Bootstrap portfolio pj with fully responsive.You can clone on github's link and check my experience for bootstrap skill.",
    link: "https://github.com/leopico/bootstrap-portfolio.git",
  },
  {
    id: "4",
    image: Project4,
    name: "Voting DAO Dapp",
    category: "Blockchain Dev",
    description:
      "This pj is Voting DAO demo pj with fully responsive.You can clone on github's link for back-end side and check on ReadME.md how to start to run for this app.",
    link: "https://github.com/leopico/voting-dao-backend.git",
  },
  {
    id: "5",
    image: Project5,
    name: "Multisig wallet Dapp",
    category: "Blockchain Dev",
    description:
      "This pj is multi-sig wallet dapp pj with solidity smart contract.This pj was max responsive at (875px X 657px).You can clone on github's link for back-end side and check on ReadME.md how to start to run for this app.",
    link: "https://github.com/leopico/multisig-wallet-backend",
  },
  {
    id: "6",
    image: Project6,
    name: "NFT Minting Site Dapp",
    category: "Blockchain Dev",
    description:
      "This pj is NFT minting pj with solidity smart contract with fully responsive.You can clone on github's link for back-end side and check on ReadME.md how to start to run for this app.",
    link: "https://github.com/leopico/nft-space.git",
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
