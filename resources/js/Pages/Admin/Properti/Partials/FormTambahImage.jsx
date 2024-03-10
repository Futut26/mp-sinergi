import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FormTambahImage = ({ tipe_unit }) => {
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (tipe_unit) {
            setData((prevData) => ({
                ...prevData,
                kd_properti: tipe_unit[0].kd_properti,
            }));
        }
    }, [tipe_unit]);

    const {
        data,
        post,
        setData,
        errors,
        reset,
        recentlySuccessful,
        processing,
    } = useForm({
        kd_properti: "",
        kd_tipe: "",
        jenis_file: "image",
        judul: "",
        url: "",
    });

    const previewImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("galeri.store"), {
            preserveScroll: true, 
            onSuccess: () => {
                reset();
                document.getElementById("modal_tambah_image").checked = false;
            },
        });
       
    };

    return (
        <div>
            <input
                type="checkbox"
                id="modal_tambah_image"
                className="modal-toggle"
            />
            <div className="modal" role="dialog">
                <div className="modal-box rounded-none w-full">
                    <div className="flex w-full items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold">Tambah Image</h3>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="w-full grid grid-cols-1 gap-2"
                    >
                        <div>
                            <label className="w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text">Image</span>
                                </div>

                                <img
                                    src={
                                        imagePreview
                                            ? imagePreview
                                            : "https://via.placeholder.com/150"
                                    }
                                    alt=""
                                    className="w-full h-40 object-contain"
                                />

                                <input
                                    type="file"
                                    className="file-input w-full"
                                    placeholder="Image"
                                    onChange={(e) => {
                                        setData("url", e.target.files[0]);
                                        previewImage(e);
                                    }}
                                />
                            </label>

                            <InputError message={errors.url} />
                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Judul</span>
                                </div>
                                <input
                                    type="text"
                                    value={data.judul}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
                                    className="input input-bordered input-primary w-full"
                                    placeholder="Judul"
                                />
                            </label>
                            <InputError message={errors.judul} />
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        Tipe Unit
                                    </span>
                                </div>
                                <select
                                    value={data.kd_tipe}
                                    onChange={(e) =>
                                        setData("kd_tipe", e.target.value)
                                    }
                                    className="input input-bordered input-primary w-full"
                                >
                                    <option value={0}>Pilih Tipe Unit</option>
                                    {tipe_unit.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.kd_tipe}
                                        >
                                            {item.nama_tipe}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <InputError message={errors.kd_tipe} />
                        </div>

                        <div className="w-full flex gap-2 justify-end">
                            <button
                                type="button"
                                onClick={() => {
                                    document.getElementById(
                                        "modal_tambah_image"
                                    ).checked = false;
                                    setImagePreview("");
                                    reset("url");
                                    reset("judul");
                                    reset("kd_tipe");

                                }}
                                className="btn btn-secondary"
                            >
                                Batal
                            </button>

                            <button type="submit" className="btn btn-primary">
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="modal_tambah_image">
                    Close
                </label>
            </div>
        </div>
    );
};

export default FormTambahImage;
