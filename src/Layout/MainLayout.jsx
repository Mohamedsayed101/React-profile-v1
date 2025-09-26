import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex xs:flex-row-reverse ">
      <Sidebar />
      <main className="flex-grow  p-6 min-h-screen" data-aos="fade-left">
        <Outlet />
      </main>
    </div>
  );
}
