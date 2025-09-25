import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function SkillsCard({ title, data, titleIcon: TitleIcon }) {
  return (
    <Card sx={{ maxWidth: 305,minWidth:300 }}>
      <CardContent className="flex flex-col gap-4">

        <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600">
          <TitleIcon /> 
          <span>{title}</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          {data.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-blue-50 shadow-sm hover:bg-blue-200 transition-all duration-300 cursor-pointer"
              >
                <Icon className="text-blue-500" />
                <p >{item.name}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
