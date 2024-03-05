import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formatToRupiah, parseFromRupiah } from "@/Function/RupiahFormate";

const FormTambahTipeUnit = ({ modalTambah, kd_properti, closeModal }) => {
    const [formatHarga, setFormatHarga] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "harga") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setFormatHarga(formatted);
        }
    };
    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        kd_properti: kd_properti,
        nama_tipe: "",
        harga: "",
        spesifikasi: "",
        fasilitas: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log("data", data);
        post(route("tipe_unit.store"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal(), window.scrollTo(0, 0);
            },
        });
    };

    return (
        <div>
            <Modal show={modalTambah} onClose={closeModal}>
                <div className="p-4">
                    <h1 className="text-xl font-bold">Tambah Tipe Unit</h1>
                    <form
                        onSubmit={onSubmit}
                    >
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="mt-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">
                                            Nama Unit
                                        </span>
                                    </div>
                                    <input
                                        name="nama_tipe"
                                        value={data.nama_tipe}
                                        onChange={(e) =>
                                            setData("nama_tipe", e.target.value)
                                        }
                                        type="text"
                                        placeholder="Nama Unit"
                                        className="input input-bordered input-primary w-full"
                                    />
                                    <InputError message={errors.nama_tipe} />
                                </label>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">
                                            Harga
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name="harga"
                                        placeholder="Harga"
                                        className="input input-bordered input-primary w-full"
                                        value={formatHarga}
                                        onChange={handleChange}
                                    />
                                    <InputError message={errors.harga} />
                                </label>
                            </div>
                        </div>

                        <div className="w-full flex gap-4 flex-col">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Spesifikasi
                                    </span>
                                </div>
                                <ReactQuill

                                    theme="snow"
                                    id="spesifikasi"
                                    name="spesifikasi"
                                    className="h-40 mb-9 "
                                    value={data.spesifikasi}
                                    onChange={(value) => {
                                        setData("spesifikasi", value);
                                    }}
                                />
                                <InputError message={errors.spesifikasi} />
                            </label>

                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Fasilitas
                                    </span>
                                </div>
                                <ReactQuill
                                    theme="snow"
                                    id="fasilitas"
                                    name="fasilitas"
                                    className="h-40 mb-9"
                                    value={data.fasilitas}
                                    onChange={(value) => {
                                        setData("fasilitas", value);
                                    }}
                                />
                                <InputError message={errors.fasilitas} />
                            </label>
                        </div>

                        <div className="mt-4 flex gap-3 w-full justify-end">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="btn btn-danger"
                            >
                                <i className="fas fa-times"></i>
                                Batal
                            </button>
                            <button
                                disabled={processing}
                                type="submit"
                                className="btn btn-primary"
                            >
                                <i className="fas fa-save"></i>
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default FormTambahTipeUnit;
