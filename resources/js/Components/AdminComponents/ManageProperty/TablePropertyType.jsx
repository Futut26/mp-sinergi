import { Link } from "@inertiajs/react";
import React from "react";

const TablePropertyType = ({ meta, properti }) => {
    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-wrap flex-col md:flex-row gap-3">
                <div className="w-full flex ">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded">
                        Add Property <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Nama Tipe</th>
                        <th>Harga</th>
                        <th>Jumlah Kavling</th>
                        <th>Spesifikasi</th>
                        <th>Galeri</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {properti.tipe_unit.map((tipe, index) => (
                        <tr key={index} className="text-center">
                            <td>{index + 1}</td>
                            <td>{tipe.nama_tipe}</td>
                            {/* nilai pinvalue konversi ke mata uang indonesia */}
                            <td>
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(tipe?.harga)}
                            </td>

                            <td><Link>Kelola Unit</Link></td>
                            <td><Link>Kelola Spesifikasi</Link></td>
                            <td><Link>Kelola Galeri</Link></td>
                            <td className="flex flex-col md:flex-row  md:gap-2 items-center justify-center">
                                {/* detail button */}
                                <Link
                                    href={`/manage_property/${properti.kd_properti}`}
                                    as="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Detail{" "}
                                    <i className="fas fa-info-circle"></i>
                                </Link>

                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePropertyType;
