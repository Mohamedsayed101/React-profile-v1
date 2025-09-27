import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import DarkMode from "../Components/DarkMode/DarkMode";
import Box from "@mui/material/Box";

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Box
        component="main"
        className="flex-grow p-6 relative dark:bg-black"
      >
        <Outlet />
        <div className="absolute right-10 bottom-10 border-blue-400 border-1 border-solid  rounded-full w-11 h-11">
          <DarkMode />
        </div>
      </Box>
    </Box>
  );
}
