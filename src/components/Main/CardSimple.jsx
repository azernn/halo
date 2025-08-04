import React from 'react';

function CardSimple({ className = '' }) {
  return (
    <a className={`w-full relative cursor-pointer overflow-hidden  ${className}`}>
      <div>
        <img
          src="https://www.newlinehalo.dk/on/demandware.static/-/Sites-halo-Library/default/dwb8916f1d/Front%20Page/AUGUST/WEB_HALO_2025_Aug_Week32_Teaser2_Desktop_01.jpg"
          alt=""
          className={`w-full ${className} object-cover`}
        />
      </div>
      <div className='flex justify-between w-full items-center absolute bottom-0 left-0 p-6'>
        <p className='font-bold text-[15px] text-white uppercase'>Men's activewear</p>
        <button className='w-[40px] h-[40px] cursor-pointer '>
          <img src="/src/assets/img/link.svg" alt="" />
        </button>
      </div>
    </a>
  );
}

export default CardSimple;
