    import { Link, usePage } from "@inertiajs/react";
    import React, { useEffect, useState } from "react";

    const Navbar = ({ auth }) => {
        const [isOpen, setIsOpen] = useState(false);
        const { jenis_properti } = usePage().props;
        console.log(auth);

        return (
            <div className="">
                <nav
                    className={`w-full md:h-20 h-14 bg-white shadow-md  flex md:px-10 lg:px-32 fixed top-0 z-50 px-2 `}
                >
                    <Link href="/" className="w-auto">
                        <figure className="h-full py-2">
                            <img
                                className="h-full"
                                src="/assets/img/konten/Logo.png"
                                alt="Mp-Project"
                            />
                        </figure>
                    </Link>

                    <div className="w-auto ml-auto md:items-center hidden md:flex">
                        <ul className="flex items-center gap-8">
                            <div className="dropdown dropdown-hover dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="cursor-pointer hover:text-secondary hover:font-bold hover:border-b-2 border-secondary m-1"
                                >
                                    Properti <i className="fas fa-chevron-down"></i>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-white w-60 h-auto"
                                >
                                    <div className="flex gap-2 flex-row">
                                        {jenis_properti.jenis_properti.map(
                                            (jenis, index) => (
                                                <div
                                                    key={index}
                                                    className="w-full flex flex-col"
                                                >
                                                    <label className="text-base font-bold">
                                                        {jenis.jenis}
                                                    </label>
                                                    <div className="flex flex-col gap-2">
                                                        {jenis.kategori_properti.map(
                                                            (sub, index) => (
                                                                <Link
                                                                    key={index}
                                                                    href={`/properti/${sub.slug}`}
                                                                    className="text-sm hover:text-secondary"
                                                                >
                                                                    {sub.kategori}
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-hover   ">
                                <label
                                    tabIndex={1}
                                    className="cursor-pointer hover:text-secondary hover:font-bold hover:border-b-2 border-secondary m-1"
                                >
                                    KPR <i className="fas fa-chevron-down"></i>
                                </label>
                                <ul
                                    tabIndex={1}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 "
                                >
                                    <div className="w-full">
                                        <li className="w-full">
                                            <Link href="#">Tentang KPR</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Simulasi KPR</Link>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <li>
                                <Link
                                    className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                    href="#"
                                >
                                    Artikel
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-secondary hover:font-bold hover:border-b-2 border-secondary"
                                    href="#"
                                >
                                    Tentang Kami
                                </Link>
                            </li>

                            <li>
                                {auth.user ? (
                                    <div className="dropdown dropdown-hover ">
                                        {auth.user.avatar ? (
                                            <img
                                            tabIndex={1}
                                            src={auth.user?.avatar}
                                            className="w-10 h-10 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2  "
                                            alt="avatar"
                                            referrerPolicy="no-referrer"
                                        />
                                        ) : (
                                        <i
                                            tabIndex={1}
                                            className="fas fa-user-circle text-3xl text-primary"

                                        ></i>
                                        )}
                                        <ul
                                            tabIndex={1}
                                            className="dropdown-content  z-[1] menu p-2 shadow rounded-md bg-white w-36 "
                                        >
                                            <div className="w-full">
                                                <li className="w-full">
                                                    <Link href={route('profile.edit')}>Profile</Link>
                                                </li>
                                                <li>
                                                    <Link href="#">Transaksi</Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        method="post"
                                                        href={route("logout")}
                                                        as="button"
                                                    >
                                                        Logout
                                                    </Link>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                ) : (
                                    <Link
                                        className="btn btn-secondary "
                                        href="/login"
                                    >
                                        <i className="fas fa-sign-out-alt"></i>Login/Registrasi
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto ml-auto md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-full"
                        >
                            <i
                                className={`${
                                    isOpen ? "fas fa-times" : "fas fa-bars"
                                }`}
                            ></i>
                        </button>
                    </div>
                </nav>

                <div
                    className={`fixed top-[6%] right-0 h-screen w-screen z-30 transform transition-transform duration-500 ${
                        isOpen ? "translate-x-[25%] " : "translate-x-full"
                    }`}
                >
                    <div
                        className={`bg-white   h-screen w-[75%] ${
                            isOpen ? "shadow-lg" : ""
                        }`}
                    >
                        {/* icon close */}
                        <div className="">
                            {/* menu */}
                            <div className="flex flex-col gap-5 p-5 items-center">
                                <ul className="w-full">
                                    <Link href="/">
                                        <li className="p-2 text-center w-full hover:bg-red-100">
                                            Beranda
                                        </li>
                                    </Link>

                                    <Link href="/">
                                        <li className="p-2 text-center w-full hover:bg-red-100">
                                            Tentang Kami
                                        </li>
                                    </Link>

                                    <Link href="#contact">
                                        <li className="p-2 text-center w-full hover:bg-red-100">
                                            Layanan
                                        </li>
                                    </Link>

                                    <Link href="#contact">
                                        <li className="p-2 text-center w-full hover:bg-red-100">
                                            Project
                                        </li>
                                    </Link>

                                    <Link href="#contact">
                                        <li className="p-2 text-center w-full hover:bg-red-100">
                                            Contact
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Navbar;
