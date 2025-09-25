import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MdDone } from "react-icons/md";

export default function EduCard({ data }) {
  return (
    <Card
      sx={{
        minWidth: 300,
        backgroundColor: "blue.300",
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
      <CardContent className="flex gap-4">
        <data.mainIcon size={50} color="purple" />
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{data.degree}</h3>
          <p className="text-sm text-gray-700">{data.faculty}</p>

          <div className="flex gap-2 text-sm text-blue-400">
            <p>{data.start}</p>
            <span>-</span>
            <p>{data.end}</p>
            <span>|</span>
            <p>{data.graduation}</p>
          </div>

          <p className="mt-1 font-medium">GPA: {data.gpa}</p>

          <p className="mt-2 font-semibold">
            Comprehensive computer science program covering:
          </p>
          <div className="flex flex-col gap-2 mt-1">
            {data.coursework.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <MdDone className="text-white rounded-full text-[14px] bg-green-600" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
