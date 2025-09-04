import SlideText from '../SlideText';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBookmark, FaRegUser, FaBasketShopping } from "react-icons/fa6";
import { useEffect, useState, useRef } from 'react';
import { getData } from '../../../services';
import CardSimple from '../Main/CardSimple';
import BurgerMenu from './BurgerMenu';
import Hamburger from 'hamburger-react'
import { Link, useLocation } from 'react-router-dom';
import { cardData } from '../../consts/const';
import BasketCard from '../admin/BasketCard';
import SearchBar from './SearchBar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null);
    const timeoutRef = useRef(null);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation()


    useEffect(() => { getData().then(res => { setData(res); }); }, []);

    useEffect(() => {
        const handleScroll = () => { window.scrollY > 20 ? setScrolled(true) : setScrolled(false) };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shouldBeTransparent = () => {
        return location.pathname === "/" || location.pathname.startsWith("/category/");
    };

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
    const handleBasketEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowAddCard(true);
    };

    const handleBasketLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowAddCard(false);
        }, 110);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
                ${scrolled || open || isOpen
                    ? "bg-[rgb(235,233,227)] text-black"
                    : shouldBeTransparent()
                        ? "bg-transparent text-white"
                        : "bg-[#ebe9e3] text-black"
                }`}>
            <div className={`transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-[50px] opacity-100'}`}>
                <SlideText />
            </div>
            <div className="px-2 pt-4 border-b-1 border-gray-300">
                <div className="max-w-[1200px] flex justify-between mx-auto items-center pb-2">
                    <div className="flex items-center w-full md:w-[17%]">
                        <Link to={'/'}>
                            <img
                                src="https://www.newlinehalo.dk/on/demandware.static/-/Sites-halo-Library/default/dw337e1b9b/homepage/HALO_LOGO.svg"
                                className={`${scrolled || open || isOpen || !shouldBeTransparent() ? "filter invert-0" : "filter invert"} w-[100%]`}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className='w-full z-9999 flex items-center justify-center' >
                        <ul className="items-stretch hidden w-[33%] justify-between lg:flex">
                            {data?.slice(0, 4).map((item, i, arr) => (
                                <li className="flex uppercase text-[12px] font-bold relative" key={i}
                                    onMouseLeave={handleLeave}
                                    onMouseEnter={() => {
                                        handleEnter();
                                        setActiveCategory(item);
                                    }}>
                                    <Link onClick={() => setIsOpen(false)}
                                        to={`/category/${item.id}`}
                                        className={`flex items-center -mb-1 ${shouldBeTransparent() && !(scrolled || open || isOpen) ? "text-white" : "text-black"}`}
                                    >
                                        {item.name}
                                    </Link>
                                    {i !== arr.length - 1 && <span className="ml-[13px] xl:ml-5">/</span>}
                                </li>
                            ))}
                        </ul>
                        <div
                            className={`absolute top-full left-0 w-full h-[100vh] bg-[#ebe9e3] flex shadow-lg text-black p-4 transition-all duration-300 ease-in-out transform
                                  ${isOpen && activeCategory
                                    ? 'opacity-100 visible translate-y-0'
                                    : 'opacity-0 invisible -translate-y-2'}`}
                            onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                            {activeCategory?.Subcategory?.length > 0 ? (
                                <div className="flex flex-col gap-6 px-[35px] py-5 w-1/2" onClick={() => { setIsOpen(false) }}>
                                    {activeCategory.Subcategory.map((sub) => (
                                        <Link to={`/categories/${sub.id}`} key={sub.id} className="text-sm hover:underline uppercase font-bold text-[15px]">{sub.name}</Link>
                                    ))}
                                </div>
                            ) : (<p className="text-sm">No subcategories</p>)}
                            <CardSimple className={`rounded-xl h-[80vh] gap-4`} cardData={cardData.slice(6, 8)} />
                        </div>
                    </div>
                    <div className='flex gap-4 items-center w-[340px] justify-end lg:w-[272px] '>
                        <div onClick={() => setSearch(true)} className="flex items-center gap-2 relative group">
                            <IoSearchSharp
                                className={shouldBeTransparent() && !(scrolled || open || isOpen) ? "text-white" : "text-black"}
                            />
                            <input
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onBlur={() => setSearch(false)}
                                type="text"
                                className={`transition-all duration-300 bg-transparent outline-none border-b
  group-hover:w-32 group-hover:opacity-100
  ${search ? 'w-32 opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none text-black'} `}
                                placeholder="Search"
                            />
                        </div>
                        <Link to='/favorites'>
                            <FaRegBookmark className={shouldBeTransparent() && !(scrolled || open || isOpen) ? "text-white" : "text-black"} />
                        </Link>
                        <Link to='/login'>
                            <FaRegUser className={shouldBeTransparent() && !(scrolled || open || isOpen) ? "text-white" : "text-black"} />
                        </Link>
                        <Link to='/basket' onMouseEnter={handleBasketEnter} onMouseLeave={handleBasketLeave}>
                            <FaBasketShopping className={shouldBeTransparent() && !(scrolled || open || isOpen) ? "text-white" : "text-black"} />
                        </Link>
                        <button className="lg:hidden">
                            <Hamburger
                                size={16}
                                toggle={setOpen}
                                toggled={open}
                                color={shouldBeTransparent() && !(scrolled || open || isOpen) ? "#fff" : "#000"}
                            />
                        </button>
                    </div>
                    {search && (
                        <div className="absolute right-0 top-full text-black lg:w-[40%] sm:w-[56%] w-full z-50 transition-all duration-300 ease-in-out">
                            <SearchBar value={searchValue} data={data} />  
                        </div>
                    )}

                </div>
            </div>
            <div className={`absolute right-0 top-full mt-2 z-50 transition-all duration-300 ease-in-out ${showAddCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                onMouseLeave={handleBasketLeave} onMouseEnter={handleBasketEnter}>
                <BasketCard setShowAddCard={setShowAddCard} />
            </div>

            <div className={`lg:hidden bg-white z-999 w-full transition-all duration-900 ease-in-out overflow-hidden ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <BurgerMenu data={data} sub={activeCategory} setOpen={setOpen} />
            </div>
        </header>
    );
}
export default Header;