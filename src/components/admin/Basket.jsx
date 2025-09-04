import React, { useContext, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router'
import { CartContext } from '../context/BasketContext';
import { FavoritesContext } from '../context/FavoritesContext';
import { IoTerminal } from 'react-icons/io5';

function Basket() {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext)
    const [selectSize, setSelectedSize] = useState('')
    // console.log(cart)

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    console.log(selectSize);
    
    const {addToFavorites } = useContext(FavoritesContext);

    return (
        <div className='p-3 '>
            <div className=' flex items-center justify-between mt-25 p-5 '>
                <Link to={'/'} className='uppercase md:text-[13px] text-[11px] flex items-center gap-2 hover:underline w-1/3 '>
                    <IoIosArrowBack />CONTINUE SHOPPING
                </Link>
                <div className='flex items-center flex-col md:w-1/3 w-[70%]'>
                    <h1 className='md:text-[29px] text-[16px] font-semibold '>Cart</h1>
                    <p className='text-[14px]'> You have {cart.length} product(s) in your basket</p>
                </div>
                <h1 className='w-1/3 hidden md:block'></h1>
            </div>
            <div className='flex justify-between gap-4 flex-col lg:flex-row'>

                <div className=' border-b border-gray-300 w-full lg:w-[75%] h-fit py-6'>
                    {
                        cart.map(item => (
                            <div key={item.id} className='flex justify-between md:px-6 px-3 border-t border-gray-300'>
                                <div className='flex py-3'>
                                    <div className='md:w-1/5 lg:w-[20%] w-[34%]'>
                                        <img src={item?.images[0]} alt="" />
                                    </div>
                                    <div className='p-4'>
                                        <p className='font-semibold text-[15px]'>{item.name}</p>
                                        <div className='text-[15px] text-gray-500 my-5'>
                                            <p>size: {selectSize ? selectSize : item.size}</p>
                                            <div className='flex gap-5 mt-4  '>
                                                <span>Change size :</span>
                                                <select onChange={(e) => setSelectedSize(e.target.value)} name="" id="" className='text-black'>
                                                   <option value="">Select</option>
                                                    {item?.Size.map((size,i)=>(
                                                        <option key={i} value={size}>{size}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <span className='text-[#f60] font-semibold block md:hidden'>$ {item.price} </span>
                                        </div>
                                        <div className='underline flex items-center gap-5 text-[13px]'>
                                            <p onClick={() => removeFromCart(item.id, item.size)} className='cursor-pointer'>Remove</p>
                                            <p onClick={()=> addToFavorites(item)} className='cursor-pointer flex items-center gap-1'> <CiBookmark /> Save for later</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex-col justify-between items-center p-4 hidden md:flex'>
                                    <p className='text-[#e60] font-semibold hidden md:block'>$ {item.price}</p>
                                    <div className=' gap-3 items-center hidden md:flex cursor-pointer'>
                                        <button onClick={() => decreaseQty(item.id, item.size)} className='text-gray-500 text-[19px]'>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='text-gray-500 text-[19px]' onClick={() => increaseQty(item.id, item.size)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='lg:w-[25%] w-full sm:w-[50%] '>
                    <div className=' border rounded-xl border-gray-300 flex flex-col gap-5 p-5 py-7'>
                        <h1 className='uppercase text-[20px] text-center font-semibold'>Summary</h1>
                        <div className='flex justify-between text-[15px] '>
                            <p>Subtotal:</p>
                            <p>$ {subtotal} </p>
                        </div>
                        <div className='flex justify-between text-[15px] my-2 font-light'>
                            <p>Delivery (1-3 business days)</p>
                            <p>Free</p>
                        </div>
                        <div className='flex justify-between text-[15px] font-semibold'>
                            <p>Total (incl. VAT)</p>
                            <p>$ {subtotal} </p>
                        </div>
                        <button className='uppercase bg-black rounded-4xl text-white py-3 font-semibold '> Proceed to checkout</button>
                    </div>
                    <div className='border rounded-xl border-gray-300 mt-4 py-3 md:w-full w-1/2'>
                        <p className='text-center font-light'>We accept following payment...</p>
                        <div className='flex  p-4 gap-3 flex-wrap'>
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwde3bf532/Visa.PNG" alt="" />
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dw61d27b03/Visa%20electron.PNG" alt="" />
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwb2070354/mc_symbol_opt_73_3x.png" alt="" />
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwa3e4abe9/maestro.png" alt="" />
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dw06a580d4/DK_Logo(2).png" alt="" />
                            <img className='w-1/3 md:w-[29%]' src="https://www.newlinehalo.dk/on/demandware.static/-/Sites/default/dwb5dedb30/images/payment-methods/Mobile%20Pay.svg" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Basket
