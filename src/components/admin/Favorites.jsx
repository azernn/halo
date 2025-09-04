import { useContext } from "react";
import { CartContext } from "../context/BasketContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router";

function Favorites() {
  const { addToCart } = useContext(CartContext);
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  console.log(favorites);
  
  return (
    <div className="mt-25 flex items-center justify-center">
      <div>
        <div className="text-center max-w-[980px] mx-auto p-4 mb-5">
          <h1 className="text-[29px] font-semibold uppercase">My Favorites</h1>
          <p className="text-[15px]">
            My Favourites is a great way to keep track of your personal
            must-haves and their availability. And, most importantly, it just
            takes one click to move an item from the list and into your shopping
            cart.
          </p>
        </div>
        <p className="mb-4 mx-4">
          You Have {favorites?.length} Products Under My Favorites
        </p>

        {favorites?.map((item) => (
          <div key={item.id} className="border-t border-gray-400 my-3">
            
            <Link to={`/details/${item.id}`} className="flex items-center">
              <span className="w-1/3">
                <img src={item?.images[0]} alt={item.name} />
              </span>
              <div>
                <p>{item.name}</p>
                <p className="text-gray-500 text-[14px] ">Size: {item.size}</p>
                <span className="mx-4 md:hidden">
                  <p className=" text-[16px] my-2">$ {item.price}</p>
                </span>
              </div>
            </Link>

            <div className="flex justify-end">
              <div className="flex items-center justify-between w-[70%]">
                <span className="mx-4 items-center gap-6 hidden md:flex">
                  <p
                    onClick={() => removeFromFavorites(item.id, item.size)}
                    className="underline text-[14px] cursor-pointer"
                  >
                    Remove
                  </p>
                  <p className=" text-[16px] my-2">$ {item.price}</p>
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#1a1919] cursor-pointer text-white py-3 rounded-full text-[14px] uppercase font-bold md:w-[30%] w-[50%]"
                >
                  Add to basket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
