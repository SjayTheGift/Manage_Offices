import { useState, useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Modal from './Modal';
import { toast } from 'react-toastify';
const FormModal = ({ goToNextStep, isModalOpen, add_or_edit_person, buttonName, staff }) => {

    const [formData, setFormData] = useState({
        id: "",
        first_name: "",
        last_name: "",
        avatar: "",
        office_id: ""
    })

    const { first_name, last_name } = formData;

    const onInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))

    }

    const onNext = (e) => {
        e.preventDefault()

        if (buttonName == "edit") {
            localStorage.setItem('update_staff_member', JSON.stringify(formData))
            goToNextStep();
        } else {
            if (first_name.trim() !== '' && last_name.trim() !== '') {
                localStorage.setItem('new_staff_member', JSON.stringify(formData))
                goToNextStep();
            } else {
                toast.error("All fields required");
            }
        }

    }

    useEffect(() => {
        if (buttonName === "edit") {
            setFormData(staff)
        }
    }, [])

    return (
        <>
            <Modal isOpen={isModalOpen}>
                <div className='flex flex-col w-full gap-4'>
                    <div className='mb-5 flex justify-between'>

                        <p className='text-black text-[20px] font-bold'>{buttonName === "add" ? "Add" : "Edit"} Stuff Member</p>
                        <IoCloseCircleOutline size={25} className='hover:cursor-pointer text-primary' onClick={add_or_edit_person} />
                    </div>
                    <form method=''>
                        <input type='text' placeholder='First Name'
                            name="first_name" className='w-full p-4 mb-5
                    bg-white outline-0' value={first_name}
                            onChange={(e) => onInputChange(e)} />
                        <input type='text' placeholder='Last Name'
                            name="last_name" className='w-full p-4 bg-white  outline-0'
                            value={last_name}
                            onChange={(e) => onInputChange(e)} />

                    </form>


                    <div className='flex justify-center items-center gap-1'>
                        <div className="rounded-full w-2 h-2 bg-btnPrimary"></div>
                        <div className='rounded-full w-2 h-2 border-2 border-btnPrimary'></div>
                    </div>

                    <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]' onClick={(e) => onNext(e)}>NEXT</button>
                </div>
            </Modal>
        </>
    )
}

export default FormModal