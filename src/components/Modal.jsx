import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null; // Return null if the modal is closed
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div> {/* Overlay */}
            <div className="relative bg-white rounded-lg p-6 shadow-lg">
                {/* Modal content */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Modal Title</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ante at erat
                    ultricies auctor. Donec id ligula tempor, efficitur massa at, consectetur
                    nulla.
                </p>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;