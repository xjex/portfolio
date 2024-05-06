import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div class='h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-red-700'>
			<div class=' font-semibold  rounded-3xl text-center   p-10  justify-center ab'>
				<h1 class='  text-9xl font-extrabold text-gray-800 pulse p-10'>💔</h1>
				<div class=' shake px-2 text-white rounded text-2xl tracking-wide '>Page Not Found 😢</div>

				<button class=' transition ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold  tracking-wide   hover:scale-110 duration-100'>
					<Link to='/'>Go Back </Link>
				</button>
			</div>
		</div>
	);
};

export default Error;
