// AppContext.js

import React, { createContext, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchSingleOffice, fetchOffices, fetchStaffMembersByOffice, addNewStaffMember, updateStaffMemberById, createOffice, updateOffice, deleteOffice, deleteStaff } from './api';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [staffs, setStaffs] = useState([]);
    const [staff, setStaff] = useState();
    const [offices, setOffices] = useState([]);
    const [singleOffice, setSingleOffice] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation()
    const id = location.pathname.split('/').pop()




    useEffect(() => {

        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const staffsData = await fetchStaffMembersByOffice(id);
            const officesData = await fetchOffices();

            // Fetch the single office based on the URL parameter
            if (id) {
                const singleOfficeData = await fetchSingleOffice(id);
                setSingleOffice(singleOfficeData);
            }

            setStaffs(staffsData);
            setOffices(officesData);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleAddStaffMember = async (newStaffMember) => {
        try {
            const addedStaffMember = await addNewStaffMember(newStaffMember);

            if (addedStaffMember) {
                setStaffs((prevStaffs) => [...prevStaffs, addedStaffMember]);

                const updatedOffices = offices.map((office) => {
                    if (office.id === newStaffMember.office_id) {
                        return {
                            ...office,
                            stuff_members: (parseInt(office.stuff_members) + 1).toString(),
                        };
                    }
                    return office;
                });

                setOffices(updatedOffices);
            }
        } catch (error) {
            console.error('Error adding staff member:', error);
        }
    };

    const handleUpdateStaffMember = async (updatedStaff) => {
        try {
            const updatedStaffMember = await updateStaffMemberById(updatedStaff);

            if (updatedStaffMember) {
                setStaffs((prevStaffs) => {
                    const updatedStaffs = prevStaffs.map((staff) => {
                        if (staff.id === updatedStaffMember.id) {
                            return { ...staff, ...updatedStaffMember };
                        }
                        return staff;
                    });
                    return updatedStaffs;
                });
            }
        } catch (error) {
            console.error('Error updating staff member:', error);
        }
    };

    const handleAddOffice = async (newOffice) => {
        try {
            const addedOffice = await createOffice(newOffice);
            setOffices((prevOffices) => [...prevOffices, addedOffice]);
        } catch (error) {
            console.error('Error adding staff member:', error);
        }
    };

    const handleUpdateOffice = async (updatedOffice) => {
        try {
            const updatedOfficeData = await updateOffice(updatedOffice);
            setOffices((prevOffices) => {
                const updatedOffices = prevOffices.map((office) => {
                    if (office.id === updatedOfficeData.id) {
                        return { ...office, ...updatedOfficeData };
                    }
                    return office;
                });
                return updatedOffices;
            });
        } catch (error) {
            console.error('Error updating office:', error);
        }
    };

    const handleDeleteOffice = async (officeId) => {
        try {
            await deleteOffice(officeId);
            setOffices((prevOffices) => prevOffices.filter((office) => office.id !== officeId));
        } catch (error) {
            console.error('Error deleting office:', error);
        }
    };

    const handleDeleteStaff = async (staffId) => {
        try {
            await deleteStaff(staffId);
            setStaffs((prevStaffs) => prevStaffs.filter((staff) => staff.id !== staffId));
        } catch (error) {
            console.error('Error deleting staff member:', error);
        }
    };

    const values = {
        staffs,
        offices,
        singleOffice,
        loading,
        addStaffMember: handleAddStaffMember,
        updateStaffMember: handleUpdateStaffMember,
        addOffice: handleAddOffice,
        updateOffice: handleUpdateOffice,
        deleteOffice: handleDeleteOffice,
        deleteStaff: handleDeleteStaff,

    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };