import { useEffect, useState } from "react";
import { getProdBySubCatId } from "../../../services";
import Products from "./Products";
import { useParams } from "react-router";

function Categories() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(8); 
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProdBySubCatId(id)
            .then(res => {
                setData(res.data);
                setLoading(false);
                setVisibleCount(8); 
            });
    }, [id]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4); 
    };

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    <span className="ml-3 text-gray-600">Loading</span>
                </div>
            ) : !data || data.length === 0 ? (
                <div className="text-center py-20 mt-24 bg-[#ebe9e3]">
                    <h3 className="text-xl font-semibold text-black mb-2">No products found</h3>
                    <p className="text-black">There are currently no products in this category.</p>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mt-28 w-full px-4">
                        {data.slice(0, visibleCount).map((item, index) => (
                            <Products key={index} data={item} />
                        ))}
                    </div>

                    {visibleCount < data.length && (
                        <button
                            onClick={handleLoadMore}
                            className="my-8 bg-[#ebe9e3] border border-gray-400 rounded-full w-[140px] py-2 text-sm font-medium hover:bg-gray-200 transition"
                        >
                            Load more
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Categories;
