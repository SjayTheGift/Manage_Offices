import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

import OfficeCard from "../components/OfficeCard";
import { button } from "../icons";

const HomePage = () => {
    const company_name = "Specno"
    const stuff_members = 5
    const phone_no = "084 555 3333"
    const email = "Info@specno.com"
    const capacity = "Office Capacity: 25"
    const address = "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"

    const location = useLocation();

    return (
        <section className="w-full bg-[#F8FAFC] dark:bg-gray-900 px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen  relative py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-10">
                    All Offices
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <OfficeCard
                        company_name={company_name}
                        stuff_members={stuff_members}
                        phone_no={phone_no}
                        email={email}
                        capacity={capacity}
                        address={address}
                        location={location}
                    />
                    <OfficeCard
                        company_name={company_name}
                        stuff_members={stuff_members}
                        phone_no={phone_no}
                        email={email}
                        capacity={capacity}
                        address={address}
                        location={location}
                    />
                    <OfficeCard
                        company_name={company_name}
                        stuff_members={stuff_members}
                        phone_no={phone_no}
                        email={email}
                        capacity={capacity}
                        address={address}
                        location={location}
                    />


                </div>


                <div className="absolute bottom-20 right-0 z-10">
                    <img src={button} className="hover:cursor-pointer" />
                </div>

            </div>
        </section>
    )
}

export default HomePage