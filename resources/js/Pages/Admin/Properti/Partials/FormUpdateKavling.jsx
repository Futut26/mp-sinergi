import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

const FormUpdateKavling = ({ kavling }) => {
    const { data, setData, errors, post, reset, recentlySuccessful } = useForm({
        kd_kavling: "",
        nama_unit: "",
        status:"",
    });
    useEffect(() => {
        if (kavling) {
            setData((prevData) => ({
                ...prevData,
                kd_kavling: kavling.kd_kavling || "",
                nama_unit: kavling.nama_unit || "",
                status: kavling.status || "",
            }));
        }
    }, [kavling]);

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("kavling.update", kavling.kd_kavling));
        const modal = document.getElementById("modal_update_kavling");
        modal.click();
    };
    return (
        <div>
            <input type="checkbox" id="modal_update_kavling" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Edit Data Kavling {kavling.nama_unit} </h3>
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
                                    <InputError
                                        message={errors.nama_unit}
                                        className="mt-2"
                                    />
                                </label>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">
                                            Status
                                        </span>
                                    </div>
                                    <select
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        className="select select-bordered select-primary w-full"
                                    >
                                        <option value="Tersedia">Tersedia</option>
                                        <option value="Terjual">Terjual</option>
                                    </select>
                                    <InputError
                                        message={errors.status}
                                        className="mt-2"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="mt-4 w-full flex justify-end gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Update
                            </button>

                            <label
                                htmlFor="modal_update_kavling"
                                className="btn btn-secondary"
                            >
                                Close
                            </label>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="modal_update_kavling">
                    Close
                </label>
            </div>
        </div>
    );
};

export default FormUpdateKavling;
