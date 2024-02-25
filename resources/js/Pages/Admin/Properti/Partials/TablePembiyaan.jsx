import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const TablePembiyaan = ({ pembiayaan, jenis_pembiayaan }) => {
    const [modal, setModal] = useState(false);
    const properti = usePage().props.properti;
    const [modalDelete, setModalDelete] = useState(false);

    const jenisPembiayaan = jenis_pembiayaan.filter((item) => {
        return !pembiayaan.some(
            (item2) => item2.id_jenis_pembiayaan === item.id
        );
    });

    const [id_pembiyaan, setIdPembiyaan] = useState("");
    const {delete : destroy} = useForm();

    const deletePembiayaan = () => {
        destroy(route("delete_pembiayaan", id_pembiyaan), {
            preserveScroll: true,
            onSuccess: () => {
                closeModalDelete(), window.scrollTo(0, 0);
            },
        });
    }

    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        id_jenis_pembiayaan: "",
        kd_properti: properti.kd_properti,
    });

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const openModalDelete = (id) => {
        setModalDelete(true);
        setIdPembiyaan(id);
    };

    const closeModalDelete = () => {
        setModalDelete(false);
    };



    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("store_pembiayaan"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal();
                reset("id_jenis_pembiayaan");
                window.scrollTo(0, 0);
            },
        });
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <h1 className="text-xl font-bold">Pembiayaan</h1>
                <button onClick={openModal} className="btn btn-warning">
                    <i className="fas fa-edit"></i>
                    Tambah Opsi Pembiayaan
                </button>
            </div>

            <div className="overflow-x-auto bg-white shadow mt-4 md:w-[50%] w-full">
                <table className="table table-xs ">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Jenis</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody>
                        {pembiayaan.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{item.jenis_pembiayaan.jenis}</td>
                                <td>
                                    <button
                                    onClick={() => openModalDelete(item.id)}
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

            <Modal show={modal} onClose={closeModal}>
                <form onSubmit={onSubmit} className="p-4 space-y-4 bg-base-200">
                    <div className="form-control">
                        <label className="label">
                            {jenisPembiayaan.length > 0 ? (
                                <span className="label-text">
                                    Pilih Jenis Pembiayaan yang ingin
                                    ditambahkan
                                </span>
                            ) : (
                                <span className="label-text">
                                    Semua Jenis Pembiayaan sudah ditambahkan
                                </span>
                            )}
                        </label>
                        {/* cek apakah opsi_pembayaran tidak kosong kalau tidak isi dengan select kalau kosong isi dengan keterangan opsi pembayaran sudah dipilih semua */}

                        <select
                            name="id_jenis_pembiayaan"
                            id="id_jenis_pembiayaan"
                            className="select select-bordered select-primary w-full max-w-xs"
                            disabled={jenisPembiayaan.length < 1}
                            value={data.id_jenis_pembiayaan}
                            onChange={(e) =>
                                setData("id_jenis_pembiayaan", e.target.value)
                            }
                        >
                            <option value="">Pilih Jenis Pembiayaan</option>
                            {jenisPembiayaan.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.jenis}
                                </option>
                            ))}
                        </select>

                        <InputError
                            error={errors.id_jenis_pembiayaan}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex w-full justify-end gap-2 mt-4 ">


                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-secondary"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            disabled={jenisPembiayaan.length < 1 || processing}
                            className="btn btn-primary"
                        >
                            Tambahkan
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal show={modalDelete} onClose={closeModalDelete}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Apakah Anda yakin ingin menghapus data pembiayaan pada properti {properti.nama_properti} ?
                    </h2>
                    <div className="flex w-full justify-end gap-2 mt-4 ">
                        <button
                            type="button"
                            onClick={closeModalDelete}
                            className="btn btn-secondary"
                        >
                            Batal
                        </button>
                        <button

                            type="button"
                            onClick={
                                deletePembiayaan
                            }
                            className="btn btn-danger"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TablePembiyaan;
