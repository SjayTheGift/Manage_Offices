import { useState, useContext } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './Modal';
import ProgressForm from "./ProgressForm"
import { AppContext } from '../AppContext';
import Spinner from "./Spinner";

const StuffMember = ({ staff }) => {
    const { loading, deleteStaff } = useContext(AppContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMember, setDeleteMember] = useState(false);
    const [buttonName, setButtonName] = useState("");
    const navigate = useNavigate();
    const openModal = (e) => {
        setIsModalOpen(true);
        setButtonName(e.target.name)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deletePerson = () => {
        setDeleteMember(!deleteMember);
    }

    const onDelete = (id) => {
        if (id) {
            deleteStaff(id)
            toast.success("Person deleted")
            closeModal();
            navigate('/')
        }
    }
    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <div>

                <div className='flex justify-between items-center w-full my-2'>
                    <div className='flex items-center gap-6'>
                        <img src={staff.avatar} className='w-15 h-15' alt={staff.avatar} />
                        <h3>{staff.first_name} {staff.last_name}</h3>
                    </div>

                    <BsThreeDotsVertical size={25} className='hover:cursor-pointer' name="open_edit_modal" onClick={(e) => openModal(e)} />
                </div>

                {!deleteMember ?
                    <Modal isOpen={isModalOpen}>
                        <div className='flex flex-col w-full'>
                            <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]' name="edit" onClick={(e) => openModal(e)} >EDIT STUFF MEMBER</button>
                            <button className='bg-transparent text-btnPrimary p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]' name="delete" onClick={deletePerson}>DELETE STUFF MEMBER</button>
                        </div>
                    </Modal>
                    :

                    <Modal isOpen={isModalOpen}>
                        <div className='flex flex-col w-full'>
                            <div className='mb-10 flex gap-4'>
                                <GoArrowLeft size={25} className='hover:cursor-pointer' onClick={deletePerson} />
                                <p className='text-black text-[20px] font-bold'>Are You Sure You Want To Delete Staff Member?</p>
                            </div>
                            <button className='bg-btnSecondary text-white p-4 self-center w-[232px] sm:w-[50%] rounded-full mb-4 text-[14px] 
                            md:text-[16px]' onClick={() => onDelete(staff.id)}>DELETE OFFICE</button>
                            <button className='bg-transparent text-btnPrimary p-4 self-center w-[232px] rounded-full mb-4 text-[14px] 
                            md:text-[16px]' onClick={deletePerson}>KEEP OFFICE</button>
                        </div>
                    </Modal>
                }
                {buttonName == "edit" &&

                    <ProgressForm
                        buttonName={buttonName}
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                        staff={staff}
                    />

                }

            </div>
        </>
    )
}

export default StuffMember