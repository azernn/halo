import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'

function Error() {
    return (
        <div className='flex mt-25 items-center justify-center bg-[#ebe9e3]'>
            <div className='w-[40%] ml-8 flex flex-col gap-5'>
                <h1 className='text-[3em] font-bold'>404</h1>
                <p className='mt-6 mb-2'>We can't seem to find the page you're looking for.</p>
                <p>Perhaps we've linked to a product that no longer exists or maybe you've made a typo?</p>
                <Link to='/' className='underline '>GO HOME ➤</Link>
            </div>
            <div className='w-[60%]'>
                <img className='' src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-Library/default/dw961eb267/homepage/SS24/150224_HALO_fleece.jpg" alt="" />
            </div>
        </div>
    )
}

export default Error
