import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { useEffect } from "react";

const FormUpdateImage = ({ selectedImage, tipe_unit }) => {
    const [editActive, setEditActive] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    const {
        data,
        post,
        setData,
        errors,
        reset,
        recentlySuccessful,
        processing,
    } = useForm({
        id: "",
        kd_properti: "",
        kd_tipe: "",
        jenis_file: "",
        judul: "",
        url: "",
    });

    useEffect(() => {
        if (selectedImage) {
            setData((prevData) => ({
                ...prevData,
                id: selectedImage.id || "",
                kd_properti: selectedImage.kd_properti || "",
                kd_tipe: selectedImage.kd_tipe || "",
                jenis_file: selectedImage.jenis_file || "",
                judul: selectedImage.judul || "",
                url: selectedImage.url || "",
            }));
            setImagePreview(selectedImage.url);
        }
    }, [selectedImage]);

    //console.log(data);
    //console.log(selectedImage);

    // function for preview image
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
        //console.log(data);
        post(route("galeri.update", selectedImage.id), {
            preserveScroll: true,
            onSuccess: () => {
                setEditActive(false);
                reset();
                document.getElementById("preview_image_modal").checked = false;
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
        

    };

    return (
        <div>
            <input
                type="checkbox"
                id="preview_image_modal"
                className="modal-toggle"
            />
            <div className="modal" role="dialog">
                <div className="modal-box rounded-none w-full">
                    <div className="flex w-full items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold">
                            {selectedImage?.judul}
                        </h3>
                        <div className="ml-auto">
                            <button
                                className="btn btn-warning"
                                onClick={() => setEditActive(!editActive)}
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                        </div>
                    </div>

                    {editActive ? (
                        <form
                            onSubmit={onSubmit}
                            className="w-full grid grid-cols-1 gap-2"
                        >
                            <div>
                                <label className="w-full flex flex-col gap-2">
                                    <div className="label">
                                        <span className="label-text">
                                            Image
                                        </span>
                                    </div>

                                    <img
                                        src={imagePreview}
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
                                        <span className="label-text">
                                            Judul
                                        </span>
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
                                        <option value={0}>
                                            Pilih Tipe Unit
                                        </option>
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
                                        setEditActive(false);
                                        document.getElementById(
                                            "preview_image_modal"
                                        ).checked = false;
                                    }}
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update
                                </button>
                            </div>

                        </form>
                    ) : (
                        <img
                            src={selectedImage?.url}
                            alt=""
                            className="object-contain"
                        />
                    )}
                </div>
                <label
                    onClick={() => {
                        setEditActive(false);
                    }}
                    className="modal-backdrop"
                    htmlFor="preview_image_modal"
                >
                    Close
                </label>
            </div>
        </div>
    );
};

export default FormUpdateImage;
