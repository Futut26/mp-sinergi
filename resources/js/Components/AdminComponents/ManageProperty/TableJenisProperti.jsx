import { Link } from "@inertiajs/react";
import React from "react";

const TableJenisProperti = ({jenis_properti}) => {
    return (
        <div>
            <div className="overflow-x-auto bg-white shadow">
                <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-wrap flex-col md:flex-row gap-3">
                    <div className="w-full flex ">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded">
                            Add Property Type <i className="fas fa-plus"></i>
                        </button>
                    </div>
                </div>

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Nama Kategori Properti</th>
                            <th>Jenis Properti</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jenis_properti.map((data, index) => (
                            <tr key={index} className="text-center">
                                <td>{index + 1}</td>
                                <td>{data.jenis}</td>
                                {/* nilai pinvalue konversi ke mata uang indonesia */}
                                <td className="flex flex-col md:flex-row  md:gap-2 items-center justify-center">
                                    {/* detail button */}
                                    <Link
                                        href={`/edit_jenis_properti/${data.id}`}
                                        as="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Edit <i className="fas fa-edit"></i>
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
        </div>
    );
};

export default TableJenisProperti;
