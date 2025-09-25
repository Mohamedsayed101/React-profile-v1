import { useState } from "react";
import {
  FaUser,
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  return (
    <>
      {/* Toggle Button */}
      <button
        style={{ backgroundColor: theme.palette.primary.dark }}
        className="sm:hidden fixed top-4 right-4 z-50 p-2 text-white rounded-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full
          flex flex-col
          border-l border-gray-700
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          sm:static sm:translate-x-0 sm:h-auto sm:border-r
        `}
      >
        <nav className="w-full flex flex-col justify-center items-center h-full gap-4 mt-10 sm:mt-0">
          {links.map((ele) => (
            <NavLink
              key={ele.id}
              to={ele.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full gap-2 relative px-2 py-1 transition-all ${
                  isActive ? "font-bold" : ""
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      color: theme.palette.secondary.light,
                      borderRight: `3px solid ${theme.palette.primary.main}`,
                    }
                  : {}
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className="text-xl p-2 rounded-xl"
                    style={{
                      backgroundColor: isActive
                        ? theme.palette.primary.main
                        : "transparent",
                      color: isActive ? "#fff" : "#ccc",
                    }}
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
