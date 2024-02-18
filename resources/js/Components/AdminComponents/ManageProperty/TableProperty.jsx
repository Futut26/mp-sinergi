import { formatToRupiah, parseFromRupiah } from "@/Components/Fungsi";
import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const TableProperty = ({
    meta,
    properti,
    jenis_properti,
    kategori_properti,
}) => {
    const [formattedPriceMin, setFormattedPriceMin] = useState("");
    const [formattedPriceMax, setFormattedPriceMax] = useState("");
    const { data, setData, post, errors, reset } = useForm({
        id_kategori_properti: "",
        nama_properti: "",
        logo: "",
        thumbnail: "",
        lokasi: "",
        url_maps: "",
        pinvalue_min: "",
        pinvalue_max: "",
    });

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

    const [jenisPropertiId, setJenisPropertiId] = useState("");
    const handleJenisPropertiChange = (event) => {
        const selectedJenisPropertiId = event.target.value;
        setJenisPropertiId(selectedJenisPropertiId);
    };

    const filteredKategoriProperti = kategori_properti.filter(
        (item) => item.id_jenis_properti == jenisPropertiId
    );

    const handleSumbit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        
    };

    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-wrap flex-col md:flex-row gap-3">
                <div className="w-full flex ">
                    <button
                        onClick={() =>
                            document
                                .getElementById("modal_tambah_properti")
                                .showModal()
                        }
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded"
                    >
                        Add Property <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Nama Properti</th>
                        <th>Logo</th>
                        <th>Tumbnail</th>
                        <th>Lokasi</th>
                        <th>Pinvalue</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {properti.map((properti, index) => (
                        <tr key={index} className="text-center">
                            <td>{index + 1}</td>
                            <td>{properti.nama_properti}</td>
                            <td className="w-40">
                                <img
                                    className="w-auto "
                                    src={`assets/img/properti/${properti.logo}`}
                                    alt=""
                                />
                            </td>
                            <td className="w-40">
                                <img
                                    className="w-auto"
                                    src={`assets/img/properti/${properti.thumbnail}`}
                                    alt=""
                                />
                            </td>
                            <td>{properti.lokasi}</td>
                            {/* nilai pinvalue konversi ke mata uang indonesia */}
                            <td>
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(properti?.pinvalue_min)}
                                {" - "}{" "}
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(properti?.pinvalue_max)}
                            </td>

                            <td>
                                {/* detail button */}
                                <div className="flex flex-col md:flex-row h-full w-full  md:gap-2 items-center justify-center">
                                    <Link
                                        href={`/manage_property/${properti.kd_properti}`}
                                        as="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Manage <i className="fas fa-tasks"></i>
                                    </Link>

                                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <dialog id="modal_tambah_properti" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <div>
                        <h1 className="text-xl font-semibold">
                            Add Property Form
                        </h1>
                    </div>
                    <form
                        onSubmit={handleSumbit}
                        className="flex flex-col w-full"
                    >
                        <div className="flex flex-row w-full gap-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Nama Property
                                    </span>
                                </div>
                                <input
                                    value={data.nama_properti}
                                    onChange={(e) =>
                                        setData("nama_properti", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Lokasi</span>
                                </div>
                                <input
                                    value={data.lokasi}
                                    onChange={(e) =>
                                        setData("lokasi", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Url Maps</span>
                                </div>
                                <input
                                    value={data.url_maps}
                                    onChange={(e) =>
                                        setData("url_maps", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </label>
                        </div>
                        <div className="flex flex-row w-full gap-3">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Pinvalue (Minimum)
                                    </span>
                                </div>
                                <input
                                    value={formattedPriceMin}
                                    onChange={handleChange}
                                    name="pinvalue_min"
                                    id="pinvalue_min"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </label>
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">
                                        Pinvalue (Maximum)
                                    </span>
                                </div>
                                <input
                                    value={formattedPriceMax}
                                    onChange={handleChange}
                                    name="pinvalue_max"
                                    id="pinvalue_max"
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full "
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        Jenis Properti
                                    </span>
                                </div>
                                <select
                                    name="id_jenis_properti"
                                    id="id_jenis_properti"
                                    className="select select-bordered"
                                    onChange={handleJenisPropertiChange}
                                >
                                    {/* map jenis_properti */}
                                    <option value="">
                                        Pilih Jenis Properti
                                    </option>

                                    {jenis_properti?.map((item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.jenis}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex flex-row w-full gap-3">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        Kategori Properti
                                    </span>
                                </div>
                                <select
                                    onChange={(e) => {
                                        setData(
                                            "id_kategori_properti",
                                            e.target.value
                                        );
                                    }}
                                    name="id_kategori_properti" // Ganti name menjadi id_kategori_properti
                                    id="id_kategori_properti"
                                    className="select select-bordered"
                                >
                                    {/* map jenis_properti */}
                                    <option selected value="">
                                        Pilih Kategori Properti
                                    </option>

                                    {filteredKategoriProperti?.map(
                                        (item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.kategori}
                                            </option>
                                        )
                                    )}
                                </select>
                                <InputError
                                    message={errors.id_kategori_properti}
                                    className="mt-1"
                                />
                            </label>
                            <div className="w-full gap-2 flex flex-col">
                                {/* input file thumnil poto dan logo  */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">
                                            Thumbnail
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered w-full"
                                    />
                                </label>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Logo</span>
                                    </div>
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="w-full flex justify-end py-5">
                            <div className="flex flex-row gap-3">
                                {/* button batal dan simpan */}
                                <button
                                    type="button"
                                    className="btn btn-sm"
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                "modal_tambah_properti"
                                            )
                                            .close()
                                    }
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Simpan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default TableProperty;
