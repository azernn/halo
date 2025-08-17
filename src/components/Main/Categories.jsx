import { useEffect, useState } from "react";
import { getProdBySubCatId } from "../../../services";
import Products from "./Products";
import { useParams } from "react-router";

function Categories() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProdBySubCatId(id)
            .then(res => setData(res.data));
    }, [id]);

    return (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mt-26 ">
            {data && data.map((item, index) => (
                <Products key={index} data={item} />
            ))}
        </div>
    );
}

export default Categories;
