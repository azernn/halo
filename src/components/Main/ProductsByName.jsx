import React, { useEffect, useState } from 'react'
import { getProdBySubCatId, getSubcategoriesById } from '../../../services'
import Products from './Products'
import { useParams } from 'react-router'

function ProductsByName() {
    const [category, setCategory] = useState()
    const [data, setData] = useState()
    const { id } = useParams()
    useEffect(() => {
        // getProd().then(res => setData(res))
        getSubcategoriesById(id).then(res => setCategory(res))
    }, [id])
    useEffect(() => {
        getProdBySubCatId(category?.Subcategory[0].id).then(res => setData(res))
    }, [category])
    console.log(category)
    console.log(data)
    return (
        <div>
            {data?.data ?
                data?.data.map((item) => (
                    <Products key={item.id} data={item} />
                ))
                :
                'data yoxdur'

            }
        </div>
    )
}

export default ProductsByName
