import { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

import Modal from './Modal';
import { avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7 } from '../icons';
const ImagesModal = ({ goToPreviousStep, isModalOpen, editPerson }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const images = [
        { id: 1, src: avatar_1, alt: 'Avatar 1' },
        { id: 2, src: avatar_2, alt: 'Avatar 2' },
        { id: 3, src: avatar_3, alt: 'Avatar 3' },
        { id: 4, src: avatar_4, alt: 'Avatar 4' },
        { id: 5, src: avatar_5, alt: 'Avatar 5' },
        { id: 6, src: avatar_6, alt: 'Avatar 6' },
        { id: 7, src: avatar_7, alt: 'Avatar 7' },
    ];

    const displayedImages = images.slice(0, 4);
    const displayedImages2 = images.slice(4, 7);
    return (
        <>
            <Modal isOpen={isModalOpen}>
                <div className='flex flex-col w-full gap-4'>
                    <div className='mb-5 flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <GoArrowLeft size={25} onClick={goToPreviousStep} className='hover:cursor-pointer' />
                            <p className='text-black text-[20px] font-bold'>Edit Stuff Member</p>
                        </div>

                        <IoCloseCircleOutline size={25} className='hover:cursor-pointer text-primary' onClick={editPerson} />
                    </div>
                    <p className='text-[16px] font-bold'>Avatar</p>

                    <div className='flex justify-around item-center'>
                        {displayedImages.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className={`w-15 h-15 rounded-full ${selectedImage && selectedImage.id === image.id ? 'ring-4 ring-gray-500' : ''
                                    }`}
                                onClick={() => handleClick(image)}
                            />
                        ))}
                    </div>
                    <div className='flex justify-around item-center'>
                        {displayedImages2.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className={`w-15 h-15 rounded-full ${selectedImage && selectedImage.id === image.id ? 'ring-4 ring-gray-500' : ''
                                    }`}
                                onClick={() => handleClick(image)}
                            />
                        ))}
                    </div>

                    <div className='flex justify-center items-center gap-1'>
                        <div className='rounded-full w-2 h-2 border-2 border-btnPrimary'></div>
                        <div className="rounded-full w-2 h-2 bg-btnPrimary"></div>
                    </div>
                    <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]'>UPDATE STUFF MEMBER</button>
                </div>
            </Modal>
        </>
    )
}

export default ImagesModal