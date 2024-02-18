import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

const Index = ({ auth, title }) => {
    const properti = usePage().props.properti;

    const [propertyActive, setPropertyActive] = useState(true);
    const [categoryPropertyActive, setCategoryPropertyActive] = useState(false);
    const [jenisPropertyActive, setJenisPropertyActive] = useState(false);

    const toggleProperty = () => {
        setPropertyActive(!propertyActive);
        setCategoryPropertyActive(false);
        setJenisPropertyActive(false);

    };
    const toggleCategoryProperty = () => {
        setCategoryPropertyActive(!categoryPropertyActive);
        setJenisPropertyActive(false);
        setPropertyActive(false);

    };
    const toggleJenisProperty = () => {
        setJenisPropertyActive(!jenisPropertyActive);
        setPropertyActive(false);
        setCategoryPropertyActive(false);

    };


    return (
        <AdminLayout auth={auth} title={title} >
            <div className="mb-10">
                <header className="h-auto px-4 py-2 mt-5 w-full border bg-white shadow-sm ">
                    <ul className="flex md:gap-10 md:justify-start items-center justify-around font-medium">
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                propertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleProperty}
                        >
                            Properti
                        </li>
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                categoryPropertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleCategoryProperty}
                        >
                            Kategori Properti
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                jenisPropertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleJenisProperty}
                        >
                            Jenis Properti
                        </li>

                    </ul>
                </header>
            </div>
        </AdminLayout>
    );
};

export default Index;
