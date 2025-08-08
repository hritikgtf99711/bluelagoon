import React from 'react'
import Headings from '../utils/Headings'
export default function Disclaimer() {
  return (
    <section className='py-[120px]'>
        <div className='container'>
                <Headings headings={"Disclaimer & Privacy Policy"}/>
                <p className='font-manrope mt-[30px] lg:px-[40px] text-center'>Information in this website is for general
                    information and illustrative purposes only and does not constitute an offer or contract, and
                    the final property and its surroundings may differ. The images shown are for representative
                    purposes only and may not reflect the final product. Detailed terms and conditions will be
                    reflected in the sale and purchase agreement.</p>
        </div>
    </section>
  )
}
