import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from './Modal';
const StuffMember = ({ avatar, name }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>

            <div className='flex justify-between items-center w-full my-2'>
                <div className='flex items-center gap-6'>
                    <img src={avatar} />
                    <h3>{name}</h3>
                </div>

                <BsThreeDotsVertical size={25} className='hover:cursor-pointer' onClick={openModal} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </>
    )
}

export default StuffMember