import React from 'react'

function Favorites() {
  return (
    <div className='mt-25 flex items-center justify-center'>
      <div>
        <div className='text-center max-w-[980px] mx-auto p-4 mb-5'>
          <h1 className='text-[29px] font-semibold uppercase'>My Favorites</h1>
          <p>My Favourites is a great way to keep track of your personal must-haves and their availability. And, most importantly, it just takes one click to move an item from the list and into your shopping cart.</p>
        </div>
        <p className='mb-4'>You Have 2 Products Under My Favorites</p>
        <div>
          <div className=' border-t border-gray-400 flex items-center my-3'>
          <span className='w-1/3'>
            <img src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dw42bba6d7/images/packshot/228104-1271.png?sw=300&sh=300&q=80" alt="" />
          </span>
          <div>
            <p>HALO SCOUT SHORTS</p>
            <p className='text-gray-500 text-[14px] '>Size: S</p>
            <p className='text-gray-500 text-[14px] '>Color: Griffin</p>
            <span className='mx-4'>
              <p className='underline text-[14px]'>Remove</p>
              <p className=' text-[16x] my-2'>699,99DK</p>
            </span>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className=' bg-[#1a1919] text-white py-3 rounded-full text-[14px] uppercase font-bold w-[25%]'>
            Add to card
          </button>
        </div>
        </div>
        <div>
          <div className=' border-t border-gray-400 flex items-center my-3'>
          <span className='w-1/3'>
            <img src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dw42bba6d7/images/packshot/228104-1271.png?sw=300&sh=300&q=80" alt="" />
          </span>
          <div>
            <p>HALO SCOUT SHORTS</p>
            <p className='text-gray-500 text-[14px] '>Size: S</p>
            <p className='text-gray-500 text-[14px] '>Color: Griffin</p>
            <span className='mx-4  md:hidden '>
              <p className='underline text-[14px]'>Remove</p>
              <p className=' text-[16x] my-2'>699,99DK</p>
            </span>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className=' bg-[#1a1919] text-white py-3 rounded-full text-[14px] uppercase font-bold w-[25%]'>
            Add to card
          </button>
        </div>
        </div>
        <div>
          <div className=' border-t border-gray-400 flex items-center my-3'>
          <span className='w-1/3'>
            <img src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-master-catalog/default/dw42bba6d7/images/packshot/228104-1271.png?sw=300&sh=300&q=80" alt="" />
          </span>
          <div>
            <p>HALO SCOUT SHORTS</p>
            <p className='text-gray-500 text-[14px] '>Size: S</p>
            <p className='text-gray-500 text-[14px] '>Color: Griffin</p>
            <span className='mx-4'>
              <p className='underline text-[14px]'>Remove</p>
              <p className=' text-[16x] my-2'>699,99DK</p>
            </span>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className=' bg-[#1a1919] text-white py-3 rounded-full text-[14px] uppercase font-bold w-[25%]'>
            Add to card
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Favorites
