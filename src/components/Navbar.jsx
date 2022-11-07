import { useState } from 'react';
import { AiFillTags, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSave2Fill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<>
			<div className='max-w[1640] mx-auto flex justify-between items-center p-4 shadow-md'>
				<section className='flex items-center'>
					<div
						onClick={() => setNav(!nav)}
						className='cursor-pointer'
					>
						<AiOutlineMenu size={30} />
					</div>
					<h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl px-2'>
						Food<span className=' text-red-600'>HUB</span>
					</h1>
					<div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14] uppercase font-semibold'>
						<p className='bg-red-600 text-white rounded-full p-1'>Delivery</p>
						<p className='p-1'>Pickup</p>
					</div>
				</section>

				<section>
					<div className='bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500]'>
						<AiOutlineSearch size={25} />
						<input
							className='bg-transparent p-2 focus:outline-none'
							type='text'
							placeholder='Search foods'
						/>
					</div>
				</section>

				<section>
					<button className='bg-red-600 hidden md:flex items-center py-2 border-none rounded-full'>
						<BsFillCartFill
							className='mr-2'
							size={20}
						/>{' '}
						Cart
					</button>
				</section>
			</div>

			{/* Mobile Mode */}
			<section>{nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}</section>

			{/* Side Menu */}
			<section>
				<div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
					<AiOutlineClose
						onClick={() => setNav(!nav)}
						className='absolute right-3 top-3 cursor-pointer'
						size={25}
					/>
					<h2 className='text-2xl p-4'>
						Food<span className='font-bold text-red-600'>HUB</span>
					</h2>
					<nav>
						<ul className='flex flex-col p-4 text-gray-800'>
							<li className='tex-xl py-4 flex'>
								<TbTruckDelivery
									className='mr-4'
									size={25}
								/>{' '}
								Orders
							</li>
							<li className='tex-xl py-4 flex'>
								<MdFavorite
									className='mr-4'
									size={25}
								/>{' '}
								Favorites
							</li>
							<li className='tex-xl py-4 flex'>
								<FaWallet
									className='mr-4'
									size={25}
								/>{' '}
								Wallet
							</li>
							<li className='tex-xl py-4 flex'>
								<MdHelp
									className='mr-4'
									size={25}
								/>{' '}
								Help
							</li>
							<li className='tex-xl py-4 flex'>
								<AiFillTags
									className='mr-4'
									size={25}
								/>{' '}
								Promotions
							</li>
							<li className='tex-xl py-4 flex'>
								<BsFillSave2Fill
									className='mr-4'
									size={25}
								/>{' '}
								Best Ones
							</li>
							<li className='tex-xl py-4 flex'>
								<FaUserFriends
									className='mr-4'
									size={25}
								/>{' '}
								Invite friends
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
};

export default Navbar;
