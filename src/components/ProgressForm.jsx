import { useState } from 'react'
import FormModal from "./FormModal"
import ImagesModal from "./ImagesModal"


const ProgressForm = ({ isModalOpen, closeModal, buttonName, staff }) => {

    const add_or_edit_person = () => {
        if (buttonName === "add") {
            closeModal();
            setCurrentStep(1);
        }
        if (buttonName === "edit") {
            if (isModalOpen == true) {
                closeModal();
                setCurrentStep(1);
            }
        }
    }


    const [currentStep, setCurrentStep] = useState(1);

    const goToNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const goToPreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <FormModal
                    goToNextStep={goToNextStep}
                    isModalOpen={isModalOpen}
                    add_or_edit_person={add_or_edit_person}
                    currentStep={currentStep}
                    staff={staff}
                    buttonName={buttonName}
                />;
            case 2:
                return <ImagesModal
                    goToPreviousStep={goToPreviousStep}
                    isModalOpen={isModalOpen}
                    add_or_edit_person={add_or_edit_person}
                    buttonName={buttonName}
                    staff={staff}
                    closeModal={closeModal}
                />;
            default:
                return null;
        }
    };

    return (
        <>
            {renderStepContent()}
        </>
    )
}

export default ProgressForm