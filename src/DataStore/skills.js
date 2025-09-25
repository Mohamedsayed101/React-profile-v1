// Skills.js
import {
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import { BiLogoVisualStudio } from "react-icons/bi";
import { PiTreeStructureLight } from "react-icons/pi";
import { VscSymbolStructure } from "react-icons/vsc";

import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiFigma,
  SiPostman,
  SiCplusplus,
  SiMusicbrainz
} from "react-icons/si";

import { MdDataObject, MdAnimation } from "react-icons/md";

export const skills = {
  "Programming Languages": {
    icon: FaCode,
    items: [
      { icon: SiCplusplus, name: "C++" },
      { icon: FaJs, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
    ],
  },

  "Frontend Development": {
    icon: FaReact,
    items: [
      { icon: FaReact, name: "React" },
      { icon: FaBootstrap, name: "Bootstrap" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiMui, name: "Material UI" }, // ✅ بدل SiMaterialui
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
    ],
  },

  Tools: {
    icon: FaGithub,
    items: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub, name: "GitHub" },
      { icon: BiLogoVisualStudio, name: "VS Code" },
      { icon: SiFigma, name: "Figma" },
      { icon: SiPostman, name: "Postman" },
      { icon: MdAnimation, name: "AOS" }, // ✅ بديل لأي SiAos مش موجود
    ],
  },

  "Programming Concept": {
    icon: MdDataObject,
    items: [
      { icon: MdDataObject, name: "DSA" },
      { icon: PiTreeStructureLight, name: "OOP" },
      { icon: VscSymbolStructure, name: "Data Structures" },
      { icon: SiMusicbrainz, name: "Problem Solving" },
    ],
  },
};
