import { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
	const [foods, setFoods] = useState(data);

	const filterCategory = (category) => {
		setFoods(foods.filter((food) => food.category === category));
	};

	const filterPrice = (price) => {
		setFoods(foods.filter((food) => food.price === price));
	};

	return (
		<section>
			<div className='max-w-[1640] m-auto px-4 p-12'>
				<h1 className='text-red-600 font-bold text-4xl text-center'>Our Best Sellers</h1>
				{/* Filter Row */}
				<div className='flex flex-col lg:flex-row justify-between'>
					{/* Filter Type */}
					<div>
						<p className='font-bold uppercase'>Category</p>
						<div className='flex justify-between flex-wrap'>
							<button
								onClick={() => setFoods(data)}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								All
							</button>
							<button
								onClick={() => filterCategory('burger')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								Burgers
							</button>
							<button
								onClick={() => filterCategory('pizza')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								Pizza
							</button>
							<button
								onClick={() => filterCategory('salad')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								Salads
							</button>
							<button
								onClick={() => filterCategory('chicken')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								Chickens
							</button>
						</div>
					</div>
					{/* Filter Price */}
					<div>
						<p className='font-bold uppercase'>Price</p>
						<div className='flex justify-between max-w-[390px] w-full'>
							<button
								onClick={() => filterPrice('100')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								&#8369;100
							</button>
							<button
								onClick={() => filterPrice('200')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								&#8369;200
							</button>
							<button
								onClick={() => filterPrice('300')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								&#8369;300
							</button>
							<button
								onClick={() => filterPrice('400')}
								className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
							>
								&#8369;400
							</button>
						</div>
					</div>
				</div>

				{/* Display FOODS */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
					{foods.map((food, index) => (
						<div
							key={food.id}
							className='border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden'
						>
							<img
								src={food.image}
								alt={food.item}
								className='w-full h-[200px] object-cover rounded-t-lg'
							/>
							<div className='flex justify-between px-2 py-4'>
								<p className='font-bold'>{food.name}</p>
								<p>
									<span className='bg-red-600 text-white p-1 rounded-full'>&#8369;{food.price}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Food;
