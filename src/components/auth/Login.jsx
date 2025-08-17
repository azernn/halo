import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router'


function Login() {
	const [display, setDisplay] = useState(false)
	return (
		<div className='bg-[#ebe9e3] py-5'>
		<div className=' flex items-center justify-evenly mt-25 '>
			<Link to={'/'} className='uppercase md:text-[16px] text-[12px] flex items-center gap-2 hover:underline'> <IoIosArrowBack />Go back</Link>
			<h1 className='md:text-[29px] text-[16px] font-semibold '>Create account or  login</h1>
			<h1></h1>
		</div>
		<div>
		<div className='flex flex-col md:flex-row  gap-4 w-full justify-center py-5 bg-[#ebe9e3] items-center md:items-stretch 	'>
			<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 md:w-1/2 w-full">
				<div className="mb-8 text-center  border-b border-gray-400">
					<h1 className="my-3 md:text-[23px] text-xl font-bold uppercase">New customer</h1>
				</div>
				<form noValidate="" action="" className="">
					{
						display && <div className="space-y-4 ">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
								<input type="email" name="email" id="email" placeholder="example@example.com" className="w-full px-3 py-3 border rounded-xs dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">Repeat email</label>
								<input type="email" name="email" id="email" placeholder="example@example.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">First Name</label>
								<input type="name" name="name" id="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">Last name</label>
								<input type="name" name="name" id="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label htmlFor="password" className="text-sm">Password</label>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label htmlFor="password" className="text-sm">Repead password</label>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
							</div>
							<div className='flex flex-col  gap-3'>
								<label htmlFor="check" >
									<input type="checkbox" name="check" id="check" className='mr-3' />
									I have read and accept the privacy policy. Read more.
								</label>
								<label htmlFor="check2" >
									<input type="checkbox" name="chec2" id="check2" className='mr-3 peer-checked:bg-black' />
									Yes, I want to subscribe to the HALO newsletter with information about exclusive sales, new collections and much more. You can unsubscribe from the newsletter at any time. Read the terms and conditions.
								</label>
							</div>
						</div>
					}
					<div className="space-y-2">
						<div className='mt-3'>
							<button onClick={() => setDisplay(true)} type="button" className="w-[90%] px-8 py-3 font-semibold uppercase bg-black text-white rounded-3xl">Create Account</button>
						</div>
					</div>
				</form>
		 	</div>
			<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 md:w-1/2 w-full">
				<div className="mb-8 text-center border-b border-gray-400">
					<h1 className="my-3 md:text-[23px] text-xl font-bold uppercase  ">Log in</h1>
				</div>
				<form noValidate="" action="">
					<div className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
							<input type="email" name="email" id="email" placeholder="example@example.com" className="w-full px-3 py-3 border rounded-xs dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
						</div>
						<div>
							<label htmlFor="password" className="block mb-2 text-sm">Password</label>
							<input type="password" name="password" id="password" placeholder="*******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
						</div>
						<div>
							<label htmlFor="check3">
								<input type="checkbox" name="check3" id="check3" /> Remember me
							</label>
						</div>
					</div>
					<div>
						<p className='text-right mr-2 underline text-gray-700 text-[14px] my-3'>
							<a href="">Forgot password</a>
						</p>
					</div>
						<div className='pt-3'>
							<button  type="button" className="w-[90%] px-8 py-3 font-semibold uppercase bg-black text-white rounded-3xl">Login Your account</button>
						</div>
			
				</form>
			</div>
		</div>
		
		</div>
		</div>
	)
}

export default Login
