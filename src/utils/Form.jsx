import React from 'react'

export default function Form() {
  return (
    <div className='relative px-[50px] py-[40px]'>
        <img src='/assets/icons/form-frame.svg' alt='form-frame' className='absolute h-[100%] w-[100%] top-0 left-0'/>
    <form className='relative'>
            <div className=''>
                <input className='py-[15px] w-[100%] placeholder:font-[500] outline-none border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px]' type='text' placeholder='Name'/>
            </div>
             <div className=''>
                <input className='py-[15px] w-[100%] placeholder:font-[500] outline-none mt-[15px] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[15px]' type='email' placeholder='Email'/>
            </div>
             <div className=''>
                <input className='py-[15px] w-[100%] placeholder:font-[500] outline-none mt-[15px] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px]' type='phone' placeholder='Contact No.'/>
            </div>
             <div className=''>
               <textarea name="" id=""  cols='1' rows="1" className='py-[30px]  outline-none  w-[100%] border-b-[1px] border-[rgba(35, 81, 98, 0.60)] px-[12px]' placeholder='Comments'></textarea>
            </div>

            <input type='button' className='bg-[var(--primary-color)] w-[100%] text-white mt-[40px] py-[15px] ' value={'Submit Now'}/>
    </form>
    </div>
  )
}
