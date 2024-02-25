import { Link, router } from "@inertiajs/react";
import React from "react";
import ModalTambahPembiayaan from "./AddPropertyModal";

const TablePembiayaan = ({ meta, pembiayaan, opsi_pembiayaan, properti }) => {

    const deleteConfirm = (id) => (e) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus pembiayaan ini?")) {
            router.delete(`/pembiayaan/delete/${id}`, {
                onSuccess: () => {

                },
            });


        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <h1 className="text-xl font-bold">Pembiayaan</h1>
                <button
                    onClick={() => window.modal_tambah_pembiayaan.showModal()}
                    className="btn btn-warning"
                >
                    <i className="fas fa-edit"></i>
                    Tambah Opsi Pembiayaan
                </button>
            </div>

            <div className="overflow-x-auto bg-white shadow mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Jenis</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pembiayaan.map((pembiayaan, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{pembiayaan.jenis_pembiayaan.jenis}</td>
                                <td className="flex flex-col md:flex-row  md:gap-2 items-center justify-center">
                                    <button
                                        onClick={deleteConfirm(pembiayaan.id)}
                                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           <ModalTambahPembiayaan properti={properti} opsi_pembiayaan={opsi_pembiayaan} />
        </>
    );
};

export default TablePembiayaan;
