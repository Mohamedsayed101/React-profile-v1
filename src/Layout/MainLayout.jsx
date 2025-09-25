import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex xs:flex-row-reverse min-h-screen">
      <Sidebar />
      <main className="flex-grow p-6 " data-aos="fade-left">
        <Outlet />
      </main>
    </div>
  );
}
