import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

import { people_gray, people_blue } from "../icons";
const OfficeCard = ({ company_name, stuff_members, phone_no, email, capacity, address, location }) => {

    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    // const checkLocation  = () => {
    //     if(location.pathname == ''){

    //     }
    // }

    return (
        <div className="w-full md:h-auto">
            <div className="bg-white rounded-lg shadow p-4 border-l-8 border-indigo-500">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        <a href="#">{company_name}</a>
                    </h3>
                    <MdOutlineModeEdit size={25} className="hover:cursor-pointer text-primary" />
                </div>
                <div className={`mb-4 pb-2 flex gap-4 items-center w-full ${location.pathname == '/' ? 'border-b-2 border-b-primary ' : ''}`}>
                    <img src={people_gray} className="" alt="people icon" />
                    <p><span className="font-semibold pr-1">{stuff_members}</span>{stuff_members > 1 ? 'Staff Members in Office' : 'Staff Member in Office'}</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <p>More Info </p>
                    {isHidden ?
                        <IoIosArrowDown size={25} className="hover:cursor-pointer text-primary" onClick={toggleVisibility} /> :
                        <IoIosArrowUp size={25} className="hover:cursor-pointer text-primary" onClick={toggleVisibility} />
                    }
                </div>
                <div className={`mt-3 flex flex-col gap-4 ${isHidden ? 'hidden' : 'block'}`}>
                    <div className="flex items-center gap-4">
                        <MdOutlinePhone size={25} className="text-primary" />
                        <p className="text-[16px]">{phone_no}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <IoMailOutline size={25} className="text-primary" />
                        <p className="text-[16px]">{email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={people_blue} className="" alt="people icon" />
                        <p className="text-[16px]">{capacity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <SlLocationPin size={30} className="text-primary" />
                        <p className="text-[16px]">{address} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OfficeCard;