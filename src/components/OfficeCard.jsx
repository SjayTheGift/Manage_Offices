import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom';

import { people_gray, people_blue } from "../icons";
const OfficeCard = ({ office, location }) => {


    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };


    return (
        <div className="w-full md:h-auto">
            <div className={`bg-white rounded-lg shadow p-4 border-l-8 border-${office.color}`} style={{ borderLeftColor: office.color }}>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        <Link to={`/office/${office.id}`}>{office.company_name}</Link >
                    </h3>
                    <Link to={`/edit-office/${office.id}`}>
                        <MdOutlineModeEdit size={25} className="hover:cursor-pointer text-primary" />
                    </Link>
                </div>
                <div className={`mb-4 pb-2 flex gap-4 items-center w-full ${location.pathname == '/' ? 'border-b-2 border-b-primary ' : ''}`}>
                    <img src={people_gray} className="" alt="people icon" />
                    <p><span className="font-semibold pr-1">{office.stuff_members}</span>{office.stuff_members > 1 ? 'Staff Members in Office' : 'Staff Member in Office'}</p>
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
                        <p className="text-[16px]">{office.phone_no}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <IoMailOutline size={25} className="text-primary" />
                        <p className="text-[16px]">{office.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={people_blue} className="" alt="people icon" />
                        <p className="text-[16px]">Office Capacity : {office.capacity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <SlLocationPin size={30} className="text-primary" />
                        <p className="text-[16px]">{office.address} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OfficeCard;