import MenuDashboard from "@/Utils/Menu";
import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";


const Sidebar = ({ isSidebarOpen, auth }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const { url } = usePage();

    useEffect(() => {
        const currentMenu = MenuDashboard.reduce((acc, curr) => {
            const menu = curr.menu.find((item) => item.url === url);
            if (menu) {
                acc = menu;
            }
            return acc;
        }, null);

        setActiveMenu(currentMenu);
    }, [url]);

    return (
        <aside className={`h-screen lg:w-80 shadow-md w-[100%] lg:relative absolute z-10 ${isSidebarOpen ? "transform translate-x-0 " : "lg:translate-x-0 transform -translate-x-full"} lg:flex transition-transform duration-300 ease-in-out`}>
            <div className="lg:w-full md:w-[40%] w-[75%] bg-white h-full">
                <div className="px-5 py-5">
                    <ul className="flex flex-col gap-3 w-full">
                        {MenuDashboard.map((menuRole, index) => {
                            if (menuRole.role === auth.user?.role.nama_role) {
                                return menuRole.menu.map((menu, subIndex) => (
                                    <Link key={subIndex} href={menu.url} className="cursor-pointer">
                                        <li
                                            className={`font-medium w-full text-gray-600 p-2 flex gap-2 items-center hover:text-primary hover:border-b-2 hover:border-primary ${menu === activeMenu ? "text-primary border-b-2 border-primary" : ""}`}
                                        >
                                            <i className={`text-xl ${menu.icon}`}></i>
                                            {menu.name}
                                        </li>
                                    </Link>
                                ));
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
