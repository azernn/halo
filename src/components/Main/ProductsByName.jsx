import React, { useEffect, useState } from 'react'
import { getProdBySubCatId, getSubcategoriesById } from '../../../services'
import Products from './Products'
import { useParams } from 'react-router'

function ProductsByName() {
    const [category, setCategory] = useState()
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        // getProd().then(res => setData(res))
        getSubcategoriesById(id).then(res => setCategory(res))
    }, [id])
    useEffect(() => {
        if (category) {
            getProdBySubCatId(category?.Subcategory[0].id).then(res => setData((prev) => [...prev, res]))
            getProdBySubCatId(category?.Subcategory[1].id).then(res => setData((prev) => [...prev, res]))
            getProdBySubCatId(category?.Subcategory[2].id).then(res => setData((prev) => [...prev, res]))
            getProdBySubCatId(category?.Subcategory[3].id).then(res => setData((prev) => [...prev, res]))
        }
    }, [category])

    function shuffleArray(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    let merged = data.flatMap(item => item.data);

    // 2. Shuffle et
    let shuffled = shuffleArray(merged);
    console.log(category)
    return (
        <>
            <div className='w-full h-[100vh]'>
                <img src="https://www.newlinehalo.dk/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-halo-Library/default/dwe3f11a25/PLP%20modules/AUGUST/WEB_HALO_2025_Aug_PLP_Accessories_Hero%20Banner_Desktop_01.jpg" alt="" />
            </div>
            <div className='mt-25'>
                {data ?
                    <div className='grid grid-cols-4 gap-0 '>
                        {shuffled.map((item) => (
                            <Products key={item.id} data={item} />
                        ))}
                    </div>
                    :
                    'data yoxdur'

                }
            </div>
        </>
    )
}

export default ProductsByName
