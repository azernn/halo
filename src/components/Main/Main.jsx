import { useEffect, useState } from "react";
import CardSimple from "./CardSimple";
import Products from "./Products";
import { getProdForCategory } from "../../../services";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProdForCategory({page : 1, subCategoryId : 2}).then(res => {
      setData(res.data.slice(0,4));
      // console.log(res.data);
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
          src="https://player.vimeo.com/progressive_redirect/playback/1105089822/rendition/1080p/file.mp4?loc=external&signature=00b19cf6de335177a10b3a26abab47f2ad376d3ed208539551306db4411b391a"
        ></video>
        <div className="absolute bottom-[35px] left-0 w-full px-6 flex justify-between flex-col lg:flex-row gap-4">
          <h1 className="text-white text-4xl font-bold  uppercase">
            Back to Training
          </h1>
          <button className="bg-white rounded-3xl lg:w-[12%] w-[30%] uppercase font-semibold py-[10px]" >Shop now</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
      <CardSimple/>
      <CardSimple/>
      <CardSimple/>
      <CardSimple/>
      </div>
      <div id="azerin" className="flex flex-wrap">
        {data.length > 0 && 
          data.map(item => (
            <div className="w-1/2 md:w-1/4 m-0">
               <Products key={item.id} data={item} />
            </div>
          ))
        }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
      <CardSimple/>
      <CardSimple/>
      </div>
    </>

  )
}

export default Main;
