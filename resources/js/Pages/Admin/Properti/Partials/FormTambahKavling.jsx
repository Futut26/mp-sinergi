import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

const FormTambahKavling = ({
    kd_tipe,
    modalTambahKavling,
    closeModalTambahKavling,
}) => {


    const { data, setData, errors, post, reset } = useForm({
        kd_tipe: "",
        nama_unit: "",
        status: "Tersedia",
    });

    useEffect(() => {
        if (kd_tipe) {
            setData("kd_tipe", kd_tipe);
        }
    }, [kd_tipe]);

    const onSubmit = (e) => {
        e.preventDefault();
       // console.log(data);
        post(route("kavling.store"), {
            preserveScroll: true,
            onSuccess: () => {

                closeModalTambahKavling();
                reset("nama_unit");
            },
        });
    }

    return (
        <Modal show={modalTambahKavling} onClose={closeModalTambahKavling}>
            <div className="p-4">
                <h1 className="text-xl font-bold">Tambah Kavling</h1>
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
                                    name="nama_unit"
                                    value={data.nama_unit}
                                    onChange={(e) =>
                                        setData("nama_unit", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Nama Unit"
                                    className="input input-bordered input-primary w-full"
                                />
                                <InputError message={errors.nama_unit} />
                            </label>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-3 w-full justify-end">
                        <button
                            type="button"
                            onClick={closeModalTambahKavling}
                            className="btn btn-danger"
                        >
                            <i className="fas fa-times"></i>
                            Batal
                        </button>
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-save"></i>
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default FormTambahKavling;
