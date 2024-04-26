import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null; // Return null if the modal is closed
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50  mx-auto">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div> {/* Overlay */}
            <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg w-[800px] mx-4">
                {/* Modal content */}

                {children}

            </div>
        </div>
    );
};

export default Modal;