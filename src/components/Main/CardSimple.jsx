import { Link } from 'react-router-dom';

function CardSimple({ className = '', cardData }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${className}`}>
      {cardData?.map(item => (
        <Link 
          key={item.id} 
          to={`/details/${item.id}`} 
          className="w-full relative cursor-pointer overflow-hidden"
        >
          <div className="relative">
            <img
              src={item.img}
              alt={item.title}
              className={`w-full object-cover ${className}`}
            />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-white font-bold text-[2em] uppercase">
              {item?.middle}
            </h2>
            <div className='flex justify-between w-full items-center absolute bottom-0 left-0 p-6'>
              <p className='font-bold text-[15px] text-white uppercase'>{item?.title}</p>
              <button className='w-[40px] h-[40px] cursor-pointer '>
                <img src="/src/assets/img/link.svg" alt="" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardSimple;