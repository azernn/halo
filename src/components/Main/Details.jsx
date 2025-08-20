import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItem } from '../../../services';
import { FaBasketShopping } from 'react-icons/fa6';
import SizeGuide from './SizeGuide';

function Details() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState(null);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        getItem(id).then(res => {
            setData(res);
            console.log(res);
        });
    }, [id]);

    const islet = (elm) => {
        setActiveTab(elm);
    };
   

    return (
        <div className='border-r border-gray-300  flex flex-col h-full '>
            <div className='flex items-center p-4 md:flex-row flex-col mt-27'>
                <div className=" md:w-1/2 w-full md:border-r border-gray-300 pt-3 h-[50vh] md:h-[80vh]">
                    <Swiper key={data.images?.length}
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
                                    className={`w-full h-full object-contain`}
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
                                    onClick={() => islet(`sp${i}`)}
                                    key={i}
                                    className={`w-[44px] ${activeTab === `sp${i}` ? 'bg-gray-300' : ''} h-[36px] pt-2 font-semibold block text-center border border-gray-300 text-[12px]`}
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

                    <button className='flex items-center justify-center rounded-3xl py-2 uppercase font-semibold text-[14px] w-[190px] gap-2 bg-[#222020] text-white'>
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
