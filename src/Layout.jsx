import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BG from "./assets/bgr.png";

const Layout = () => {
  return (
    <div className="min-h-screen  flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main
       className="mx-4 md:mx-20"
      >
        <Outlet />
      </main>

   
      <footer className="text-center py-4 text-gray-700">
        © 2025 Destination Job Traker
      </footer> 
     
    </div>
  );
};

export default Layout;
