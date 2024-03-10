import InputError from "@/Components/InputError";
import { formatToRupiah, parseFromRupiah } from "@/Function/RupiahFormate";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TablePembiyaan from "./Partials/TablePembiyaan";
import TableTipeUnit from "./Partials/TableTipeUnit";
import TableKavling from "./Partials/TableKavling";
import Galeri from "./Partials/Galeri";

const EditProperty = ({ auth, title, ...props }) => {
    const properti = usePage().props.properti;
    console.log("Properti: ", properti);

    const jenis_properti = usePage().props.jenis_properti;
    const jenis_pembiayaan = usePage().props.jenis_pembiayaan;
    const [kategori_properti, setKategori_properti] = useState(
        usePage().props.kategori_properti
    );
    const [formattedPriceMin, setFormattedPriceMin] = useState(
        formatToRupiah(properti.pinvalue_min)
    );
    const [formattedPriceMax, setFormattedPriceMax] = useState(
        formatToRupiah(properti.pinvalue_max)
    );

    // console.log("Jenis Properti: ", jenis_properti);

    // console.log("Kategori Properti: ", kategori_properti);

    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
        reset,
    } = useForm({
        id_kategori_properti: properti.id_kategori_properti,
        nama_properti: properti.nama_properti,
        lokasi: properti.lokasi,
        url_maps: properti.url_maps,
        deskripsi: properti.deskripsi,
        pinvalue_min: formattedPriceMin,
        pinvalue_max: formattedPriceMax,
        thumbnail: "",
        logo: "",
        pembiayaan: properti.pembiayaan,
        id_jenis_properti: properti.kategori_properti.id_jenis_properti,
    });

    const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState(
        usePage().props.properti.thumbnail
    );
    const [logoPreviewUrl, setLogoPreviewUrl] = useState(
        usePage().props.properti.logo
    );
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
            setData((prevData) => ({ ...prevData, [name]: formatted }));
            setFormattedPriceMin(formatted);
        } else if (name === "pinvalue_max") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: formatted }));
            setFormattedPriceMax(formatted);
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log("Data: ", data);
        post(route("update_property", properti.kd_properti));
    };

    const [propertyActive, setPropertyActive] = useState(true);
    const [OpsiPembiayaan, setOpsiPembiayaan] = useState(false);
    const [UnitActive, setUnitActive] = useState(false);
    const [KavlingActive, setKavlingActive] = useState(false);
    const [GaleriActive, setGaleriActive] = useState(false);

    const toggleProperty = () => {
        setPropertyActive(true);
        setOpsiPembiayaan(false);
        setUnitActive(false);
        setKavlingActive(false);
        setGaleriActive(false);
    };
    const toggleCategoryProperty = () => {
        setOpsiPembiayaan(true);
        setUnitActive(false);
        setPropertyActive(false);
        setKavlingActive(false);
        setGaleriActive(false);
    };
    const toggleJenisProperty = () => {
        setUnitActive(true);
        setPropertyActive(false);
        setOpsiPembiayaan(false);
        setKavlingActive(false);
        setGaleriActive(false);

    };

    const toggleKavling = () => {
        setKavlingActive(true);
        setPropertyActive(false);
        setOpsiPembiayaan(false);
        setUnitActive(false);
        setGaleriActive(false);
    }

    const toggleGaleri = () => {
        setGaleriActive(true);
        setPropertyActive(false);
        setOpsiPembiayaan(false);
        setUnitActive(false);
        setKavlingActive(false);
    }

    return (
        <AdminLayout auth={auth} title={title}>
            <div className="mb-24">
                <header className="h-auto px-4 py-2 mt-5 w-full border bg-white shadow-sm overflow-y-auto">
                    <ul className="flex md:gap-10 md:justify-start items-center font-medium w-auto">
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                propertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleProperty}
                        >
                            Properti
                        </li>
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                OpsiPembiayaan
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleCategoryProperty}
                        >
                            Opsi Pembiayaan
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                UnitActive ? "border-b-2 border-slate-400" : ""
                            }`}
                            onClick={toggleJenisProperty}
                        >
                            Unit Properti
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                KavlingActive ? "border-b-2 border-slate-400" : ""
                            }`}
                            onClick={toggleKavling}
                        >
                            Kavling
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                GaleriActive ? "border-b-2 border-slate-400" : ""
                            }`}
                            onClick={toggleGaleri}
                        >
                            Galeri
                        </li>
                    </ul>
                </header>

                <div className="mt-5 flex flex-col gap-10">
                    {propertyActive && properti && (
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="nama_properti">
                                        Nama Properti*
                                    </label>
                                    <input
                                        type="text"
                                        name="nama_properti"
                                        id="nama_properti"
                                        className="w-full border-2 border-slate-400 rounded-md p-2"
                                        value={data.nama_properti}
                                        onChange={(e) =>
                                            setData(
                                                "nama_properti",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.nama_properti}
                                    />
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
                                            value={data.id_jenis_properti}
                                            onChange={(e) => {
                                                const selectedJenisPropertiId =
                                                    e.target.value;
                                                const firstKategoriId =
                                                    jenis_properti.find(
                                                        (item) =>
                                                            item.id ==
                                                            selectedJenisPropertiId
                                                    ).kategori_properti[0].id; // Ambil id dari item pertama
                                                setData(
                                                    "id_jenis_properti",
                                                    selectedJenisPropertiId
                                                );
                                                setData(
                                                    "id_kategori_properti",
                                                    firstKategoriId
                                                ); // Set nilai id_kategori_properti ke item pertama secara otomatis
                                                setKategori_properti(
                                                    jenis_properti.find(
                                                        (item) =>
                                                            item.id ==
                                                            selectedJenisPropertiId
                                                    ).kategori_properti
                                                );
                                            }}
                                        >
                                            <option disabled value="">
                                                Pilih Jenis Properti
                                            </option>
                                            {jenis_properti.map(
                                                (item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item.id}
                                                    >
                                                        {item.jenis}
                                                    </option>
                                                )
                                            )}
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
                                            onChange={(e) =>
                                                // jika jenis properti diganti maka set nilai data.id_kategori_properti berdasarkan value index pertama secara otomatis
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
                                            message={
                                                errors.id_kategori_properti
                                            }
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
                                    <label htmlFor="thumbnail">
                                        Thumbnail*
                                    </label>
                                    <div className="mb-3">
                                        <img
                                            src={
                                                thumbnailPreviewUrl
                                                    ? thumbnailPreviewUrl
                                                    : "https://via.placeholder.com/150"
                                            }
                                            alt="thumbnail"
                                            className="w-20 h-20 object-contain"
                                        />
                                    </div>
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        id="thumbnail"
                                        className="w-full file-input file-input-primary border-none"
                                        onChange={(e) => {
                                            setData(
                                                "thumbnail",
                                                e.target.files[0]
                                            );
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
                                            className="w-20 h-20 object-contain"
                                        />
                                    </div>
                                    <input
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
                                    <label htmlFor="deskripsi">
                                        Deskripsi*
                                    </label>
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
                            </div>

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
                        </form>
                    )}

                    {OpsiPembiayaan && properti.pembiayaan && (
                        <TablePembiyaan
                            pembiayaan={properti.pembiayaan}
                            jenis_pembiayaan={jenis_pembiayaan}
                        />
                    )}

                    {UnitActive && properti.tipe_unit && (
                        <TableTipeUnit
                            tipe_unit={properti.tipe_unit}
                            kd_properti={properti.kd_properti}
                        />
                    )}

                    {KavlingActive && properti.tipe_unit && (
                        <TableKavling tipe_unit={properti.tipe_unit} />
                    )}

                    {GaleriActive && (
                        <Galeri galeri={properti.galeri} tipe_unit={properti.tipe_unit} />
                    )}

                </div>
            </div>
        </AdminLayout>
    );
};

export default EditProperty;
