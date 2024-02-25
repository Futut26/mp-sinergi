import { Link } from "@inertiajs/react";
import React, { useState, useEffect, useRef } from "react";

const Header = ({ auth, toggleSidebar, isSidebarOpen }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    // Menutup dropdown ketika pengguna mengklik di luar area dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeDropdown();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md h-auto w-full flex justify-between items-center sticky top-0 z-50 px-5 md:px-10">
            <div className="w-auto flex h-16 md:h-20 gap-2">
                <button
                    onClick={toggleSidebar}
                    className="text-3xl lg:hidden block"
                >
                    <i
                        className={`bi ${
                            isSidebarOpen ? "bi-x-lg text-2xl" : "bi-list"
                        }`}
                    ></i>
                </button>
                <Link href="/admin">
                    <img
                        className="h-full w-full object-contain"
                        src="/assets/img/konten/Logo.png"
                        alt=""
                    />
                </Link>
            </div>
            <div
                ref={dropdownRef}
                className="w-auto flex h-full justify-end items-center gap-2 relative"
                onClick={toggleDropdown}
            >
                <h1 className="md:block hidden">
                    Welcome,{" "}
                    <span className="font-semibold ">
                        {auth.user.nama_lengkap}
                    </span>
                </h1>
                {auth.user.avatar ? (
                    <img
                        onClick={toggleDropdown}
                        src={auth.user.avatar}
                        className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 object-cover "
                        alt="avatar"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <i
                        onClick={toggleDropdown}
                        className="bi bi-person-circle text-3xl"
                    ></i>
                )}

                {/* Menu Dropdown */}
                {isDropdownOpen && (
                    <ul className="absolute top-10 right-0 bg-white p-2 shadow">
                        <li>
                            <Link
                                href={`/profile`}
                                className="text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                method="post"
                                href={route("logout")}
                                className="text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded"
                                as="button"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;
