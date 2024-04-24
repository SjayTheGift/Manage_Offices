import React from 'react';
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
    return (
        <div className="flex items-center py-2 px-4 bg-[#F8FAFC] rounded-md mt-10">
            <input
                type="text"
                placeholder="Search"
                className="flex-grow text-black px-2 py-1 outline-none bg-[#F8FAFC]"
            />
            <RiSearchLine className="text-gray-900 ml-2" size={25} />
        </div>
    );
};

export default SearchBox;