import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const FormTambahVideo = ({ tipe_unit }) => {
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
        jenis_file: "video",
        judul: "",
        url: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("video.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                document.getElementById("modal_tambah_video").checked = false;
            },
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="modal_tambah_video"
                className="modal-toggle"
            />
            <div className="modal" role="dialog">
                <div className="modal-box rounded-none w-full">
                    <div className="flex w-full items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold">Tambah Video</h3>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="w-full grid grid-cols-1 gap-2"
                    >
                        <div>
                            <label className="w-full flex flex-col gap-2">
                                <div className="label">
                                    <span className="label-text">
                                        URL YouTube
                                    </span>
                                </div>

                                <input
                                    type="text"
                                    value={data.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                    className="input input-bordered input-primary w-full"
                                    placeholder="URL YouTube"
                                />

                                {data.url && (
                                    <ReactPlayer
                                        width="100%"
                                        height="100%"
                                        url={data.url}
                                    />
                                )}
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
                                        "modal_tambah_video"
                                    ).checked = false;
                                    // reset form 
                                    reset();
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
                <label 
                    onClick={() => {
                        reset();
                    }}
                className="modal-backdrop" htmlFor="modal_tambah_video">
                    Close
                </label>
            </div>
        </div>
    );
};

export default FormTambahVideo;
