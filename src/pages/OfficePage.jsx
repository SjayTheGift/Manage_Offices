import { useState, useEffect } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { NavLink, useLocation, useParams } from 'react-router-dom';

import OfficeCard from "../components/OfficeCard";
import SearchBox from "../components/SearchBox";
import StaffMember from "../components/StaffMember";
import Spinner from '../components/Spinner';

import { button, avatar_1, avatar_2, avatar_7 } from "../icons";

const OfficePage = () => {
    const { id } = useParams()
    const [office, setOffice] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();




    useEffect(() => {
        const fetchOffice = async () => {
            try {
                const res = await fetch(`/api/offices/${id}`);
                const data = await res.json();
                console.log(data)
                setOffice(data)
            } catch (error) {
                console.log("Error fetching data", error)
            } finally {
                setLoading(false)
            }
        };
        fetchOffice();
    }, [])




    return (
        <section className="w-full bg-[#F8FAFC] h-screen dark:bg-gray-900  px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen relative py-12">
                <div className='flex justify-between items-center mb-11'>
                    <NavLink to='/'>
                        <GoArrowLeft size={25} className='hover:cursor-pointer' />
                    </NavLink>
                    <p className='text-center text-[18px] font-medium'>Office</p>
                    <div></div>
                </div>
                <OfficeCard
                    office={office}
                    location={location}
                />
                <SearchBox />

                <div className=' flex flex-col w-full mt-10'>
                    <div className='flex justify-between items-center w-full pr-2 mb-5'>
                        <h3>Staff Members in Office </h3>
                        <span>11</span>
                    </div>

                    {office?.staffs?.map((staff) => (

                        <StaffMember
                            staff={staff}
                        />
                    ))}





                </div>

                <div className="absolute bottom-10 right-0 z-10">
                    <img src={button} className="hover:cursor-pointer" />
                </div>
            </div>

        </section>
    )
}

// const officeLoader = async ({params}) =>{
//     const res = await fetch(`/api/offices/${params.id}`);
//     const data = await res.json();
// }

export default OfficePage