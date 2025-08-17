import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router'

function Basket() {
    return (
        <div className='p-3 bg-[#ebe9e3]'>
            <div className=' flex items-center justify-between mt-25 p-5 '>
                <Link to={'/'} className='uppercase md:text-[13px] text-[11px] flex items-center gap-2 hover:underline w-1/3'> <IoIosArrowBack />CONTINUE SHOPPING</Link>
                <div className='flex items-center flex-col w-1/3'>
                    <h1 className='md:text-[29px] text-[16px] font-semibold '>Cart</h1>
                    <p className='text-[14px]'> You have 0 product(s) in your basket</p>
                </div>
                <h1 className='w-1/3'></h1>
            </div>
            <div className='flex justify-between gap-4 flex-col lg:flex-row'>
                <div className='border-t border-b border-gray-300 w-full lg:w-[75%] h-fit py-6'>
                    <div className='flex justify-between px-6'>
                        <div className='flex p-3'>
                            <div className='md:w-1/5 lg:w-[30%] w-[33%]'>
                                 <img  src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dw41dc4510/images/packshot/227348-2001.png?sw=300&sh=300&q=80" alt="" />
                            </div>
                            <div>
                                <p className='font-semibold text-[15px]'>HALO ASSET PANTS</p>
                                <div className='text-[15px] text-gray-500 my-5'>
                                    <p>size:M</p>
                                    <p className='mb-5'>color:black</p>
                                    <span className='text-[#f60] font-semibold block md:hidden'>599,97 DKK</span>
                                </div>
                                <div className='underline flex items-center gap-5 text-[13px]'>
                                    <p>Remove</p>
                                    <p className='flex items-center gap-1'> <CiBookmark /> Save for later</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <p className='text-[#e60] font-semibold'>555,9DKK</p>
                            <div className='flex gap-3 items-center'>
                                <button className='text-gray-500 text-[19px]'>-</button>
                                <span>1</span>
                                 <button className='text-gray-500 text-[19px]'>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[25%] w-full sm:w-[50%] '>
                    <div className=' border rounded-xl border-gray-300 flex flex-col gap-5 p-5 py-7'>
                    <h1 className='uppercase text-[20px] text-center font-semibold'>Summary</h1>
                    <div className='flex justify-between text-[15px] '>
                        <p>Subtotal:</p>
                        <p>599,97 DKK</p>
                    </div>
                    <div className='flex justify-between text-[15px] my-2 font-light'>
                        <p>Delivery (1-3 business days)</p>
                        <p>Free</p>
                    </div>
                    <div className='flex justify-between text-[15px] font-semibold'>
                        <p>Total (incl. VAT)</p>
                        <p>599,97 DKK</p>
                    </div>
                    <button className='uppercase bg-black rounded-4xl text-white py-3 font-semibold '> Proceed to checkout</button>
                    </div>
                    <div className='border rounded-xl border-gray-300 mt-4 py-3 md:w-full w-1/2'> 
                        <p className='text-center font-light'>We accept following payment...</p>
                        <div className='flex flex-wrap p-4 gap-3'>
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwde3bf532/Visa.PNG" alt="" />
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dw61d27b03/Visa%20electron.PNG" alt="" />
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwb2070354/mc_symbol_opt_73_3x.png" alt="" />
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwa3e4abe9/maestro.png" alt="" />
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dw06a580d4/DK_Logo(2).png" alt="" />
                            <img  className='w-[30%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwb5dedb30/images/payment-methods/Mobile%20Pay.svg" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Basket
