import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";

function SearchBar({ value, data }) {
  const filtered = data.flatMap(cat => 
    cat.Subcategory?.flatMap(sub =>
      sub.Products?.filter(prod =>
        prod.name.toLowerCase().includes(value.toLowerCase())
      ) || []
    ) || []
  );

  return (
    <div className='bg-[#fff] rounded-xl w-full h-[90vh] overflow-y-auto'>
      <Link className='flex justify-between w-[90%] mx-auto mt-6 underline uppercase'>
        <span>see all "{value}"</span>
        <span><FaLongArrowAltRight /></span>
      </Link>

      <h1 className='uppercase text-gray-400 p-5'>Products</h1>

      {filtered.length > 0 ? (
        filtered.map((prod) => (
          <Link key={prod.id} to={`/details/${prod.id}`} className='px-5 flex items-center gap-6 my-4'>
            <img className='w-[12%]' src={prod.image} alt={prod.name} />
            <div>
              <h2 className='uppercase text-[14px]'>{prod.name}</h2>
              <h2 className='uppercase text-[14px]'>{prod.price} DKK</h2>
            </div>
          </Link>
        ))
      ) : (
        <p className="p-5 text-gray-500">No products found</p>
      )}
    </div>
  )
}

export default SearchBar;
