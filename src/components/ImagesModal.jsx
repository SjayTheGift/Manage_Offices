import { useState, useEffect, useContext } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Modal from './Modal';
import { avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7 } from '../icons';
import { AppContext } from '../AppContext';
const ImagesModal = ({ goToPreviousStep, isModalOpen, closeModal, add_or_edit_person, buttonName, staff }) => {
    const [selectedImage, setSelectedImage] = useState("");
    const { loading, addStaffMember, updateStaffMember } = useContext(AppContext);

    const handleClick = (image) => {

        setSelectedImage(image);

    };
    const { id } = useParams()

    const images = [
        { id: 1, src: avatar_1, alt: 'Avatar 1' },
        { id: 2, src: avatar_2, alt: 'Avatar 2' },
        { id: 3, src: avatar_3, alt: 'Avatar 3' },
        { id: 4, src: avatar_4, alt: 'Avatar 4' },
        { id: 5, src: avatar_5, alt: 'Avatar 5' },
        { id: 6, src: avatar_6, alt: 'Avatar 6' },
        { id: 7, src: avatar_7, alt: 'Avatar 7' },
    ];

    const navigate = useNavigate()


    const displayedImages = images.slice(0, 4);
    const displayedImages2 = images.slice(4, 7);

    const addAvatarAndIdToUser = async () => {
        // Retrieve user object from localStorage
        const new_staff_member = await JSON.parse(localStorage.getItem("new_staff_member"));

        // Add the avatar field to the user object
        new_staff_member.avatar = selectedImage
        new_staff_member.office_id = id;
        new_staff_member.id = uuidv4();

        // Store the updated user object back in localStorage
        localStorage.setItem("new_staff_member", JSON.stringify(new_staff_member));
    };

    addAvatarAndIdToUser();



    const handleAddNewStaffMember = (e) => {
        e.preventDefault();
        if (selectedImage == "") {
            console.log("Please select image");
        } else {
            const staffMember = JSON.parse(localStorage.getItem("new_staff_member"));
            addStaffMember(staffMember);
            toast.success("Staff Added")
            closeModal();
            navigate('/')
        }

    };

    const handleUpdateStaffMember = (e) => {
        e.preventDefault();
        const update_staff_member = JSON.parse(localStorage.getItem("update_staff_member"));
        update_staff_member.avatar = selectedImage;
        if (selectedImage == "") {
            console.log("Please select image");
        } else {
            updateStaffMember(update_staff_member)
            toast.success("Person updated")
            closeModal();
            navigate('/')

        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    useEffect(() => {
        if (buttonName == "edit") {
            setSelectedImage(staff.avatar);
        }
    }, [])


    return (
        <>
            <Modal isOpen={isModalOpen}>
                <div className='flex flex-col w-full gap-4'>
                    <div className='mb-5 flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                            <GoArrowLeft size={25} onClick={goToPreviousStep} className='hover:cursor-pointer' />
                            <p className='text-black text-[20px] font-bold'>{buttonName === "add" ? "Add" : "Edit"} Stuff Member</p>
                        </div>

                        <IoCloseCircleOutline size={25} className='hover:cursor-pointer text-primary' onClick={add_or_edit_person} />
                    </div>
                    <p className='text-[16px] font-bold'>Avatar</p>

                    <div className='flex justify-around item-center'>
                        {displayedImages.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className={`w-15 h-15 rounded-full ${selectedImage && selectedImage === image.src ? 'ring-4 ring-gray-500' : ''
                                    }`}
                                onClick={() => handleClick(image.src)}
                            />
                        ))}
                    </div>
                    <div className='flex justify-around item-center'>
                        {displayedImages2.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className={`w-15 h-15 rounded-full ${selectedImage && selectedImage === image.src ? 'ring-4 ring-gray-500' : ''
                                    }`}
                                onClick={() => handleClick(image.src)}
                            />
                        ))}
                    </div>

                    <div className='flex justify-center items-center gap-1'>
                        <div className='rounded-full w-2 h-2 border-2 border-btnPrimary'></div>
                        <div className="rounded-full w-2 h-2 bg-btnPrimary"></div>
                    </div>
                    {buttonName == "add" ?
                        <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]'
                            onClick={(e) => handleAddNewStaffMember(e)}>ADD STUFF MEMBER</button>
                        :
                        <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]'
                            onClick={(e) => handleUpdateStaffMember(e)}>UPDATE STUFF MEMBER</button>
                    }

                </div>
            </Modal>
        </>
    )
}

export default ImagesModal