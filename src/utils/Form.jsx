import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Form({ isOpen, setIsOpen, closeModal,selectedPdf }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onInfo = async (data) => {
    const { name, email, phone, comments, consent } = data;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://bluelagoon.mv/sendMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, comments, client: "bluelagoon" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
        if(selectedPdf){
           downloadPdf();
   }
      navigate(import.meta.env.VITE_BASE_URL + "thankyou");

      setIsOpen(false);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadPdf = () => {
    console.log(selectedPdf)
    if (!selectedPdf) return;
    const link = document.createElement("a");
    link.href = selectedPdf;
    link.download = selectedPdf.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    {/* <button onClick={downloadPdf}>Donwload</button> */}
    <div className='relative form_sec overflow-hidden'>
      <div className='relative px-[30px] py-[40px] border-[4px] border-[var(--primary-color)]'>
        <div className='h-[35px] w-[35px] rounded-[50%] absolute top-[-14px] right-[-20px] border-l-[4px] border-b-[4px] bg-[var(--secondary-color)] border-[var(--primary-color)]'></div>
        <div className='h-[35px] w-[35px] rounded-[50%] absolute top-[-14px] left-[-20px] border-r-[4px] border-b-[4px] bg-[var(--secondary-color)] border-[var(--primary-color)]'></div>
        <div className='h-[35px] w-[35px] rounded-[50%] absolute bottom-[-14px] left-[-20px] border-t-[4px] border-r-[4px] bg-[var(--secondary-color)] border-[var(--primary-color)]'></div>
        <div className='h-[35px] w-[35px] rounded-[50%] absolute border-l-[4px] border-t-[4px] bottom-[-14px] right-[-20px] bg-[var(--secondary-color)] border-[var(--primary-color)]'></div>
        
        <form onSubmit={handleSubmit(onInfo)}>
          <div>

            <input
              className='py-[15px] w-[100%] placeholder:font-[500] outline-none border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px]'
              type='text'
              placeholder='Name'
              {...register('name', { 
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name can only contain letters and spaces'
                }
              })}
            />
            {errors.name && (
              <p className='text-red-500 !text-[12px] font-manrope mt-1'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              className='py-[15px] w-[100%] placeholder:font-[500] outline-none mt-[15px] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[15px]'
              type='email'
              placeholder='Email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 !text-[12px] font-manrope mt-1'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              className='py-[15px] w-[100%] placeholder:font-[500] outline-none mt-[15px] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px]'
              type='tel'
              placeholder='Contact No.'
              {...register('phone', {
                required: 'Contact number is required',
                pattern: {
                  value: /^[\+]?[(]?[\d\s\-\(\)]{10,}$/,
                  message: 'Please enter a valid phone number (minimum 10 digits)',
                },
                minLength: {
                  value: 10,
                  message: 'Phone number must be at least 10 digits'
                }
              })}
            />
            {errors.phone && (
              <p className='text-red-500 !text-[12px] font-manrope mt-1'>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              cols='1'
              rows='1'
              className='py-[30px] outline-none w-[100%] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px] resize-none'
              placeholder='message'
              {...register('message', { 
                required: 'Message is required',
                minLength: {
                  // value: 10,
                  message: 'Message must be at least 10 characters'
                },
                maxLength: {
                  value: 500,
                  message: 'Message cannot exceed 500 characters'
                }
              })}
            ></textarea>
            {errors.message && (
              <p className='text-red-500 !text-[12px] font-manrope mt-1'>{errors.message.message}</p>
            )}
          </div>

          <div className='mt-[15px]'>
            <label className='flex items-start'>
              <input
                type='checkbox'
                className='!mr-[10px] !mt-[5px]'
                {...register('consent', {
                  required: 'You must authorize communication to proceed',
                })}
              />
              <span className='text-[11px] font-manrope'>
                I authorize company representatives to Call, SMS, Email, or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
              </span>
            </label>
            {errors.consent && (
              <p className='text-red-500 !text-[12px] font-manrope mt-1'>{errors.consent.message}</p>
            )}
          </div>

          <button
            type='submit'
            className='bg-[var(--primary-color)] cursor-pointer uppercase w-[100%] text-white mt-[40px] py-[15px] hover:opacity-90 transition-opacity disabled:opacity-50'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
      
    </div>
    </>
  );
}