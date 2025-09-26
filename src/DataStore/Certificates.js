import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export const certificatesData = [
  {
    mainIcon: FaGraduationCap,
    organization: "ITI",
    title: "React Developer",
    start: "July 2025",
    end: "August 2025",
    link: "/assets/react.pdf",
    coursework: [
      "JavaScript (ES6+)",
      "React Basics & Advanced Hooks",
      "State Management (Context, Redux)",
      "React Router",
      "Bootstrap",
      "REST API Integration",
      "Project: Weather App with Forecast",
    ],
  },
  {
    mainIcon: FaLaptopCode,
    organization: "NTI",
    title: "Web Designer",
    start: "August 2025",
    end: "September 2025",
    link: "/assets/Nti.pdf",
    coursework: [
      "HTML5 & Semantic Markup",
      "CSS3 (Flexbox, Grid)",
      "Responsive Web Design",
      "Tailwind Framework",
      "UI/UX Principles",
      "Design Project: Portfolio Website",
    ],
  },
  {
    mainIcon: FaBriefcase,
    organization: "CIB",
    title: "IT Intern",
    start: "August 2025",
    end: "September 2025",
    link: "/assets/CIB.pdf",
    coursework: [
      "IT Support Fundamentals",
      "Networking Basics",
      "System Administration",
      "Cybersecurity Essentials",
      "Help Desk Ticketing Systems",
      "Hands-on Training with IT Tools",
    ],
  },
];
