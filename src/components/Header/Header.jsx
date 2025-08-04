import SlideText from '../SlideText';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBookmark, FaRegUser, FaBasketShopping } from "react-icons/fa6";
import { useEffect, useState, useRef } from 'react';
import { getData } from '../../../services';
import CardSimple from '../Main/CardSimple';
import BurgerMenu from './BurgerMenu';
import Hamburger from 'hamburger-react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null);
    const timeoutRef = useRef(null);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        getData().then(res => {
            setData(res);
        });
    }, []);

    const handleEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsOpen(true);
    };

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setActiveCategory(null);
        }, 100);
    };

    return (
        <header className='bg-transparent fixed top-0 left-0 w-full z-50 text-white'>
            <SlideText />
            <div className="px-2 py-4 border-b-1 border-gray-300">
                <div className="max-w-[1200px] flex justify-between mx-auto items-center">
                    <div className="flex items-center w-full md:w-[17%]">
                        <a href=""><img src="/src/assets/img/HALO_LOGO.svg" className='filter invert' alt="Logo" /></a>
                    </div>
                    <div className='w-full flex items-center justify-center' >
                        <ul className="items-stretch hidden w-[33%] justify-between lg:flex">
                            {data?.slice(0, 4).map((item, i, arr) => (
                                <li
                                    className="flex  uppercase text-[12px] font-semibold relative"
                                    key={i}
                                    onMouseLeave={handleLeave}
                                    onMouseEnter={() => {
                                        handleEnter();
                                        setActiveCategory(item);
                                    }}>
                                    <a href="#" className="flex items-center -mb-1">{item.name} </a>
                                    {i !== arr.length - 1 && <span className="ml-[13px] xl:ml-5">/</span>}
                                </li>
                            ))}
                        </ul>
                        <div
                            className={`absolute top-24 left-0 w-full mt-1 flex justify-between bg-white shadow-lg text-black p-4 transition-all duration-300 ease-in-out transform
                                  ${isOpen && activeCategory
                                    ? 'opacity-100 visible translate-y-0'
                                    : 'opacity-0 invisible -translate-y-2'}`}
                            onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                            {activeCategory?.Subcategory?.length > 0 ? (
                                <div className="flex flex-col gap-6 px-[35px] py-5 w-1/2">
                                    {activeCategory.Subcategory.map((sub) => (
                                        console.log(activeCategory),
                                        
                                        <a key={sub.id} className="text-sm hover: cursor-pointer uppercase font-bold text-[15px]">{sub.name}</a>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm">No subcategories</p>
                            )}
                            <div className='flex w-1/2 gap-3'>
                                <CardSimple className={`rounded-xl ${'h-[520px]'}`} />
                                <CardSimple className={`rounded-xl ${'h-[520px]'}`} />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center w-[340px] justify-end lg:w-[272px] '>
                        <IoSearchSharp onMouseEnter={() => setSearch(true)} />
                        <input type="text"
                            className={`transition-all duration-300 bg-transparent text-white outline-none border-b border-white
                            ${search ? 'w-32 opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}
                            placeholder='Search' />
                        <FaRegBookmark />
                        <FaRegUser />
                        <FaBasketShopping />
                        <button className="lg:hidden text-white">
                            <Hamburger size={16} toggle={setOpen} toggled={open} />
                        </button>

                    </div>
                </div>
            </div>
            <div className={` h-full ] bg-white w-full transition-transform duration-800 ease-in-out
  ${open ? 'translate-x-0' : '-translate-x-full'}` }>
  <BurgerMenu data={data} sub={activeCategory} />
</div>
        </header>
    );
}
export default Header;
