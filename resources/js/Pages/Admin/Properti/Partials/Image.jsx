import React from "react";
import { useState } from "react";

const Image = ({ image }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Jumlah item per halaman

    // Mendapatkan indeks item awal dan akhir untuk halaman saat ini
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = image.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk mengubah halaman
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
                {currentItems.map((item, index) => {
                    return (
                        <div key={index} className="w-full h-full bg-gray-300">
                            <img
                                src={item.url}
                                alt={item.nama_file}
                                className="w-full h-full object-contain transition duration-300 transform hover:scale-110"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Paginasi */}
            <ul className="flex justify-center mt-4">
                {Array.from(
                    { length: Math.ceil(image.length / itemsPerPage) },
                    (_, index) => (
                        <li
                            key={index}
                            // active paginate
                            className={`cursor-pointer text-sm mx-1 p-2 text-center bg-primary text-white rounded-full w-8 h-8 hover:bg-secondary transition duration-300  ${
                                currentPage === index + 1 ? "bg-secondary" : ""
                            }

                                `}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Image;
