import { useEffect, useState } from "react";
import CardSimple from "./CardSimple";
import Products from "./Products";
import { getProdForCategory } from "../../../services";
import { cardData } from '../../consts/const';
import video from '../../assets/img/halobg.mp4'

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    getProdForCategory({ page: 1, subCategoryId: 2 }).then(res => {
      setData(res.data.slice(0, 4));
    });
  }, []);
  return (
    <>
      <div className="relative w-full h-[590px]">
        <video
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          src={video}
        ></video>
        <div className="absolute bottom-[35px] left-0 w-full px-6 flex justify-between flex-col lg:flex-row gap-4">
          <h1 className="text-white text-4xl font-bold  uppercase">
            Back to Training
          </h1>
          <button className="bg-white rounded-3xl lg:w-[12%] w-[30%] uppercase font-semibold py-[10px]" >Shop now</button>
        </div>
      </div>
      <div className=' '>
        <CardSimple cardData={cardData.slice(0,4)}/>
      </div>
      <div id="azerin" className="flex flex-wrap">
        {data.length > 0 &&
          data.map(item => (
            <div className="w-1/2 md:w-1/4 m-0" key={item.id}>
              <Products  data={item} />
            </div>
          ))
        }
      </div>
      <CardSimple cardData={cardData.slice(4,6)} />
    </>

  )
}

export default Main;
