import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';
import profileimg from '../../assets/Profile2.png';
import supabase from '../../lib/helper/supabaseClient';
const Home = props => {
	const handleClickScroll = () => {
		const element = document.getElementById('timeline');

		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const downloadCV = async () => {
		const { data, error } = await supabase.storage.from('portfolio').download('public/Xavier-Joseph-Manaloto.pdf');
		if (error) {
			console.log(error);
		}
		if (data) {
			console.log(data);
		}

		const date = new Date();
		//remove day and time
		const dateformat = date.toISOString().slice(0, 10);

		const fileName = `Xavier-Joseph-Manaloto-${dateformat}.pdf`;
		//download data
		const url = window.URL.createObjectURL(new Blob([data]));
		const link = document.createElement('a');

		link.href = url;
		link.setAttribute('download', fileName);
		document.body.appendChild(link);
		link.click();

		//clean up
		link.parentNode.removeChild(link);
	};

	return (
		<div className='h-screen w-full flex flex-col justify-center items-center'>
			<div className=' card max-sm:hidden  flex h-screen items-center  justify-center  '>
				<section className='  w-9/12 md:w-11/12 bg-white rounded-xl  pt-10 overflow-hidden md:pt-0 sm:pt-6 2xl:pt-16 '>
					<div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
						<div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
							<div className=' bg-white p-10 rounded-xl'>
								<h2 className='text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl'>
									Hey 👋 I am
									<br className='block sm:hidden md:hidden' /> Xavier Joseph
								</h2>

								<p className='max-w-lg mt-3 text-xl sm:text-sm md:text-md lg:text-xl leading-relaxed text-gray-600 md:mt-8'>
									I'm a software engineer based in the Philippines.  I possess a robust skillset in web development,
									particularly in building high-performance, dynamic applications using Next.js.
								</p>

								<p className=' text-center mt-4 text-xl text-gray-600 md:mt-8'>
									<span className='relative inline-block'>
										<span className='absolute inline-block w-full bottom-1 h-2 bg-yellow-300'></span>
										<span className='relative'> Got any ideas? </span>
									</span>
									<br className='block sm:hidden' />{' '}
									<button
										onClick={props.toggleMail}
										className='transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline'>
										Lets Talk
									</button>
								</p>

								{/* Social Media */}

								<div className=' flex items-center justify-center mt-5'>
									<button
										onClick={downloadCV}
										data-tip='hello'
										className=' btn-wide  transition ease-in-out delay-150 bg-blue-500 px-10 py-2 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
										My Resume
									</button>
								</div>
								<div className='flex items-center justify-center mt-4'>
									<div className='border-t border-gray-300 w-16'></div>
									<p className='text-s text-blue-400 mx-2 '> Socials </p>
									<div className='border-t border-gray-300 w-16'></div>
								</div>
								<div className='flex items-center justify-center '>
									<ul className='flex items-center  mt-4 space-x-4  '>
										<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
											<a
												href='https://github.com/xjex'
												className='flex items-center justify-center w-8 h-8 rounded-full  text-white hover:bg-blue-500 hover:text-gray-100'>
												<i className='fab fa-twitter'>
													{' '}
													<FaGithub />
												</i>
											</a>
										</li>
										<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
											<a
												href='https://www.linkedin.com/in/xjmanaloto/'
												className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
												<FaLinkedin />
											</a>
										</li>

										<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
											<a
												href='https://www.facebook.com/xjpmjexx'
												className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
												<FaFacebook />
											</a>
										</li>

										<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
											<a
												href='https://twitter.com/jexzm'
												className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
												<FaTwitter />
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='relative '>
								<img
									className='relative w-full scale-60 md:scale-100 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110  '
									src={profileimg}
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
				<div className='p-20  hidden md:flex'>
					{' '}
					<button className=' arrowdown rounded-3xl ' onClick={handleClickScroll}>
						<svg
							className='animate-bounce w-6 h-6 text-white'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
						</svg>
					</button>
				</div>
			</div>

			{/* SMALL CARD */}
			<div className=' sm:hidden h-screen items-center justify-center flex flex-col '>
				<div className='card bg-white font-semibold text-center rounded-3xl shadow-2xl shadow-gray-800 border p-10 max-w-xs mt-5'>
					<img className='mb-3 w-50 h-50 rounded-full shadow-lg mx-auto scale-100' src={profileimg} />
					<h1 className='text-lg text-gray-700'> Xavier Joseph Manaloto </h1>
					<h3 className='text-sm text-gray-500 '> Full Stack Developer </h3>
					<h3 className='text-sm text-gray-400 '> </h3>

					{/* contact me */}

					<div>
						<div className='relative'>
							{/* <button
                onClick={props.toggleMail}
                className="  transition ease-in-out delay-150 bg-blue-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300 ..."
              >
                Contact Me
              </button> */}
							<button
								onClick={downloadCV}
								data-tip='hello'
								className='  transition ease-in-out delay-150 bg-blue-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
								My Resume
							</button>
						</div>
					</div>
					{/* line */}
					<div className='flex items-center justify-center mt-4'>
						<div className='border-t border-gray-300 w-16'></div>
						<p className='text-s text-blue-400 mx-2 '> Socials </p>
						<div className='border-t border-gray-300 w-16'></div>
					</div>
					{/* Socials */}
					<ul className='flex items-center justify-center mt-4 space-x-4  '>
						<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
							<a
								href='https://github.com/xjex'
								className='flex items-center justify-center w-8 h-8 rounded-full  text-white hover:bg-blue-500 hover:text-gray-100'>
								<i className='fab fa-twitter'>
									{' '}
									<FaGithub />
								</i>
							</a>
						</li>
						<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
							<a
								href='https://www.linkedin.com/in/xjmanaloto/'
								className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
								<FaLinkedin />
							</a>
						</li>

						<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
							<a
								href='https://www.facebook.com/xjpmjexx'
								className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
								<FaFacebook />
							</a>
						</li>

						<li className='transition ease-in-out delay-150 rounded-3xl bg-blue-500 hover:-translate-y-1  hover:bg-indigo-500 duration-300 ...'>
							<a
								href='https://twitter.com/jexzm'
								className='flex items-center justify-center w-8 h-8 rounded-full  text-white  hover:bg-blue-500 hover:text-gray-100'>
								<FaTwitter />
							</a>
						</li>
					</ul>
				</div>
				<div className='p-20  max-sm:hidden'>
					{' '}
					<button className=' arrowdown rounded-3xl ' onClick={handleClickScroll}>
						<svg
							className='animate-bounce w-6 h-6 text-white'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
