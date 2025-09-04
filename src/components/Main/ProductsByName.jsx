import React, { useEffect, useState } from 'react'
import { getProdBySubCatId, getSubcategoriesById } from '../../../services'
import Products from './Products'
import { useParams } from 'react-router'
import { BsFilterRight, BsX } from "react-icons/bs";
import Filter from './Filter';

function ProductsByName() {
    const [category, setCategory] = useState()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [visibleCount, setVisibleCount] = useState(8) 
    const { id } = useParams()

    useEffect(() => {
        setCategory(null);
        setData([]);
        setLoading(true);
        setVisibleCount(8); 
        getSubcategoriesById(id).then(res => {
            setCategory(res);
        });
    }, [id]);

    useEffect(() => {
        if (category && category.Subcategory && category.Subcategory.length > 0) {
            setData([]);
            const subCategoryPromises = category.Subcategory.map(subCat =>
                getProdBySubCatId(subCat.id)
            );
            Promise.all(subCategoryPromises)
                .then(results => {
                    const allProducts = results.flatMap(result => result.data);
                    const shuffledProducts = shuffleArray(allProducts);
                    setData(shuffledProducts);
                    setLoading(false);
                });
        }
    }, [category]);

    function shuffleArray(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
        document.body.style.overflow = isFilterOpen ? 'auto' : 'hidden'
    }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8); 
    }

    return (
        <>
            <img 
              className='h-[40vh] md:h-auto w-full object-cover' 
              src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-Library/default/dwe3f11a25/PLP%20modules/AUGUST/WEB_HALO_2025_Aug_PLP_Accessories_Hero%20Banner_Desktop_01.jpg" 
              alt="" 
            />
            <div className='sticky top-14 z-30 bg-[#ebe9e3] py-3 px-4'>
                <div className="max-w-7xl mx-auto flex items-center justify-center">
                    <button onClick={toggleFilter}
                        className="font-semibold flex gap-2 items-center hover:opacity-70 transition-opacity"
                    >Filters <BsFilterRight /></button>
                </div>
            </div>
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div 
                    className="absolute inset-0 bg-[#a19a9a59] bg-opacity-50"
                    onClick={toggleFilter}></div>
                     <div className={`absolute top-5 right-4 h-full w-80 rounded-lg bg-[#ebe9e3] shadow-xl transform transition-transform duration-300 ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Filters</h2>
                            <button 
                                onClick={toggleFilter}
                                className="p-1 cursor-pointer">
                                <BsX size={24} />
                            </button>
                        </div>
                    </div>
                    <Filter data={data}/>
                </div>
            </div>
            <div>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : data && data.length > 0 ? (
                    <div className='flex flex-col items-center justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-9 px-4'>
                            {data.slice(0, visibleCount).map((item) => (
                                <Products key={item.id} data={item} />
                            ))}
                        </div>
                        {visibleCount < data.length && (
                          <button 
                              onClick={handleLoadMore}
                              className='my-5 bg-black text-white rounded-full w-[180px] py-2 '>Load more ({data.length - visibleCount})</button>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-black">No products found</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductsByName
