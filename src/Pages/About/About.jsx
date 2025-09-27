import { Typewriter } from "react-simple-typewriter";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFilePdf,
  FaWhatsapp,
} from "react-icons/fa";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

import Button from "@mui/material/Button";
import HeadingPage from "../../Components/HeadingPage/HeadingPage";

export default function About() {
  const socialMedia = [
    {
      id: 1,
      title: "Facebook",
      icon: <FiFacebook />,
      color: "text-blue-600",
      link: "https://www.facebook.com/profile.php?id=61568711669833&mibextid=rS40aB7S9Ucbxw6v",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: <FiLinkedin />,
      color: "text-blue-700",
      link: "https://www.linkedin.com/in/mohamed-sayed-439a54347/",
    },
    {
      id: 3,
      title: "GitHub",
      icon: <FiGithub />,
      color: "text-gray-800 dark:text-gray-200",
      link: "https://github.com/Mohamedsayed101",
    },
    {
      id: 4,
      title: "Whatsapp",
      icon: <FaWhatsapp />,
      color: "text-green-500",
      link: "https://wa.me/201006291302",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope className="text-purple-600 dark:text-purple-400" />,
      text: "ms3655@fayoum.edu.eg",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-purple-600 dark:text-purple-400" />,
      text: "+201006291302",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400" />,
      text: "Fayoum - Egypt",
    },
  ];

  return (
    <div className="px-3 flex flex-col gap-12 ">
      <HeadingPage title="About Me" />

      {/* Content Section */}
      <div className="content flex flex-col lg:flex-row lg:items-start gap-10">
        {/* Profile Image */}
        <img
          data-aos="zoom-in"
          loading="lazy"
          src="/Images/Me-1.jpg"
          alt="Profile"
          className="w-64 max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-xl border border-gray-300 dark:border-gray-700 p-1 shadow-lg animate-updown mx-auto lg:mx-0 bg-white dark:bg-gray-800"
        />

        {/* Info Section */}
        <div className="flex flex-col gap-6 lg:flex-1" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center lg:text-left text-purple-600 dark:text-purple-400">
            Mohamed Sayed |{" "}
            <span>
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

          {/* Bio */}
          <div className="flex flex-col gap-4 text-center lg:text-left text-gray-700 dark:text-gray-300">
            <p>
              I’m a Computer and AI student with hands-on experience in frontend
              development using <strong>React</strong> and modern web
              technologies. I create clean, responsive interfaces and integrate
              them with REST APIs to deliver smooth, user-friendly applications.
            </p>
            <p>
              I have a solid foundation in{" "}
              <strong>problem-solving, data structures, and algorithms</strong>.
              I enjoy learning new tools, working with teams, and building
              projects that bring real value.
            </p>
          </div>

          <hr className="border-t border-purple-300 dark:border-purple-700" />

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center lg:justify-start gap-2 text-gray-800 dark:text-gray-100"
              >
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Buttons + Social Media */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-4">
            <Button
              variant="contained"
              download
              href="/Mohamed_Sayed_Frontend.pdf"
              target="_blank"
              className="!bg-purple-600 hover:!bg-purple-700 dark:!bg-purple-500 dark:hover:!bg-purple-600 text-white flex items-center justify-center gap-2"
            >
              <FaFilePdf className="text-xl" />
              <p>Download CV</p>
            </Button>

            {/* Social Media */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              {socialMedia.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center group relative"
                >
                  <span
                    className={`absolute -top-7 opacity-0 group-hover:opacity-100 
                    text-sm font-medium transition ${item.color}`}
                  >
                    {item.title}
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-gray-300 dark:border-gray-700 transition transform hover:scale-110 ${item.color}`}
                  >
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
