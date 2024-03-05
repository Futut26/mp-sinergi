import React, { useState } from "react";
import FormTambahTipeUnit from "./FormTambahTipeUnit";
import FormUpdateTipeUnit from "./FormUpdateTipeUnit";
import { useForm } from "@inertiajs/react";

const TableTipeUnit = ({ tipe_unit, kd_properti }) => {
    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    const [modalUpdate, setModalUpdate] = useState(false);

    const closeModalUpdate = () => {
        setModalUpdate(false);
    };

    const [tipeUnitSelected, setTipeUnitSelected] = useState([null]);

    const openModalUpdate = (e, item) => {
        e.preventDefault();
        setModalUpdate(true);
        setTipeUnitSelected(item);
    }

    const {delete : destroy, processing} = useForm();


    const deleteTipeUnit = (e, kd_tipe) => {
        e.preventDefault();
        //confirm delete
        if(confirm("Apakah anda yakin ingin menghapus tipe ini?")){
            destroy(route('tipe-unit.destroy', kd_tipe), {
                preserveScroll: true,
                onSuccess: () => {
                    window.scrollTo(0, 0);
                }
            });
        }
    }


    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <h1 className="text-xl font-bold">Tipe Unit</h1>
                    <button
                        onClick={() => setModal(true)}
                        className="btn btn-warning"
                    >
                        <i className="fas fa-edit"></i>
                        Tambah Tipe
                    </button>
                </div>

                <div className="overflow-x-auto bg-white shadow mt-4 w-full">
                    <table className="table table-xs ">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>No</th>
                                <th>Nama Tipe</th>
                                <th>Harga</th>
                                <th>Jumlah Kavling</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {/* body */}
                        <tbody>
                            {tipe_unit.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{item.nama_tipe}</td>
                                    <td>
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        }).format(item.harga)}
                                    </td>
                                    <td>
                                        {
                                            item.kavling.length
                                        }
                                    </td>

                                    <td className="flex flex-wrap gap-2 justify-center">
                                        <button
                                            onClick= {(e) => openModalUpdate(e, item) }
                                            className="btn btn-primary"
                                        >
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button
                                            onClick={(e) => deleteTipeUnit(e, item.kd_tipe)}
                                            className="btn btn-danger">
                                            <i className="fas fa-trash"></i>
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* modal tambah */}
                <FormTambahTipeUnit
                    modalTambah={modal}
                    kd_properti={kd_properti}
                    closeModal={closeModal}
                />

                {/* modal edit */}


                <FormUpdateTipeUnit
                        modalUpdate={modalUpdate}
                        closeModalUpdate={closeModalUpdate}
                        tipeUnitSelected={tipeUnitSelected}
                        kd_properti={kd_properti}
                />

            </div>
        </div>
    );
};

export default TableTipeUnit;
