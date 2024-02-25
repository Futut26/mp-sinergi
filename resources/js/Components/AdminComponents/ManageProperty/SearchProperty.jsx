import { router } from "@inertiajs/react";
import React, { useState } from "react";


const SearchProperty = ({ jenis_properti, kategori_properti }) => {
    const [search, setSearch] = useState("");

    const searchHandle = (e) => {
        e.preventDefault();
        router.get("manage_property", {search})
    }

    return (
        <div>
            <form
            onSubmit={searchHandle}
            className="flex md:w-[50%] w-full">
                <div className="join w-full">
                    <input
                        className="input input-bordered join-item w-full "
                        placeholder="Cari Properti..."
                        value={search}
                        type="text"
                        name="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary join-item rounded-r-lg"
                    >
                        Cari
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchProperty;
