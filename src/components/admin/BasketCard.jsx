import React, { useContext } from 'react'
import { CartContext } from '../context/BasketContext'
import { Link } from 'react-router'

function BasketCard({ setShowAddCard }) {
    const { cart, removeFromCart } = useContext(CartContext)

    // ✅ total qiyməti hesablayırıq
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className='bg-white w-[330px] text-black p-4 rounded-xl px-8 hidden md:block transform transition-all
      duration-300 ease-in-out'>
            <p className='text-center'> Card [{cart.length}]</p>
            <div className='overflow-y-auto max-h-[60vh]'>
                <div className='mt-4 border-b border-gray-300 pb-3'>
                    {
                        cart.map((item,i) => (
                            <Link to={`/details/${item.id}`} key={i} className='flex mt-4'>
                                <div className=' flex flex-col w-[30%] gap-3'>
                                    <img className='w-[60%]' src={item.images[0]} alt="" />
                                    <p className='text-[11px] uppercase text-gray-400'> Qty : {item.quantity}</p>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-[13px] uppercase'>{item.name}</p>
                                        <p className='text-[13px]'>$ {item.price}</p>
                                    </div>
                                    <p className=' text-[11px] my-2 text-gray-400'>Size: {item.size}</p>
                                    <button onClick={() => removeFromCart(item.id, item.size)} className='text-[12px] font-semibold hover:underline'>Remove</button>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            {cart.length > 0 ? (
                <div className='flex justify-between font-bold uppercase text-[14px] my-4'>
                    <p>Total</p>
                    <p>${total}</p>
                </div>
            ) : (
                <p className='text-center'>
                    Your card is empty
                </p>
            )}

            <div className='my-3'>
                <Link to='/basket' onClick={() => setShowAddCard(false)} className='w-full block text-center bg-white text-black py-3 border border-gray-400 rounded-full text-[14px] uppercase font-bold my-2'>
                    Go to shopping card
                </Link>
                <button className='w-full bg-[#1a1919] text-white py-3 rounded-full text-[14px] uppercase font-bold'>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}

export default BasketCard
