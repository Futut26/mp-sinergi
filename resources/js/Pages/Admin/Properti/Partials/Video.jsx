import React from "react";
import ReactPlayer from "react-player";
import FormTambahVideo from "./FormTambahVideo";
import { useState } from "react";
import FormUpadateVideo from "./FormUpadateVideo";
import { useForm } from "@inertiajs/react";

const Video = ({ video, tipe_unit }) => {
    const [videoSelected, setVideoSelected] = useState([]);
    const {delete: destroy} = useForm();

    const modalTambahVideo = (e) => {
        e.preventDefault();
        document.getElementById("modal_tambah_video").checked = true;
    };

    const deleteVideo = (id) => {
        if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
            destroy(route("galeri.destroy", id), {
                preserveScroll: true,
            });
        }
    }

    return (
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
            {video.map((item, index) => (
                <div
                    key={index}
                    className="h-auto gap-2 flex flex-col p-3 shadow-lg"
                >
                    <h1>{item.judul}</h1>
                    <ReactPlayer width="100%" height="100%" url={item.url} />

                    <div className="w-full flex gap-2 justify-end">
                        {/* create button edit dan hapus */}
                        <button
                            onClick={() => {
                                setVideoSelected(item);
                                document.getElementById(
                                    "modal_edit_video"
                                ).checked = true;
                            }}
                            className="btn btn-primary"
                        >
                            <i className="fa fa-edit"></i>
                        </button>

                        <button 
                            onClick={() => deleteVideo(item.id)}
                        className="btn btn-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            ))}

            <div className="rounded-md h-auto gap-2 flex flex-col p-3 shadow-md">
                {/* icon tambah */}
                <button
                    onClick={modalTambahVideo}
                    className="w-full h-full flex justify-center items-center bg-gray-300"
                >
                    <i className="fa fa-plus md:text-5xl text-xl text-gray-500"></i>
                </button>
            </div>

            <FormTambahVideo tipe_unit={tipe_unit} />

            <FormUpadateVideo video={videoSelected} tipe_unit={tipe_unit} />
        </div>
    );
};

export default Video;
