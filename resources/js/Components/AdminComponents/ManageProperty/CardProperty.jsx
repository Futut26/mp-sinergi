import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import SearchProperty from "./SearchProperty"; 

const CardProperty = ({ properti }) => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [idProperty, setIdProperty] = useState("");
    const jenis_properti = usePage().props.jenis_properti.jenis_properti;
    const Kategori_properti = usePage().props.kategori_properti;

    console.log(properti);

    const handleDelete = (kd_properti) => {
        setConfirmingUserDeletion(true);
        setIdProperty(kd_properti);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
    };

    const { delete: destroy, processing } = useForm();

    const deleteProeprty = () => {
        destroy(route("delete_property", idProperty), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal(), window.scrollTo(0, 0);
            },
        });
    };

    return (
        <>
            <SearchProperty
                jenis_properti={jenis_properti}
                kategori_properti={Kategori_properti}
            />
            <div>
                <Link href="/add-property" className="btn btn-primary">
                    Tambah Properti
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-5 ">
                {properti.data.map((item, index) => (
                    <div
                        key={index}
                        className="card w-full  bg-base-100 shadow-xl h-auto"
                    >
                        <div className="flex w-full h-12 p-2 justify-end">
                            <img
                                className="w-auto h-full object-contain"
                                src={item.logo}
                                alt="Shoes"
                            />
                        </div>

                        <figure className="h-52 bg-slate-500">
                            <img
                                className="w-full h-full object-contain backdrop-blur-3xl"
                                src={item.thumbnail}
                                alt={item.nama_properti}
                            />
                        </figure>

                        <div className="w-full bg-primary py-3 flex items-center">
                            <p className="text-white px-4 text-sm">
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(item.pinvalue_min)}
                                -
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(item.pinvalue_max)}
                            </p>
                        </div>

                        <div className="p-3">
                            <h2 className="card-title">{item.nama_properti}</h2>
                            <p>{item.lokasi}</p>
                            {/* deskripsi mengandung tag html */}
                            {/* cek kalo ada data yang mengandung elemen ul tambahkan classname list-disc kalau ada data nya mengandung elemen ol classname  */}
                            <article className="truncate ">
                                {parse(item.deskripsi)}
                            </article>
                            {item.tipe_unit.length === 0 ? (
                                <p className="text-red-500">
                                    Data Properti Belum Lengkap
                                </p>
                            ) : (
                                ""
                            )}
                        </div>


                        <div className="flex flex-col gap-2 h-full justify-end p-3">

                            {item.status === "active" && item.tipe_unit.length !== 0 ? (

                                <button
                                className="btn btn-primary"
                                disabled={item.tipe_unit.length === 0}
                            >
                                Set Nonactive
                                <i className="fas fa-share-square"></i>
                            </button>

                            ) : (
                                <button
                                className="btn btn-secondary"
                                disabled={item.tipe_unit.length === 0}
                            >
                                Set Active
                                <i className="fas fa-share-square"></i>
                            </button>
                            )}

                            <Link
                            href={route("edit_property", item.kd_properti)}
                            className="btn btn-secondary">
                                Edit Properti
                                {/* tambahkan icon edit */}
                                <i
                                    className="fas fa-edit"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                            <button
                                onClick={() => handleDelete(item.kd_properti)}
                                className="btn btn-danger"
                            >
                                Hapus Properti
                                {/* tambahkan icon hapus */}
                                <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Apakah Anda yakin ingin menghapus properti ini?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Semua data yang terkait dengan properti ini akan
                        dihapus.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Batal
                        </SecondaryButton>

                        <DangerButton
                            onClick={deleteProeprty}
                            className="ms-3"
                            disabled={processing}
                        >
                            Hapus
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CardProperty;
