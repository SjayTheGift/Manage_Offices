import { useState } from "react";
import { useLocation } from 'react-router-dom';

import OfficeCard from "../components/OfficeCard";
import { button } from "../icons";
import Spinner from "../components/Spinner";

const HomePage = ({ offices, loading }) => {
    const location = useLocation();

    return (
        <section className="w-full bg-[#F8FAFC] dark:bg-gray-900 px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen  relative py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-10">
                    All Offices
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office) => (
                            <OfficeCard
                                key={office.id}
                                office={office}
                                location={location}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute bottom-10 right-0 z-10">
                    <img src={button} className="hover:cursor-pointer" />
                </div>

            </div>
        </section>
    )
}

export default HomePage