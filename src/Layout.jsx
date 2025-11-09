import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import BG from "./assets/bgr.png";
import { Calendar, Filter, Search, TowerControl } from "lucide-react";

const Layout = () => {
    return (
        <div className="bg-gray-300 mb-20 h-full ">
            <Navbar />

            <main
                className=" ml-4  mr-4 md:mr-20 md:ml-20 mx-auto  bg-top bg-cover relative"
                style={{ backgroundImage: `url(${BG})` }}
            >
                {" "}
                <Outlet />
            </main>
            <div className="h-40 ml-4  mr-4 md:mr-20 md:ml-20 mx-auto ">
                <h2 className="text-center font-light text-2xl md:text-3xl mb-4">
                    {" "}
                    Focus on What Matters: Our Core Features
                </h2>
                <div className="flex flex-col gap-2 justify-between md:flex-row  ">
                    <div className="h-40 w-70 border rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-3  grow">
                        <div className="flex gap-4 mb-4  ">
                            {" "}
                            <Search className="text-cyan-500" />  <p className="font-bold">Comprehensive Tracking: </p>
                        </div>
                        <p className="text-md">
                            Track critical details including Company, Role, and the precise
                            Status (Applied, Interviewed, Offer Received, Rejected).
                        </p>
                    </div>
                    <div className="h-40 w-70 border rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-3 grow">
                        {" "}
                        <div className="flex gap-4 mb-4 "><TowerControl className="text-cyan-500"/>
                            <p className="font-bold">Complete Control: </p>{" "}
                        </div>{" "}
                        <p className="text-md">
                            {" "}
                            Easily Add, Edit, or Delete any application entry in seconds. Keep
                            your list current and accurate.
                        </p>
                    </div>
                    <div className="h-40 w-70 border rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-3 grow">
                        {" "}
                        <div className="flex gap-4 mb-4 ">
                            {" "}
                            <Filter  className="text-cyan-400"/> <p className="font-bold ">Smart Filtering: </p>
                        </div>
                        <p className="text-md">
                            Quickly find what you need. Filter your applications instantly by
                            Status, Company, or Application Date.{" "}
                        </p>
                    </div>
                    <div className="h-40 w-70 border rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-2 grow ">
                        {" "}
                        <div className="flex gap-4 mb-4 ">
                            <Calendar className="text-cyan-400" /> <p className="font-bold">Stay Ahead of Deadlines: </p>
                        </div>
                        <p className="text-md">
                            {" "}
                            Use the intuitive Calendar View to visualize all upcoming
                            deadlines, follow-ups, and scheduled interviews. Never miss an
                            opportunity!
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Layout;
