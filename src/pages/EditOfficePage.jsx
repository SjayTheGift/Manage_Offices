import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner";
import { AppContext } from '../AppContext';

const EditOfficePage = () => {
    const { id } = useParams();
    const { offices, loading, updateOffice, deleteOffice } = useContext(AppContext);
    const [selectedColor, setSelectedColor] = useState("");
    const navigate = useNavigate();
    const colors = [
        { id: 1, bgName: 'bg-[#FFBE0B]', name: '#FFBE0B' },
        { id: 2, bgName: 'bg-[#FF9B71]', name: '#FF9B71' },
        { id: 3, bgName: 'bg-[#FB5607]', name: '#FB5607' },
        { id: 4, bgName: 'bg-[#97512C]', name: '#97512C' },
        { id: 5, bgName: 'bg-[#DBBADD]', name: '#DBBADD' },
        { id: 6, bgName: 'bg-[#FF006E]', name: '#FF006E' },
        { id: 7, bgName: 'bg-[#A9F0D1]', name: '#A9F0D1' },
        { id: 8, bgName: 'bg-[#00B402]', name: '#00B402' },
        { id: 9, bgName: 'bg-[#489DDA]', name: '#489DDA' },
        { id: 10, bgName: 'bg-[#0072E8]', name: '#0072E8' },
        { id: 11, bgName: 'bg-[#8338EC]', name: '#8338EC' },
    ];


    const displayedColors = colors.slice(0, 6);
    const displayedColors2 = colors.slice(6, 11);

    const handleClick = (color) => {

        setSelectedColor(color);

    };

    const [formData, setFormData] = useState({
        id: uuidv4(),
        company_name: "",
        address: "",
        email: "",
        phone_no: "",
        capacity: "",
        color: selectedColor
    })

    const { company_name, address, email, phone_no, capacity } = formData

    const onInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (company_name == "" || address == "" || email == "" || phone_no == "" || capacity == "") {
            toast.error("Please note all fields required");
        } else {
            if (selectedColor == "") {
                toast.error("Please select color");
            } else {
                formData.color = selectedColor
                updateOffice(formData);
                navigate("/")
            }
        }

    };

    const onDeleteClick = () => {
        const confirm = window.confirm(
            'Are you sure you want to delete this listing?'
        );

        if (!confirm) return;

        deleteOffice(id);


        navigate('/');
    };


    if (loading) {
        return <Spinner />;
    }

    useEffect(() => {
        const office = offices.find((office) => office.id === id);

        if (office) {
            setFormData({
                ...office,
                color: office.color || selectedColor
            });
            setSelectedColor(office.color || selectedColor);
        }
    }, [id]);

    return (
        <section className="w-full bg-gray-100 h-screen dark:bg-gray-900  px-8 xl:px-0">
            <div className="max-w-[1240px] mx-auto h-screen relative py-12">
                <div className='flex justify-between items-center mb-11'>
                    <Link to='/'>
                        <GoArrowLeft size={25} className='hover:cursor-pointer' />
                    </Link>
                    <p className='text-center text-[18px] font-medium'>Edit Office</p>
                    <div></div>
                </div>

                <form className='flex flex-col gap-2' onSubmit={handleSubmit} >
                    <input type='text' placeholder='Office Name'
                        name="company_name" className='w-full p-4 mb-5
                    bg-white outline-0'
                        value={company_name}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input type='text' placeholder='Physical Address'
                        name="address" className='w-full p-4 mb-5 bg-white  outline-0'
                        value={address}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input type='email' placeholder='Email Address'
                        name="email" className='w-full p-4 mb-5
                    bg-white outline-0'
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input type='text' placeholder='Phone Number'
                        name="phone_no" className='w-full p-4 mb-5 bg-white  
                        outline-0'
                        value={phone_no}
                        onChange={(e) => onInputChange(e)}
                    />
                    <input type='text' placeholder='Maxim Capacity'
                        name="capacity" className='w-full p-4 mb-5 bg-white  outline-0'
                        value={capacity}
                        onChange={(e) => onInputChange(e)}
                    />
                    <p className='text-[24px] font-bold mb-8'>Office Color</p>

                    <div className='flex justify-around item-center gap-2'>
                        {displayedColors.map((color) => (
                            <div key={color.id} name="color" className={`w-10 h-10 rounded-full hover:cursor-pointer ${color.bgName}  ${selectedColor === color.name ? 'ring-4 ring-gray-500' : ''
                                }`} onClick={() => handleClick(color.name)}></div>
                        ))}
                    </div>
                    <div className='flex justify-around item-center mt-5 gap-2'>
                        {displayedColors2.map((color) => (
                            <div key={color.id} name="color" className={`w-10 h-10 rounded-full hover:cursor-pointer ${color.bgName}  ${selectedColor === color.name ? 'ring-4 ring-gray-500' : ''
                                }`} onClick={() => handleClick(color.name)}></div>
                        ))}
                    </div>
                    <button className='bg-btnPrimary text-white p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px] mt-10'
                        type='submit'>UPDATE OFFICE</button>
                    <button className='bg-transparent text-btnPrimary p-4 self-center w-[232px] rounded-full mb-4 text-[14px] md:text-[16px]'
                        onClick={onDeleteClick}>DELETE OFFICE</button>
                </form>
            </div>

        </section>
    )
}

export default EditOfficePage