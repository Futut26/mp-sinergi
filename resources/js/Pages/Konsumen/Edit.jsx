import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const Edit = ({ auth, user, title }) => {
    const isDataComplete = (obj) => {
        return Object.values(obj).every(
            (val) => val !== null && val !== undefined && val !== ""
        );
    };

    const [activeEdit, setActiveEdit] = useState(false);

    const konsumen = usePage().props.user.konsumen;
   // console.log("ini konsumen", konsumen);

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            no_hp: konsumen.no_hp || "",
            no_ktp: konsumen.no_ktp || "",
            npwp: konsumen.npwp || "",
            jenis_kelamin: konsumen.jenis_kelamin || "",
            pekerjaan: konsumen.pekerjaan || "",
            status_perkawinan: konsumen.status_perkawinan || "",
            agama: konsumen.agama || "",
            alamat: konsumen.alamat.alamat || "",
            kelurahan : konsumen.alamat.kelurahan || "",
            kecamatan : konsumen.alamat.kecamatan || "",
            kabupaten : konsumen.alamat.kabupaten || "",
            provinsi : konsumen.alamat.provinsi || "",
            kode_pos : konsumen.alamat.kode_pos || "",
        });

    const submit = (e) => {
        e.preventDefault();
       // console.log(data);
        post(route("personal-data.update"));
    };

    recentlySuccessful && setTimeout(() => {
        setActiveEdit(false);
    }
    , 3000);


    return (
        <AdminLayout auth={auth} title={title}>
            <div className="flex flex-col gap-4 mb-20">
                <div className="bg-white rounded-md w-full h-auto bg-opacity-15 shadow-md flex flex-col p-3 md:p-5 gap-4">
                    <div className="flex gap-3 md:flex-row flex-col">
                        <div className="">
                            <img
                                className="img-responsive w-20 h-20  md:h-40 md:w-40 object-cover"
                                src={
                                    user.avatar
                                        ? user.avatar
                                        : "https://via.placeholder.com/150"
                                }
                                alt="placeholder"
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm md:text-lg">
                                    Nama Lengkap{" "}
                                </h1>
                                <h1 className="text-sm md:text-lg">Email</h1>
                                <h1 className="text-sm md:text-lg">No. Telp</h1>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-sm md:text-lg">
                                    {" "}
                                    : {user.nama_lengkap}
                                </h1>
                                <h1 className="text-sm md:text-lg">
                                    {" "}
                                    : {user.email}
                                </h1>
                                <h1 className="text-sm md:text-lg">
                                    {" "}
                                    : {user.konsumen.no_hp}
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 md:items-center md:flex-row flex-col">
                        {!user.konsumen ||
                            (!isDataComplete(user.konsumen) && (
                                <h1 className="text-red-700">
                                    Data Pribadi anda belum lengkap
                                </h1>
                            ))}

                        {recentlySuccessful && (
                            <h1 className="text-red-700">
                                    Data Pribadi berhasil diperbarui
                            </h1>
                        )}
                        {/* button edit dengan icon pensil */}
                        <button
                            onClick={() => setActiveEdit(!activeEdit)}
                            className="btn btn-primary flex gap-2 items-center justify-center w-auto h-10 md:w-auto  md:h-12 rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out"
                        >
                            <i className="bi bi-pencil-square"></i>
                            <h1>Edit Data Pribadi</h1>
                        </button> 
                    </div>
                </div>
                {/* form edit data pribadi */}

                <div className="bg-white  rounded-md w-full h-auto bg-opacity-15 shadow-lg flex flex-col p-3 md:p-5 gap-4">
                    <form onSubmit={submit} >
                        {/* no_ktp */}
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="no_ktp">No. KTP*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="no_ktp"
                                    id="no_ktp"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.no_ktp}
                                    onChange={(e) =>
                                        setData("no_ktp", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.no_ktp}
                                />
                            </div>

                            {/* npwp */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="npwp">NPWP*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="npwp"
                                    id="npwp"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.npwp}
                                    onChange={(e) =>
                                        setData("npwp", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.npwp}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="agama">Agama*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="agama"
                                    id="agama"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.agama}
                                    onChange={(e) =>
                                        setData("agama", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.agama}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="jenis_kelamin">
                                    Jensis Kelamin*
                                </label>
                                {/* select input */}
                                <select
                                    disabled={!activeEdit}
                                    name="jenis_kelamin"
                                    id="jenis_kelamin"
                                    className="input input-bordered md:input-md input-sm text-sm"
                                    value={data.jenis_kelamin}
                                    required
                                    onChange={(e) =>
                                        setData("jenis_kelamin", e.target.value)
                                    }
                                >
                                    <option  disabled value="">Pilih Jenis Kelamin</option>
                                    <option value="Laki-laki">Laki-laki</option>

                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <InputError
                                    className="mt-2"
                                    message={errors.jenis_kelamin}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="no_hp">No. Hp/Wa*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="no_hp"
                                    id="no_hp"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.no_hp}
                                    onChange={(e) =>
                                        setData("no_hp", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.no_hp}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="status_perkawinan">
                                    Status Perkawinan
                                </label>
                                {/* select input */}
                                <select
                                    disabled={!activeEdit}
                                    name="status_perkawinan"
                                    id="status_perkawinan"
                                    className="input input-bordered md:input-md input-sm text-sm"
                                    value={data.status_perkawinan}
                                    onChange={(e) =>
                                        setData(
                                            "status_perkawinan",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option  disabled value="">Pilih Status Pernikahan</option>
                                    <option value="Menikah">Menikah</option>
                                    <option value="Belum Menikah">
                                        Belum Menikah
                                    </option>
                                </select>
                                <InputError
                                    className="mt-2"
                                    message={errors.status_perkawinan}
                                />
                            </div>

                            {/* pekerjaan  */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="pekerjaan">Pekerjaan*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="pekerjaan"
                                    id="pekerjaan"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.pekerjaan}
                                    onChange={(e) =>
                                        setData("pekerjaan", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.pekerjaan}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col gap-3 my-5">
                                <label htmlFor="Alamat">Alamat : </label>
                        </div>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-5 ">
                            {/* alamat lengkap text area input */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="alamat">Alamat Lengkap*</label>
                                <textarea
                                    disabled={!activeEdit}
                                    name="alamat"
                                    id="alamat"
                                    className="textarea textarea-bordered h-20 md:h-32"
                                    value={data.alamat}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                    // contoh value
                                    placeholder=" Exp Jl. Jendral Sudirman No. 1 rt 01 rw 01 "
                                ></textarea>
                                <InputError
                                    className="mt-2"
                                    message={errors.alamat}
                                />
                            </div>

                            {/* kelurahan */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="kelurahan">Kelurahan*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="kelurahan"
                                    id="kelurahan"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.kelurahan}
                                    onChange={(e) =>
                                        setData("kelurahan", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.kelurahan}
                                />
                            </div>

                            {/* kecamatan */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="kecamatan">Kecamatan*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="kecamatan"
                                    id="kecamatan"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.kecamatan}
                                    onChange={(e) =>
                                        setData("kecamatan", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.kecamatan}
                                />
                                </div>

                            {/* kabupaten/kota */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="kabupaten">Kabupaten/Kota*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="kabupaten"
                                    id="kabupaten"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.kabupaten}
                                    onChange={(e) =>
                                        setData("kabupaten", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.kabupaten}
                                />
                            </div>

                            {/* provinsi */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="provinsi">Provinsi*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="provinsi"
                                    id="provinsi"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.provinsi}
                                    onChange={(e) =>
                                        setData("provinsi", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.provinsi}
                                />
                            </div>

                            {/* kode pos */}
                            <div className="flex flex-col gap-3">
                                <label htmlFor="kode_pos">Kode Pos*</label>
                                <input
                                    disabled={!activeEdit}
                                    type="text"
                                    name="kode_pos"
                                    id="kode_pos"
                                    className="input input-bordered md:input-md input-sm"
                                    value={data.kode_pos}
                                    onChange={(e) =>
                                        setData("kode_pos", e.target.value)
                                    }
                                />
                                <InputError
                                    className="mt-2"
                                    message={errors.kode_pos}
                                />
                              </div>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <button
                                disabled={processing}
                                type="submit"
                                className="btn btn-primary flex gap-2 items-center justify-center w-auto h-10 md:w-auto  md:h-12 rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out"
                            >
                                <i className="bi bi-save"></i>
                                <h1>Simpan</h1>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
