import React, { useState } from "react";
import FormTambahKavling from "./FormTambahKavling";
import FormUpdateKavling from "./FormUpdateKavling";
import { useForm } from "@inertiajs/react";

const TableKavling = ({ tipe_unit }) => {
    const [tipeSelected, setTipeSelected] = useState(0);
    const [modalTambahKavling, setModalTambahKavling] = useState(false);
    const [kavlingSelected, setKavlingSelected] = useState([null]);
    const closeModalTambahKavling = () => {
        setModalTambahKavling(false);
    };
    const selectedTipeUnit = tipe_unit.find(
        (item) => item.kd_tipe === tipeSelected
    );
    const kavling = selectedTipeUnit ? selectedTipeUnit.kavling : [];

    const { delete: destroy } = useForm();

    const deleteKavling = (e, kd_kavling) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus kavling ini?")) {
            destroy(route("kavling.destroy", kd_kavling), {
                preserveScroll: true,
                onSuccess: () => {
                    window.scrollTo(0, 0);
                },
            });
        }
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <h1 className="text-xl font-bold">Kavling</h1>
                <select
                    className="form-select"
                    value={tipeSelected}
                    onChange={(e) => {
                        setTipeSelected(parseInt(e.target.value));
                    }}
                >
                    <option value={0}>Pilih Tipe Unit</option>
                    {tipe_unit.map((item, index) => (
                        <option key={index} value={item.kd_tipe}>
                            {item.nama_tipe}
                        </option>
                    ))}
                </select>

                <button
                    className="btn btn-warning"
                    disabled={tipeSelected === 0}
                    onClick={() => {
                        setModalTambahKavling(true);
                    }}
                >
                    <i className="fas fa-edit"></i>
                    Tambah Kavling
                </button>
            </div>

            <div className="overflow-x-auto w-full mt-4 bg-white shadow">
                <table className="table table-xs w-full">
                    <thead className="text-center">
                        <tr>
                            <th>No</th>
                            <th>Nama Unit </th>
                            <th>Harga</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {kavling.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nama_unit}</td>
                                <td>
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(selectedTipeUnit.harga)}
                                </td>
                                <td>{item.status}</td>
                                <td className="flex justify-center gap-3 flex-wrap">
                                    <label
                                    htmlFor="modal_update_kavling"
                                        onClick={() => {
                                            setKavlingSelected(item);
                                        }}
                                        className="btn btn-sm text-xs btn-warning"
                                    >
                                        <i className="fas text-xs fa-edit"></i>
                                    </label>

                                    <button
                                        onClick={(e) => deleteKavling(e, item.kd_kavling)}
                                        className="btn btn-sm text-xs btn-danger"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <FormTambahKavling
                modalTambahKavling={modalTambahKavling}
                closeModalTambahKavling={closeModalTambahKavling}
                kd_tipe={tipeSelected}
            />

            <FormUpdateKavling kavling={kavlingSelected} />

        </div>
    );
};

export default TableKavling;
