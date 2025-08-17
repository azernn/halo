import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

function Products({ data }) {
  return (

    <Link to={`/details/${data.id}`}
      state={data}
      className='border-r border-gray-300 border-b flex flex-col h-full'>
      <div className="h-[335px] w-full pt-3">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="w-full h-full "
        >
          {data.images?.map((item, i) => (
            <SwiperSlide key={i} className='w-full h-full'>
              <img
                src={item}
                alt="product"
                className='w-full h-full object-contain lg:object-cover '
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     <div className='px-6 uppercase text-[#1e1e1e] font-bold border-t border-gray-300 py-5 mt-4'>
          <p className='text-[13px]'>{data.name}</p>
          <p className='text-[14px]'>{data.price.toLocaleString()} $</p>
        </div>
    </Link>
  );
}

export default Products;
