// For title Animations
import { Typewriter } from "react-simple-typewriter";

// Icon Library
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa";

import { FiFacebook, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import Button from "@mui/material/Button";

import HeadingPage from "../../Components/HeadingPage/HeadingPage";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  const socialMedia = [
    {
      id: 1,
      title: "Facebook",
      icon: <FiFacebook />,
      color: "#1877F2",
      link: "https://facebook.com/your-profile",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: <FiLinkedin />,
      color: "#0A66C2",
      link: "https://linkedin.com/in/your-profile",
    },
    {
      id: 3,
      title: "GitHub",
      icon: <FiGithub />,
      color: "#333",
      link: "https://github.com/your-username",
    },
    {
      id: 4,
      title: "Email",
      icon: <FiMail />,
      color: "#D44638",
      link: "mailto:your-email@example.com",
    },
  ];
  return (
    <>
      <div className="px-3 flex flex-col gap-19">
        <HeadingPage title="About Me" />
        <div className="content flex gap-13">
          <img
            data-aos="fade-right"
            src="/Images/Me-1.jpg"
            alt="Profile Image"
            className="w-65 h-85 rounded-xl border-1 border-blue-100 p-1 shadow-lg animate-updown"
          />
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-blue-400 ">
              Mohamed Sayed |{" "}
              <span style={{ color: `${theme.palette.primary.main}` }}>
                <Typewriter
                  words={[
                    "Front-End Developer",
                    "Software Engineer",
                    "Web Designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <div>
              <div className=" w-4xl flex flex-col gap-4">
                <p className="text-gray-500">
                  I’m a Computer and AI student with hands-on experience in
                  frontend development using <strong>React</strong> and modern
                  web technologies. I create clean, responsive interfaces and
                  integrate them with REST APIs to deliver smooth, user-friendly
                  applications.
                </p>
                <p className="text-gray-500">
                  I have a solid foundation in{" "}
                  <strong>
                    problem-solving, data structures, and algorithms
                  </strong>
                  . I enjoy learning new tools, working with teams, and building
                  projects that bring real value.
                </p>
              </div>
            </div>

            <hr
              style={{
                color: `${theme.palette.primary.light}`,
              }}
            />

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-blue-200">
                <FaEnvelope
                  style={{
                    color: `${theme.palette.primary.dark}`,
                  }}
                />
                <p>ms3655@fayoum.edu.eg</p>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <FaPhoneAlt
                  style={{
                    color: `${theme.palette.primary.dark}`,
                  }}
                />
                <p>+201006291302</p>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <FaMapMarkerAlt
                  style={{
                    color: `${theme.palette.primary.dark}`,
                  }}
                />
                <p>Fayoum -Egypt</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="contained"
                download
                href="/Ali Nasr Frontend Developer (Angular).pdf"
                target="_blank"
                className="flex items-center justify-center gap-1.5"
              >
                <FaFilePdf className="text-xl" />
                <p>Download CV</p>
              </Button>

              <div className="flex gap-4">
                {socialMedia.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center group relative"
                  >
                    <span
                      className="absolute -top-7 opacity-0 group-hover:opacity-100 
        text-sm font-medium transition"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </span>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-gray-400 
        text-gray-600 transition transform hover:scale-110
        group-hover:text-current group-hover:border-current"
                      style={{
                        borderColor: "#ccc",
                      }}
                    >
                      <span
                        className="transition-colors duration-300 group-hover:text-[color:var(--icon-color)]
                        group-hover:bg-[backgroundColor:var(--icon-backgroundColor)]"
                        style={{
                          "--icon-color": item.color,
                          "--icon-backgroundColor": item.color,
                        }}
                      >
                        {item.icon}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
