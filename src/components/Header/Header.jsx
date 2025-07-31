import SlideText from '../SlideText'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBookmark, FaRegUser, FaBasketShopping } from "react-icons/fa6";
import { useEffect } from 'react';
import { getData } from '../../../services';
import { useState } from 'react';
import { useRef } from 'react';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then(res => {
            setData(res.all)
            console.log(res.all);
        })
    }, {})
    const handleEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    useEffect(() => {
        const subcats = []   
        data?.forEach(item => {
            const key = Object.keys(item)[0];
            subcats.push(key)
        })
        console.log(subcats);
        
    }, [data])

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };
    return (
        <header>
            <SlideText />
            <div className="px-2 py-4 border-b-1 border-gray-300 " >
                <div className="max-w-[1200px] flex justify-between mx-auto items-center">
                    <div className="flex items-center">
                        <a href="">
                            <img src="https://www.newlinehalo.dk/on/demandware.static/-/Sites-halo-Library/default/dw337e1b9b/homepage/HALO_LOGO.svg" alt="" />
                        </a>
                    </div>
                    <div className='w-full flex items-center justify-center '>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            {data?.map((item, i) => (
                                <li className="flex capitalize" key={i} >
                                    <a href="#"
                                        onMouseEnter={handleEnter}
                                        onMouseLeave={handleLeave}
                                        className="flex items-center px-4 -mb-1">{Object.keys(item)}</a>
                                </li>
                            ))}

                        </ul>
                        <div
                            className={`fixed top-24 left-0 w-full mt-1  bg-black shadow-lg rounded p-2 transition-all duration-200 ease-in-out
                             ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        >
                           ds
                        </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <IoSearchSharp />
                        <FaRegBookmark />
                        <FaRegUser />
                        <FaBasketShopping />

                        <button className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
