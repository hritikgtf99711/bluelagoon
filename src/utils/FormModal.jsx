import { useState } from 'react';
import Form from './Form';
const FormModal = ({isOpen, setIsOpen,closeModal,selectedPdf}) => {

 

  return isOpen && ( <div className="min-h-screen bg-gray-100 flex items-center justify-center">
     

    
        <div className="fixed inset-0 form_modal bg-[#1f15156b] bg-opacity-50  px-[15px]  z-[9999] flex items-center justify-center z-50">
          <div className="bg-[var(--secondary-color)]  max-w-md w-full p-6 relative">
            <img
                src={"/assets/images/colored-logo.svg"}
                alt='logo'
                className='m-[auto] mb-[15px]'
                width={'180'}
              />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
                
              <svg className="w-6 h-6 cursor-pointer" fill="none" cla stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Form setIsOpen={setIsOpen} selectedPdf={selectedPdf}/>
            
          </div>
        </div>
    
    </div>
     
  );
};

export default FormModal;