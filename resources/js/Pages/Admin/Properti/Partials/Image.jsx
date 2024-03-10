import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormUpdateImage from "./FormUpdateImage";
import FormTambahImage from "./FormTambahImage";
import { useForm } from "@inertiajs/react";

const Image = ({ image, tipe_unit }) => {
    const [filterImage, setFilterImage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterImage.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setFilterImage(image);
    }, [image]);

    const previewImageModal = (e, item) => {
        e.preventDefault();
        setSelectedImage(item);
        document.getElementById("preview_image_modal").checked = true;
    };

    const modalTambahImage = (e) => {
        e.preventDefault();
        document.getElementById("modal_tambah_image").click();
    };

    const {delete : destroy} = useForm();

    const onDelete = (id) => {
        if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
            destroy(route("galeri.destroy", id), {
                preserveScroll: true,
                onSuccess: () => {
                    const newImage = filterImage.filter((item) => item.id !== id);
                    setFilterImage(newImage);
                },
            });
        }

    }

    return (
        <div>
            {/* select tipe_unit for filter filterImage */}
            <select
                className="form-select mb-5"
                onChange={(e) => {
                    if (e.target.value === "all") {
                        setFilterImage(image);
                    } else {
                        const filter = image.filter(
                            (item) => item.kd_tipe === parseInt(e.target.value)
                        );
                        setFilterImage(filter);
                    }
                }}
            >
                <option value="all">Semua Tipe Unit</option>
                {tipe_unit.map((item, index) => (
                    <option key={index} value={item.kd_tipe}>
                        {item.nama_tipe}
                    </option>
                ))}
            </select>

            <div className="relative">
                <div className="grid md:grid-cols-5 grid-cols-3 gap-5 w-full h-full">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-full md:h-40 h-20 bg-gray-300 relative"
                        >
                            <img
                                src={item.url}
                                alt={item.nama_file}
                                className="w-full h-full object-cover transition duration-300 transform hover:scale-105 cursor-pointer"
                                onClick={(e) => previewImageModal(e, item)}
                            />
                            <div className="absolute top-0 right-0 opacity-0 transition-opacity duration-300 p-2">
                                <button
                                onClick={() => onDelete(item.id)}
                                 className="btn btn-danger btn-sm border-0 text-white text-sm">
                                    <i
                                        className="fa fa-trash"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="w-full md:h-40 h-20 bg-gray-300 relative">
                        {/* button + */}
                        <button
                            onClick={modalTambahImage}
                            className="w-full h-full flex justify-center items-center bg-gray-300"
                        >
                            <i className="fa fa-plus md:text-5xl text-xl text-gray-500"></i>
                        </button>
                    </div>
                </div>

                {/* Paginasi */}
                <ul className="flex justify-center mt-4">
                    {Array.from(
                        {
                            length: Math.ceil(
                                filterImage.length / itemsPerPage
                            ),
                        },
                        (_, index) => (
                            <li
                                key={index}
                                // active paginate
                                className={`cursor-pointer text-sm mx-1 p-2 text-center bg-primary text-white rounded-full w-8 h-8 hover:bg-secondary transition duration-300  ${
                                    currentPage === index + 1
                                        ? "bg-secondary"
                                        : ""
                                }`}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </li>
                        )
                    )}
                </ul>
            </div>

            <FormUpdateImage
                selectedImage={selectedImage}
                tipe_unit={tipe_unit}
            />
            <FormTambahImage tipe_unit={tipe_unit} />
        </div>
    );
};

export default Image;
