import React from 'react'

function BasketCard() {
    return (
        <div className='bg-white w-[330px] text-black p-4  rounded-xl px-8 hidden md:block transform transition-all
      duration-300 ease-in-out' >
            <p className='text-center '> Card [3]</p>
            <div className='overflow-y-auto max-h-[60vh]'>
                <div className='mt-4 border-b border-gray-300 pb-3'  >
                    <div className='flex  '>
                        <div className=' flex flex-col w-[30%] gap-3'>
                            <img className='w-[60%]' src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dwfd95fb48/images/packshot/234034-6477.png?sw=300&sh=300&q=80" alt="" />
                            <p className='text-[11px] uppercase text-gray-400'> Qty : 1</p>
                        </div>
                        <div className=''>
                            <div>
                                <p className='text-[13px] uppercase' >HALO X MESSY WEEKEND</p>
                                <p className='text-[13px]'>699,95DKK</p>
                            </div>
                            <p className=' text-[11px]  my-2 text-gray-400'>Size:  ONE</p>
                            <button className='text-[12px] font-semibold hover:underline'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 border-b border-gray-300 pb-3'  >
                    <div className='flex  '>
                        <div className=' flex flex-col w-[30%] gap-3'>
                            <img className='w-[60%]' src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dwfd95fb48/images/packshot/234034-6477.png?sw=300&sh=300&q=80" alt="" />
                            <p className='text-[11px] uppercase text-gray-400'> Qty : 1</p>
                        </div>
                        <div className=''>
                            <div>
                                <p className='text-[13px] uppercase' >HALO X MESSY WEEKEND</p>
                                <p className='text-[13px]'>699,95DKK</p>
                            </div>
                            <p className=' text-[11px]  my-2 text-gray-400'>Size:  ONE</p>
                            <button className='text-[12px] font-semibold hover:underline'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between font-bold uppercase text-[14px] my-4 '>
                <p>Total </p>
                <p>1.363,32DKK </p>
            </div>
            <div className='my-3'>
                <button className='w-full bg-white text-black py-3 border border-gray-400 rounded-full text-[14px] uppercase font-bold my-2'>
                    Go to shopping card
                </button>
                <button className='w-full bg-[#1a1919] text-white py-3 rounded-full text-[14px] uppercase font-bold'>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default BasketCard
