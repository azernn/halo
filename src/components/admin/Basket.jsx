import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router'

function Basket() {
    return (
        <div>
            <div className=' flex items-center justify-between mt-4 p-5 '>
                <Link to={'/'} className='uppercase md:text-[13px] text-[11px] flex items-center gap-2 hover:underline w-1/3'> <IoIosArrowBack />CONTINUE SHOPPING</Link>
                <div className='flex items-center flex-col w-1/3'>
                    <h1 className='md:text-[29px] text-[16px] font-semibold '>Cart</h1>
                    <p className='text-[14px]'> You have 0 product(s) in your basket</p>
                </div>
                <h1 className='w-1/3'></h1>
            </div>
            <div>
                <div className='border-t border-b border-gray-300'></div>
            </div>
        </div>
    )
}

export default Basket
