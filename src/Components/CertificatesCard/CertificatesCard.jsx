import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { MdDone } from "react-icons/md";

export default function CertificatesCard({ data }) {
  const Icon = data.mainIcon;

  return (
    <Card
      sx={{

        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f3f4f6",
        borderRadius: 3,
        boxShadow: 5,
        cursor: "pointer",
        transition: "all 0.15s ease-in-out",
        "&:hover": {
          transform: "scale(1.04)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
        },
      }}
      data-aos="fade-up"
    >
      <CardContent className="flex flex-col gap-4 flex-grow">
        {/* Header */}
        <div className="flex gap-6 items-center">
          <Icon size={50} className="text-purple-600" />
          <div>
            <h3 className="text-lg font-bold">{data.organization}</h3>
            <p className="text-sm text-gray-600">
              {data.title} | {data.start} - {data.end}
            </p>
          </div>
        </div>

        {/* Coursework */}
        <div className="flex flex-col">
          <p className="mt-2 font-semibold text-gray-800">
            Coursework covered:
          </p>
          <div className="flex flex-col gap-2 mt-2">
            {data.coursework.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <MdDone className="text-green-600" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* View Button */}
        <div className="mt-4">
          <Button
            variant="outlined"
            color="primary"
            size="small"
            href={data.link}
            target="_blank"
            className="hover:scale-105 transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            View Certificate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
