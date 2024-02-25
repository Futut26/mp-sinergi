import InputError from "@/Components/InputError";
import { formatToRupiah, parseFromRupiah } from "@/Function/RupiahFormate";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

import { useState, useRef, useEffect } from "react";

const AddProperty = ({ auth, title }) => {
    const jenis_properti = usePage().props.jenis_properti;
    const jenis_pembiayaan = usePage().props.jenis_pembiayaan;
    const [Id_jenis_properti, setId_jenis_properti] = useState("");
    const [kategori_properti, setKategori_properti] = useState([]);
    const [formattedPriceMin, setFormattedPriceMin] = useState("");
    const [formattedPriceMax, setFormattedPriceMax] = useState("");

    const { data, setData, post, errors, processing, recentlySuccessful, reset} =
        useForm({
            id_kategori_properti: "",
            nama_properti: "",
            lokasi: "",
            url_maps: "",
            deskripsi: "",
            pinvalue_min: "",
            pinvalue_max: "",
            thumbnail: "",
            logo: "",
            pembiayaan: [],
        });

    const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState(null);
    const [logoPreviewUrl, setLogoPreviewUrl] = useState(null);
    const previewImage = (e, type) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            if (type === "thumbnail") {
                setThumbnailPreviewUrl(reader.result);
            } else {
                setLogoPreviewUrl(reader.result);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            if (type === "thumbnail") {
                setThumbnailPreviewUrl(null);
            } else {
                setLogoPreviewUrl(null);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "pinvalue_min") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setFormattedPriceMin(formatted);
        } else if (name === "pinvalue_max") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setFormattedPriceMax(formatted);
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("store_property"));
        if(recentlySuccessful) {
            // scroll to top
            window.scrollTo(0, 0);
        }

    };
    return (
        <AdminLayout auth={auth} title={title}>
            <div className="mb-24">
                <div className="mt-5">
                    <form onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="nama_properti">
                                    Nama Properti*
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="nama_properti"
                                    id="nama_properti"
                                    className="w-full border-2 border-slate-400 rounded-md p-2"
                                    value={data.nama_properti}
                                    onChange={(e) =>
                                        setData("nama_properti", e.target.value)
                                    }
                                />
                                <InputError message={errors.nama_properti} />
                            </div>
                            <div>
                                <label htmlFor="lokasi">Lokasi*</label>
                                <input
                                    required
                                    type="text"
                                    name="lokasi"
                                    id="lokasi"
                                    className="w-full border-2 border-slate-400 rounded-md p-2"
                                    value={data.lokasi}
                                    onChange={(e) =>
                                        setData("lokasi", e.target.value)
                                    }
                                />
                                <InputError message={errors.lokasi} />
                            </div>

                            <div>
                                <label htmlFor="url_maps">
                                    URL Maps (Opsional)
                                </label>
                                <input
                                    type="text"
                                    name="url_maps"
                                    id="url_maps"
                                    className="w-full border-2 border-slate-400 rounded-md p-2"
                                    value={data.url_maps}
                                    onChange={(e) =>
                                        setData("url_maps", e.target.value)
                                    }
                                />
                                <InputError message={errors.url_maps} />
                            </div>

                            <div className="flex flex-col  justify-between w-full md:flex-row">
                                <div>
                                    <label htmlFor="jenis_properti">
                                        Jenis Properti*
                                    </label>
                                    <select
                                        required
                                        name="jenis_properti"
                                        id="jenis_properti"
                                        className="w-full border-2 border-slate-400 rounded-md p-2"
                                        value={Id_jenis_properti}
                                        onChange={(e) => {
                                            setId_jenis_properti(
                                                e.target.value
                                            );
                                            setKategori_properti(
                                                jenis_properti.find(
                                                    (item) =>
                                                        item.id ==
                                                        e.target.value
                                                ).kategori_properti
                                            );
                                        }}
                                    >
                                        <option disabled value="">
                                            Pilih Jenis Properti
                                        </option>
                                        {jenis_properti.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.jenis}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={errors.jenis_properti}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="id_kategori_properti">
                                        Kategori Properti*
                                    </label>
                                    <select
                                        required
                                        name="id_kategori_properti"
                                        id="id_kategori_properti"
                                        className="w-full border-2 border-slate-400 rounded-md p-2"
                                        value={data.id_kategori_properti}
                                        disabled={Id_jenis_properti === ""}
                                        onChange={(e) =>
                                            setData(
                                                "id_kategori_properti",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option disabled value="">
                                            Pilih Kategori Properti
                                        </option>
                                        {kategori_properti.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item.id}
                                                >
                                                    {item.kategori}
                                                </option>
                                            )
                                        )}
                                    </select>
                                    <InputError
                                        message={errors.id_kategori_properti}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="pinvalue_min">
                                    Pinvalue Min*
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="pinvalue_min"
                                    id="pinvalue_min"
                                    className="w-full border-2
                                        border-slate-400 rounded-md p-2"
                                    value={formattedPriceMin}
                                    onChange={handleChange}
                                />
                                <InputError message={errors.pinvalue_min} />
                            </div>
                            <div>
                                <label htmlFor="pinvalue_max">
                                    Pinvalue Max*
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="pinvalue_max"
                                    id="pinvalue_max"
                                    className="w-full border-2
                                        border-slate-400 rounded-md p-2"
                                    value={formattedPriceMax}
                                    onChange={handleChange}
                                />
                                <InputError error={errors.pinvalue_max} />
                            </div>
                            <div>
                                <label htmlFor="thumbnail">Thumbnail*</label>
                                <div className="mb-3">
                                    <img
                                        src={
                                            thumbnailPreviewUrl
                                                ? thumbnailPreviewUrl
                                                : "https://via.placeholder.com/150"
                                        }
                                        alt="thumbnail"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <input
                                    required
                                    type="file"
                                    name="thumbnail"
                                    id="thumbnail"
                                    className="w-full file-input file-input-primary border-none"
                                    onChange={(e) => {
                                        setData("thumbnail", e.target.files[0]);
                                        previewImage(e, "thumbnail");
                                    }}
                                />
                                <InputError error={errors.thumbnail} />
                            </div>
                            <div>
                                <label htmlFor="logo">Logo*</label>
                                <div className="mb-3">
                                    <img
                                        src={
                                            logoPreviewUrl
                                                ? logoPreviewUrl
                                                : "https://via.placeholder.com/150"
                                        }
                                        alt="logo"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <input
                                    required
                                    type="file"
                                    name="logo"
                                    id="logo"
                                    className="w-full file-input file-input-primary border-none"
                                    onChange={(e) => {
                                        setData("logo", e.target.files[0]);
                                        previewImage(e, "logo");
                                    }}
                                />
                                <InputError error={errors.logo} />
                            </div>

                            <div className="w-full h-full mb-10">
                                <label htmlFor="deskripsi">Deskripsi*</label>
                                <ReactQuill
                                    theme="snow"
                                    className="h-64"
                                    value={data.deskripsi}
                                    onChange={(value) => {
                                        setData("deskripsi", value);
                                    }}
                                />
                                <InputError error={errors.deskripsi} />
                            </div> 

                            <div>
                                <label htmlFor="pembiayaan">Pilih Jenis Pembiayaan</label>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                                    {jenis_pembiayaan.map((item, index) => (
                                        <div key={index}>
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                name="pembiayaan"
                                                required = {data.pembiayaan.length === 0}
                                                value={item.id}
                                                onChange={(e) => {
                                                    // bentuk data pembiayaan
                                                    // [ {id_jenis_pembiayaan: 1,}, {id_jenis_pembiayaan:2}, ]
                                                    if (e.target.checked) {
                                                        setData((prevData) => ({
                                                            ...prevData,
                                                            pembiayaan: [
                                                                ...prevData.pembiayaan,
                                                                {
                                                                    id_jenis_pembiayaan:
                                                                        item.id,
                                                                },
                                                            ],
                                                        }));
                                                    }
                                                    if (!e.target.checked) {
                                                        setData((prevData) => ({
                                                            ...prevData,
                                                            pembiayaan:
                                                                prevData.pembiayaan.filter(
                                                                    (item) =>
                                                                        item.id_jenis_pembiayaan !==
                                                                        item.id
                                                                ),
                                                        }));
                                                    }
                                                }}
                                            />
                                            <label htmlFor={item.id}>
                                                {item.jenis}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            {data.pembiayaan.length === 0 && <InputError message="Pilih minimal 1 jenis pembiayaan" />}
                            </div>
                        </div>
                        {/* combo box for pembiyaan */}

                        <div className="mt-5 flex gap-3">
                            <Link
                            href={route("manage_property")}
                            className="btn btn-secondary"
                            as="button"
                        >
                            Kembali

                        </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn btn-primary"
                            >
                                Simpan
                            </button>
                        </div>

                        {/* create button back to index */}


                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddProperty;
