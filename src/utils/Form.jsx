import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate=useNavigate();

  const onInfo = async (data) => {
    const { name, email, phone, comments } = data;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://bluelagoon.mv/sendMail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, comments,client:'bluelagoon' })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      navigate(import.meta.env.VITE_BASE_URL+"thankyou")
      reset(); 
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='relative overflow-hidden'>
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
              <p className='text-red-500 text-[10px] font-manrope mt-1'>{errors.name.message}</p>
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
              <p className='text-red-500 text-[10px] font-manrope mt-1'>{errors.email.message}</p>
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
              <p className='text-red-500 text-[10px] font-manrope mt-1'>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              cols='1'
              rows='1'
              className='py-[30px] outline-none w-[100%] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px] resize-none'
              placeholder='message'
              {...register('message', { 
                required: 'message are required',
                minLength: {
                  value: 10,
                  message: 'message must be at least 10 characters'
                },
                maxLength: {
                  value: 500,
                  message: 'message cannot exceed 500 characters'
                }
              })}
            ></textarea>
            {errors.comments && (
              <p className='text-red-500 text-[10px] font-manrope mt-1'>{errors.comments.message}</p>
            )}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-[var(--primary-color)] uppercase w-[100%] text-white mt-[40px] py-[15px] hover:opacity-90 transition-opacity disabled:opacity-50'
          >
            {isSubmitting ? 'Sending...' : 'Submit Now'}
          </button>
        </form>
      </div>
    </div>
  );
}