const HeadlineCards = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/* Card */}
			<div className='rounded-xl relative overflow-hidden shadow-lg'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
					<p className='font-medium text-2xl px-2 pt-4'>Promo Period Until</p>
					<p className='px-2'>December 2050</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
				</div>
				<img
					className='max-h-[180px] md:max-h-[200px] w-full object-cover'
					src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='/'
				/>
			</div>
			{/* Card */}
			<div className='rounded-xl relative overflow-hidden shadow-lg'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
					<p className='font-medium text-2xl px-2 pt-4'>New on our List</p>
					<p className='px-2'>Available Today</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
				</div>
				<img
					className='max-h-[180px] md:max-h-[200px] w-full object-cover'
					src='https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600'
					alt='/'
				/>
			</div>
			{/* Card */}
			<div className='rounded-xl relative overflow-hidden shadow-lg'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
					<p className='font-medium text-2xl px-2 pt-4'>Our Desserts</p>
					<p className='px-2'>Sweet Treats</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
				</div>
				<img
					className='max-h-[180px] md:max-h-[200px] w-full object-cover'
					src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='/'
				/>
			</div>
		</div>
	);
};

export default HeadlineCards;
