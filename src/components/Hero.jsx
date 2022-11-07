const Hero = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4'>
			<div className='max-h-[500px] relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full text-white max-h-[500] flex flex-col justify-center'>
					<h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						The <span className='text-red-600'>Best</span>
					</h1>
					<h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600'>
						Foods <span className='text-white'>in Town</span>
					</h1>
				</div>
				<img
					className='w-full max-h-[500px] object-cover'
					src='https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='/'
				/>
			</div>
		</div>
	);
};

export default Hero;
