import { useState } from "react";
import { Link } from "react-router";

function BurgerMenu({ data }) {
    const [subMenu, setSubmenu] = useState(null);

    return (
        <div className="bg-[#ebe9e3] p-4 w-full h-screen relative overflow-hidden lg:hidden">
            {/* Main Category Menu */}
            <div className={`${subMenu ? '-translate-x-full' : 'translate-x-0'} transition-transform duration-500`}>
                {data.slice(0, 4).map(item => (
                    <span
                        className="flex gap-3 flex-col p-4 px-6 text-black"
                        key={item.id}
                        onClick={() => setSubmenu(item)}
                    >
                        <div className="flex items-center justify-between cursor-pointer">
                            <span className="text-[24px] font-semibold ">{item.name}</span>
                            <span className="text-2xl">›</span>
                        </div>
                    </span>
                ))}
            </div>
            <div className={`absolute top-0 right-0 w-full h-full bg-[#ebe9e3] text-black p-6 transform transition-transform duration-500 z-20
        ${subMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="mb-4  flex gap-3 items-center cursor-pointer" onClick={() => setSubmenu(null)}>‹
                    <h3 className="text-sm font-bold uppercase ">{subMenu?.name}</h3></div>
                {subMenu?.Subcategory?.map(sub => (
                    <Link key={sub.id} className="py-5 font-bold text-[19px] uppercase block hover:underline">{sub.name}</Link>
                ))}
            </div>
        </div>
    );
}

export default BurgerMenu;
