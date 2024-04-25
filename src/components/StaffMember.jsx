import React, { useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from './Modal';
import FormModal from './FormModal';
import ImagesModal from './ImagesModal';
import { avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7 } from '../icons';

const StuffMember = ({ staff }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteMember, setDeleteMember] = useState(false);
    const [editMember, setEditMember] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deletePerson = () => {
        setDeleteMember(!deleteMember);
    }

    const editPerson = () => {
        setEditMember(!editMember);
        if (isModalOpen == true && editMember == true) {
            closeModal();
            setCurrentStep(1);
        }
    }


    const [currentStep, setCurrentStep] = useState(1);

    const goToNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const goToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <FormModal
                    goToNextStep={goToNextStep}
                    isModalOpen={isModalOpen}
                    editPerson={editPerson}
                    currentStep={currentStep}
                />;
            case 2:
                return <ImagesModal
                    goToPreviousStep={goToPreviousStep}
                    isModalOpen={isModalOpen}
                    editPerson={editPerson}
                />;
            default:
                return null;
        }
    };




    console.log(staff.avatar)
    console.log(avatar_1)




    return (
        <>
            <div>

                <div className='flex justify-between items-center w-full my-2'>
                    <div className='flex items-center gap-6'>
                        <img src={staff.avatar} className='w-15 h-15' alt={staff.avatar} />
                        <h3>{staff.first_name} {staff.last_name}</h3>
                    </div>

                    <BsThreeDotsVertical size={25} className='hover:cursor-pointer' onClick={openModal} />
                </div>

                {!deleteMember ?
                    <Modal isOpen={isModalOpen} onClick={() => closeModal()}>
                        <div className='flex flex-col w-full'>
                            <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]' onClick={editPerson}>EDIT STUFF MEMBER</button>
                            <button className='bg-white text-black p-4 self-center w-[232px] sm:w-[50%] rounded-full text-[14px] md:text-[16px]' onClick={deletePerson}>DELETE STUFF MEMBER</button>
                        </div>
                    </Modal>
                    :

                    <Modal isOpen={isModalOpen}>
                        <div className='flex flex-col w-full'>
                            <div className='mb-10 flex gap-4'>
                                <GoArrowLeft size={25} className='hover:cursor-pointer' onClick={deletePerson} />
                                <p className='text-black text-[20px] font-bold'>Are You Sure You Want To Delete Staff Member?</p>
                            </div>
                            <button className='bg-btnSecondary text-white p-4 self-center w-[232px] sm:w-[50%] rounded-full mb-4 text-[14px] md:text-[16px]'>DELETE OFFICE</button>
                            <button className='bg-white text-black p-4 self-center w-[232px] sm:w-[50%] rounded-full text-[14px] md:text-[16px]' onClick={deletePerson}>KEEP OFFICE</button>
                        </div>
                    </Modal>
                }
                {editMember &&

                    renderStepContent()

                }

            </div>
        </>
    )
}

export default StuffMember