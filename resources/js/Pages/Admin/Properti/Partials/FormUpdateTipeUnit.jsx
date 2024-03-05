import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { formatToRupiah, parseFromRupiah } from "@/Function/RupiahFormate";
import Modal from "@/Components/Modal";
import { useEffect } from "react";

const FormUpdateTipeUnit = ({
    tipeUnitSelected,
    modalUpdate,
    closeModalUpdate,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "harga") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setHargaRupiah(formatted);
        }
    };
    const [activeEdit, setActiveEdit] = useState(true);

    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        kd_properti: "",
        nama_tipe: "",
        harga: "",
        spesifikasi: "",
        fasilitas: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("tipe-unit.update", tipeUnitSelected.kd_tipe))
    };

    const [hargaRupiah, setHargaRupiah] = useState("");

    if (tipeUnitSelected) {
        useEffect(() => {
            setData((prevData) => ({
                ...prevData,
                kd_properti: tipeUnitSelected.kd_properti || "",
                nama_tipe: tipeUnitSelected.nama_tipe || "",
                harga: tipeUnitSelected.harga,
                spesifikasi: tipeUnitSelected.spesifikasi || "",
                fasilitas: tipeUnitSelected.fasilitas || "",
            }));
            setHargaRupiah(formatToRupiah(tipeUnitSelected.harga) || "");
            if (recentlySuccessful) {
                closeModalUpdate();
                setActiveEdit(true);
                setTimeout(() => {
                    // scroll to top
                    //window.scrollTo({ top: 0, behavior: "smooth" }); not working
                    window.scrollTo(0, 0);


                }, 100);
            }
        }, [tipeUnitSelected, recentlySuccessful]);
    }

    return (
        <Modal show={modalUpdate} onClose={closeModalUpdate}>
            <div className="w-full p-4 ">
                <div className="flex items-center gap-3">
                    {" "}
                    <h1 className="text-xl font-bold">
                        Tipe Unit {tipeUnitSelected.nama_tipe}
                    </h1>
                    <button
                        onClick={() => setActiveEdit(!activeEdit)}
                        className="btn btn-warning hover:text-white"
                    >
                        <i className="fas fa-pen "></i>
                        Edit
                    </button>
                </div>

                <form onSubmit={onSubmit}>
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
                                    disabled={activeEdit}
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
                                    <span className="label-text">Harga</span>
                                </div>
                                <input
                                    disabled={activeEdit}
                                    type="text"
                                    name="harga"
                                    placeholder="Harga"
                                    className="input input-bordered input-primary w-full"
                                    value={hargaRupiah}
                                    onChange={handleChange}
                                />
                                <InputError message={errors.harga} />
                            </label>
                        </div>
                    </div>

                    <div className="w-full flex gap-4 flex-col">
                        <label className="form-control w-full mt-3 ">
                            <div className="label">
                                <span className="label-text">Spesifikasi</span>
                            </div>

                            {activeEdit ? (
                                <div
                                    className="w-full show-list"
                                    dangerouslySetInnerHTML={{
                                        __html: data.spesifikasi,
                                    }}
                                ></div>
                            ) : (
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
                            )}
                            <InputError message={errors.spesifikasi} />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Fasilitas</span>
                            </div>
                            {activeEdit ? (
                                <div
                                    className="w-full"
                                    dangerouslySetInnerHTML={{
                                        __html: data.fasilitas,
                                    }}
                                ></div>
                            ) : (
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
                            )}

                            <InputError message={errors.fasilitas} />
                        </label>
                    </div>

                    <div className="mt-4 flex gap-3 w-full justify-end">
                        <label
                            onClick={() => (
                                closeModalUpdate(), setActiveEdit(true)
                            )}
                            type="button"
                            htmlFor="modal_update_tipe_unit"
                            className="btn btn-danger"
                        >
                            <i className="fas fa-times"></i>
                            Batal
                        </label>
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
            <label className="modal-backdrop" htmlFor="modal_update_tipe_unit">
                Close
            </label>
        </Modal>
    );
};

export default FormUpdateTipeUnit;
