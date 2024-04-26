import { useState, useEffect } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { Link, useLocation, useParams } from 'react-router-dom';

import OfficeCard from "../components/OfficeCard";
import SearchBox from "../components/SearchBox";
import StaffMember from "../components/StaffMember";
import Spinner from '../components/Spinner';

import { button } from "../icons";

import ProgressForm from "../components/ProgressForm"

const OfficePage = () => {
    const { id } = useParams()
    const [office, setOffice] = useState([]);
    const [staffs, setStaffs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [buttonName, setButtonName] = useState("");

    const location = useLocation();

    const openModal = (e) => {
        setIsModalOpen(true);
        setButtonName(e.target.name)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchOffice = async () => {
            try {
                const res = await fetch(`/api/offices/${id}`);
                const data = await res.json();
                setOffice(data)
            } catch (error) {
                console.log("Error fetching data", error)
            } finally {
                setLoading(false)
            }
        };


        const fetchStaffMembersByOffice = async (officeId) => {
            try {
                const response = await fetch('/api/staffs');
                if (response.ok) {
                    const staffMembers = await response.json();
                    const staffMembersByOffice = staffMembers.filter((staff) => staff.office_id === officeId);
                    console.log('Staff members:', staffMembersByOffice);
                    setStaffs(staffMembersByOffice)
                } else {
                    console.log('Failed to fetch staff members.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchOffice();
        fetchStaffMembersByOffice(id);

    }, [])


    return (
        <section className="w-full bg-gray-100 h-screen dark:bg-gray-900  px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen relative py-12">
                <div className='flex justify-between items-center mb-11'>
                    <Link to='/'>
                        <GoArrowLeft size={25} className='hover:cursor-pointer' />
                    </Link>
                    <p className='text-center text-[18px] font-medium'>Office</p>
                    <div></div>
                </div>
                {loading ?
                    <div className="flex justify-center items-center">
                        <Spinner />
                    </div> :
                    <OfficeCard
                        office={office}
                        location={location}
                    />}

                <SearchBox />

                <div className=' flex flex-col w-full mt-10'>
                    <div className='flex justify-between items-center w-full pr-2 mb-5'>
                        <h3>Staff Members in Office </h3>
                        <span>{staffs?.length}</span>
                    </div>
                    {loading ?

                        <div className="flex justify-center items-center">
                            <Spinner />
                        </div> :
                        <>
                            {staffs.map((staff) => (

                                <StaffMember
                                    key={staff.id}
                                    staff={staff}
                                />
                            ))}
                        </>
                    }


                    <ProgressForm
                        buttonName={buttonName}
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                    />



                </div>

                <div className="absolute bottom-10 right-0 z-10">
                    <img src={button} className="hover:cursor-pointer" name="add" onClick={(e) => openModal(e)} />
                </div>
            </div>

        </section>
    )
}

export default OfficePage