import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, useLocation } from 'react-router-dom';

import OfficeCard from "../components/OfficeCard";
import SearchBox from "../components/SearchBox";
import StuffMember from "../components/StuffMember";

import { button, avatar_1, avatar_2, avatar_3 } from "../icons";

const OfficePage = () => {

    const company_name = "Specno"
    const stuff_members = 3
    const phone_no = "084 555 3333"
    const email = "Info@specno.com"
    const capacity = "Office Capacity: 25"
    const address = "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"

    const location = useLocation();

    return (
        <section className="w-full bg-[#F1F9FF] dark:bg-gray-900  px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen relative py-12">
                <div className='flex justify-between items-center mb-11'>
                    <NavLink to='/'>
                        <GoArrowLeft size={25} className='hover:cursor-pointer' />
                    </NavLink>
                    <p className='text-center text-[18px] font-medium'>Office</p>
                    <div></div>
                </div>
                <OfficeCard
                    company_name={company_name}
                    stuff_members={stuff_members}
                    phone_no={phone_no}
                    email={email}
                    capacity={capacity}
                    address={address}
                    location={location}
                />
                <SearchBox />

                <div className=' flex flex-col w-full mt-10'>
                    <div className='flex justify-between items-center w-full pr-2 mb-5'>
                        <h3>Staff Members in Office </h3>
                        <span>11</span>
                    </div>

                    <StuffMember

                        avatar={avatar_1}
                        name={"Jacques Jordaan"}
                    />
                    <StuffMember

                        avatar={avatar_2}
                        name={"Daniel Novitzkas"}
                    />

                    <StuffMember

                        avatar={avatar_3}
                        name={"Brandon Watkins"}
                    />

                </div>

                <div className="absolute bottom-20 right-0 z-10">
                    <img src={button} className="hover:cursor-pointer" />
                </div>
            </div>

        </section>
    )
}

export default OfficePage