import React from "react";
import Navbar from "../Components/UserComponents/Navbar";
import Footer from "@/Components/UserComponents/Footer";
import Hero from "@/Components/UserComponents/Hero";
import { Head, Link, usePage } from "@inertiajs/react";
import NotifKonsumen from "@/Components/UserComponents/NotifKonsumen";

export default function UserLayout({ children, auth, title }) {
    const pathname = window.location.pathname;
    console.log(auth);

    return (
        <>
            {title && <Head title={title} />}
            {/* cek apakah ada data konsumen yang kosong jika ada salah satu filed data konsumen maka munculkan NotifKonsumen */}
            { auth.user  ? <NotifKonsumen nama_lengkap={auth.user.nama_lengkap} />: ""}
            <div>
                <Navbar auth={auth} />
                {pathname === "/" && <Hero />}
                <div className="lg:px-32 md:px-10 px-5 ">{children}</div>
                <Footer />
            </div>
        </>
    );
}
