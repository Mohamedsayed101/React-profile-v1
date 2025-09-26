import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 320,
        minHeight: 240,
        position: "relative",
      }}
      className="w-60 bg-cover bg-center mb-10 h-full rounded-xl overflow-hidden shadow-md"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-all duration-500 px-4 py-2 flex flex-col text-white ">
        <div className="mb-2">
          <h5 className="text-lg font-bold text-blue-400">{project.title}</h5>
          <p className="text-sm my-2 leading-4.5">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center px-2.5 py-1 rounded-xl text-sm  bg-blue-50 text-black shadow-sm hover:bg-blue-200 transition-all duration-300 cursor-pointer gap-0.5 "
              >
                <Icon className="text-blue-500" />
                <p className="text-sm">{item.title}</p>
              </div>
            );
          })}
        </div>

        <Stack spacing={2} direction="row" className="text-xs ">
          <Button
            variant="contained"
            color="primary"
            href={project.demo}
            target="_blank"
            startIcon={<FaExternalLinkAlt />}
          >
            Demo
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={project.github}
            target="_blank"
            startIcon={<FaGithub />}
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </Card>
  );
}
