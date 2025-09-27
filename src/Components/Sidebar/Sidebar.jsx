import { useState } from "react";
import {
  FaUser,
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, title: "About", to: "/about", icon: <FaUser /> },
  { id: 2, title: "Skills", to: "/skills", icon: <FaCode /> },
  { id: 3, title: "Education", to: "/education", icon: <FaGraduationCap /> },
  { id: 4, title: "Projects", to: "/projects", icon: <FaLaptopCode /> },
  { id: 5, title: "Certificates", to: "/certificates", icon: <FaCertificate /> },
  { id: 6, title: "Contact", to: "/contact", icon: <FaEnvelope /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Toggle Button */}
      <button
        className="sm:hidden fixed top-4 right-4 z-[150] p-2 text-white rounded-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
     <aside
  className={`
    sm:sticky sm:top-0 sm:h-screen
    flex flex-col
    justify-center
    border-l border-gray-700
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
    sm:translate-x-0 sm:border-r
    bg-white dark:bg-black
    z-[120]
  `}
>
  <nav className="w-full flex flex-col justify-center items-center gap-4 mt-10 sm:mt-0">
    {links.map((ele) => (
      <NavLink
        key={ele.id}
        to={ele.to}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full gap-2 relative px-2 py-1 transition-all
           ${isActive ? "font-bold text-cyan-400 border-r-2 border-blue-500" : "text-gray-400"}`
        }
      >
        {({ isActive }) => (
          <>
            <span
              className={`text-xl p-2 rounded-xl ${
                isActive ? "bg-blue-500 text-white" : "text-gray-400"
              }`}
            >
              {ele.icon}
            </span>
            <span>{ele.title}</span>
          </>
        )}
      </NavLink>
    ))}
  </nav>
</aside>

    </>
  );
}
