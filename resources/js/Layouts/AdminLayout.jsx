import FlashMessage from "@/Components/AdminComponents/FlashMessage";
import Header from "@/Components/AdminComponents/Header";
import Sidebar from "@/Components/AdminComponents/Sidebar"
import { Head, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const AdminLayout = ({ children, title, auth }) => {
    const { flash } = usePage().props;
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };



    return (
        <>
            {title && <Head title={title} />}
            <div className="h-screen w-full overflow-hidden">
                {/* jika user rolenya konsumen tampilkan component navab */}
                <Header auth={auth} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
                <div className="w-full h-full flex">
                    <Sidebar isSidebarOpen={isSidebarOpen} auth={auth}/>
                    <main className={`h-auto overflow-auto bg-blue-gray-50 w-full p-4 md:p-8  ${isSidebarOpen ? "blur-sm  brightness-50 " : ""}`}>
                    <h1 className="text-xl md:text-2xl font-semibold ">{title}</h1>
                    {flash && <FlashMessage flash={flash} />}
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
