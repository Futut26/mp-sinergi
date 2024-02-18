import React from "react";
import UserLayout from "../../Layouts/UserLayout";
import SectionHero from "@/Components/UserComponents/Home/SectionHero";
import { Head, Link } from "@inertiajs/react";
import SectionNewProperty from "@/Components/UserComponents/Home/SectionNewProperty";

export default function index({ auth, title }) {
    return (
        <>
        <Head title="Home" />
        <UserLayout auth={auth} title={title}>
            <div className="flex gap-10 flex-col w-full py-10">
                <SectionHero />
                <SectionNewProperty />
            </div>
        </UserLayout>
        </>
    );
}
