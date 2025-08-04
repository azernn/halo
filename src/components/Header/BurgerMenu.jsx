import { useState } from "react"
import { Link } from "react-router"

function BurgerMenu({data,sub}) {
    const[subMenu, setSubmenu]=useState(false)
    return (
        <>
            <div className="bg-[#ebe9e3] p-4 w-full h-[90vh] lg:hidden " onClick={()=>setSubmenu(true)}>
                {data.slice(0,4).map(item=>(
                    <span className="flex gap-3 flex-col p-4 px-6 text-black ">
                        <div  key={item.id} className="flex items-center justify-between">
                        <span className="text-[24px] font-semibold">{item.name}</span>
                        <span className="text-2xl">›</span>
                         </div> 
                    </span>
                ))}
            </div>
        </>

    )
}

export default BurgerMenu
