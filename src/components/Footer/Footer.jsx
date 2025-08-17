import React, { useState } from 'react'
import { BiColor } from 'react-icons/bi';
import { IoIosArrowDown, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import SlideText from '../SlideText';
import { footerData } from '../../consts/const';

function Footer() {
  const [openLists, setOpenLists] = useState([])

  function toggleMenu(id) {
    setOpenLists(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id) 
        : [...prev, id] 
    )
  }

  return (
    <div className='bg-[#ebe9e3]'>
      <div className='text-black  '><SlideText/></div>
      <div className='border-b border-gray-300  uppercase mt-5 flex  flex-col sm:flex-row '>
        <div className='p-6 flex flex-col gap-4 justify-evenly h-[290px] sm:w-[30%] md:border-none border-r-1 border-gray-300 sm:order-1 order-3'>
          <a href="" className=''>
            <img src="https://www.newlinehalo.dk/on/demandware.static/-/Sites-halo-Library/default/dw38ef2d1b/footer/HALO_LOGO_Black.svg" alt="" />
          </a>
          <span className='text-[11px] uppercase font-semibold'>
            <p>© HUMMEL CENOZOIC APS</p>
            <p>Balticagade 20</p>
            <p>8000 Aarhus C</p>
            <p> DENMARK</p>
          </span>
          <div>
            <p className='my-3 text-[11px] font-semibold'>Follow us</p>
            <span className='flex gap-2 text-[#3b3b3b] text-[25px]'>
              <a href="">
                <IoLogoFacebook /></a>
              <a href="">
                <IoLogoInstagram /></a>
            </span>
          </div>
        </div>
        <div className='sm:w-[50%] order-2 md:border-none border-r-1 border-gray-300'>
          <div className=' md:hidden flex flex-col gap-7 py-6 '>
            {footerData.map(item => {
              const isExp = openLists.includes(item.id)

              return (
                <div key={item.id} >
                  <div
                    className='flex justify-between py-4 px-5 cursor-pointer text-[11px] font-bold sm:border-none border-b border-gray-300 uppercase'
                    onClick={() => toggleMenu(item.id)}
                  >
                    {item.title} <IoIosArrowDown />
                  </div>
                  <ul className={`${isExp ? 'block' : 'hidden'}`} >
                    {item.list.map((elem, i) => (
                      <li key={i} className='py-[7px] px-5 text-[11px] font-bold uppercase  ' >
                        <a href="#">{elem}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className='border-r border-gray-300 gap-3 md:flex hidden '>
            {footerData.slice(0, 3).map((item, i) => (
              <div key={i} className='w-[30%] border-l border-gray-300'>
                <p className='py-4 px-5 cursor-pointer text-[11px] font-semibold'>{item.title}</p>
                <ul>
                  {item.list.map((elem, i) => (
                    <li key={i} className='py-[7px] px-5 text-[11px] font-semibold uppercase '>
                      <a href="#">{elem}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='sm:w-[30%] p-6 px-7 sm:order-3 order-1'>
          <p className='font-bold text-[20px] mb-3'>TILMELD OG SPAR 10% PÅ ALT NYT</p>
          <input className='uppercase border-b w-full focus:outline-none text-[13px] my-6' type="email" name="email" id="" placeholder='Email adress' />
          <button className='bg-[#ff6600] rounded-3xl px-2 sm:w-[46%] lg:w-[29%] w-full py-3 mt-3 text-white uppercase text-[12px] block font-semibold'>Sign up</button>
        </div>
      </div>
      <div className='flex justify-between text-[11px] font-semibold p-4'>
        <p>CVR: 43317032 / ALL RIGHTS RESERVED</p>
        <div className='w-[39%] md:w-[28%] flex justify-end'>
          <div className='flex justify-between w-full'>
            <div className='text-[13px] font-semibold  items-center gap-2 uppercase hidden md:flex'><TfiWorld /><span>Damnark</span> <span>DK EN</span></div>
            <img src="https://www.newlinehalo.dk/on/demandware.static/Sites-halo-Site/-/default/dwc05deb7e/images/footer/thornico-logo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer