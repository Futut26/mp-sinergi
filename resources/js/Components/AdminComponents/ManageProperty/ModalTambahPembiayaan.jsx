import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

const ModalTambahPembiayaan = ({ opsi_pembiayaan, properti }) => {
    const { data, setData, post, errors, reset } = useForm({
        id_jenis_pembiayaan: "",
        kd_properti: "",
    });

    useEffect(() => {
        setData({
            kd_properti: properti.kd_properti || "",
        });
    }, [properti]);

    const submitHandler = (e) => {
        e.preventDefault();
        post(route("pembiayaan.store"));
        window.modal_tambah_pembiayaan.close();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

            setData((prevData) => ({ ...prevData, [name]: value }));
    };



    console.log("opsi", opsi_pembiayaan);
    return (
        <div>
            <dialog id="modal_tambah_pembiayaan" className="modal">
                <div className="modal-box">
                    <div method="dialog">
                        <button
                            onClick={() =>
                                window.modal_tambah_pembiayaan.close()
                            }
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>


                        <form onSubmit={submitHandler}>
                            <div className="form-control">
                                <label className="label">
                                    {opsi_pembiayaan.length > 0 ? (
                                    <span className="label-text">
                                        Pilih Jenis Pembiayaan yang ingin
                                        ditambahkan
                                    </span>
                                    ) : (
                                        <span className="label-text">
                                            Semua Jenis Pembiayaan sudah
                                            ditambahkan
                                        </span>
                                    )}
                                </label>
                                {/* cek apakah opsi_pembayaran tidak kosong kalau tidak isi dengan select kalau kosong isi dengan keterangan opsi pembayaran sudah dipilih semua */}

                                    <select
                                        name="id_jenis_pembiayaan"
                                        id="id_jenis_pembiayaan"
                                        onChange={handleChange}
                                        value={data.id_jenis_pembiayaan}
                                        className="select select-bordered select-primary w-full max-w-xs"
                                        disabled={opsi_pembiayaan.length < 1}
                                    >
                                        <option value="">
                                            Pilih Jenis Pembiayaan
                                        </option>
                                        {opsi_pembiayaan.map((item) => (
                                            <option
                                                key={item.id}
                                                value={
                                                    item.id
                                                }
                                            >
                                                {item.jenis}
                                            </option>
                                        ))}
                                    </select>

                                <InputError message={errors.id_jenis_pembiayaan} className="mt-2" />
                            </div>

                            <div className="form-control mt-4">
                                <button
                                    disabled={opsi_pembiayaan.length < 1}
                                    className="btn btn-primary"
                                >
                                    Tambahkan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalTambahPembiayaan;
