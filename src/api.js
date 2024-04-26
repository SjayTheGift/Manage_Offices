// api.js
export const fetchOffices = async () => {
    try {
        const response = await fetch('/api/offices');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching offices:', error);
        return [];
    }
};

export const fetchSingleOffice = async (id) => {
    try {
        const res = await fetch(`/api/offices/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error fetching data", error)
        return [];
    }
};


export const fetchStaffMembersByOffice = async (officeId) => {
    try {
        const response = await fetch('/api/staffs');
        if (response.ok) {
            const staffMembers = await response.json();
            const staffMembersByOffice = staffMembers.filter((staff) => staff.office_id === officeId);
            return staffMembersByOffice;
        } else {
            console.log('Failed to fetch staff members.');
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};


export const addNewStaffMember = async (newStaffMember) => {
    try {
        const response = await fetch('/api/staffs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStaffMember),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding new staff member:', error);
        return null;
    }
};

export const updateStaffMemberById = async (updatedStaffMember) => {
    try {
        const response = await fetch(`/api/staffs/${updatedStaffMember.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedStaffMember),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding new staff member:', error);
        return null;
    }
};

export const deleteStaff = async (id) => {
    try {
        const response = await fetch(`/api/staffs/${id}`, {
            method: 'DELETE',
        });
        return;
    } catch (error) {
        console.error('Error deleting staff member:', error);
        return null;
    }
};


// Office Endpoints
export const createOffice = async (addOffice) => {
    try {
        const response = await fetch('/api/offices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addOffice),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding new office:', error);
        return null;
    }
};

export const updateOffice = async (updatedOffice) => {
    try {
        const response = await fetch(`/api/offices/${updatedOffice.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedOffice),
        });
        const data = await response.json(updatedOffice);
        return data;
    } catch (error) {
        console.error('Error updating new office:', error);
        return null;
    }
};

export const deleteOffice = async (id) => {
    try {
        const response = await fetch(`/api/offices/${id}`, {
            method: 'DELETE',
        });
        return;
    } catch (error) {
        console.error('Error deleting office:', error);
        return null;
    }
};