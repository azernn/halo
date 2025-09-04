import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getItem } from '../../../services';
import { FaBasketShopping } from 'react-icons/fa6';
import { CiBookmark } from "react-icons/ci"; 
import SizeGuide from './SizeGuide';
import { CartContext } from '../context/BasketContext';
import 'react-toastify/dist/ReactToastify.css';
import { FavoritesContext } from '../context/FavoritesContext';

function Details() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState(null);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { addToFavorites } = useContext(FavoritesContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getItem(id).then(res => {
            setData(res);
            setActiveTab(res.Size[0]);
        });
    }, [id]);

    const islet = (elm) => {
        setActiveTab(elm);
    };

    function addToBasket(product) {
        const item = {
            ...product,
            size: activeTab,
        };
        addToCart(item); 
    }

    return (
        <div className='border-r border-gray-300 flex flex-col h-full'>
            <div className='flex items-center p-4 sm:flex-row flex-col mt-27'>      
               <div className="sm:w-1/2 w-full md:border-r border-gray-300 pt-3 h-[50vh] md:h-[80vh] relative">

    <button 
        onClick={() => addToFavorites(data)} 
        className="absolute top-3 left-3 z-10 bg-white  rounded-full p-2 shadow-md hover:scale-110 transition"
    >
        <CiBookmark size={22} />
    </button>

    <Swiper
        key={data.images?.length}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="w-full h-full"
    >
        {data.images?.map((item, i) => (
            <SwiperSlide key={i} className='w-full h-full'>
                <img
                    src={item}
                    alt="product"
                    className="w-full h-full object-contain"
                />
            </SwiperSlide>
        ))}
    </Swiper>
</div>

                <div className='px-9 flex flex-col gap-5'>
                    <div className='uppercase text-[#1e1e1e] font-bold py-5'>
                        <p className='text-[20px]'>{data.name}</p>
                        <p className='text-[16px]'>{data.price?.toLocaleString()} $</p>
                    </div>

                    <div className='flex flex-col gap-3 uppercase'>
                        <p className='text-[10px] text-gray-700'>Choose Size:</p>
                        <div className='flex border-gray-400'>
                            {data.Size?.map((item, i) => (
                                <span
                                    onClick={() => islet(`${item}`)}
                                    key={i}
                                    className={`w-[44px] ${activeTab === `${item}` ? 'bg-gray-300' : ''} h-[36px] pt-2 font-semibold block cursor-pointer text-center border border-gray-300 text-[12px]`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p
                        className='text-[11px] font-semibold mt-2 underline uppercase cursor-pointer'
                        onClick={handleOpen}
                    >
                        Size Chart /
                    </p>

                    <button
                        onClick={() => addToBasket(data)}
                        className='flex items-center justify-center rounded-3xl py-2 uppercase font-semibold text-[14px] w-[190px] gap-2 bg-[#222020] text-white'
                    >
                        <FaBasketShopping /> Add to basket
                    </button>

                    <div className='text-[15px]'>
                        <p>Description:</p>
                        <p>{data.description}</p>
                    </div>
                </div>

                <SizeGuide handleClose={handleClose} open={open} />
            </div>
        </div>
    );
}

export default Details;
