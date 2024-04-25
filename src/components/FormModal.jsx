import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from './Modal';
const FormModal = ({ goToNextStep, isModalOpen, editPerson }) => {


    return (
        <>
            <Modal isOpen={isModalOpen}>
                <div className='flex flex-col w-full gap-4'>
                    <div className='mb-5 flex justify-between'>

                        <p className='text-black text-[20px] font-bold'>Edit Stuff Member</p>
                        <IoCloseCircleOutline size={25} className='hover:cursor-pointer text-primary' onClick={editPerson} />
                    </div>
                    <input type='text' placeholder='First Name' className='w-full p-4 bg-white outline-0' />
                    <input type='text' placeholder='Last Name' className='w-full p-4 bg-white  outline-0' />

                    <div className='flex justify-center items-center gap-1'>
                        <div className="rounded-full w-2 h-2 bg-btnPrimary"></div>
                        <div className='rounded-full w-2 h-2 border-2 border-btnPrimary'></div>
                    </div>

                    <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]' onClick={goToNextStep}>NEXT</button>
                </div>
            </Modal>
        </>
    )
}

export default FormModal