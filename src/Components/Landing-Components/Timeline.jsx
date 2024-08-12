import React from 'react';
import { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Timeline = () => {
	const getDate = date => {
		const currentDate = new Date();
		const startDate = new Date(date);

		let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
		let monthDiff = currentDate.getMonth() - startDate.getMonth();

		if (monthDiff < 0) {
			yearDiff--;
			monthDiff += 12;
		}

		if (yearDiff === 0 && monthDiff === 0) {
			return `${yearDiff} years`;
		} else if (yearDiff === 0 && monthDiff !== 0) {
			return `${monthDiff} months`;
		} else if (yearDiff !== 0 && monthDiff === 0) {
			return `${yearDiff} years`;
		} else if (yearDiff !== 0 && monthDiff !== 0) {
			return `${yearDiff} years, ${monthDiff} months`;
		}
	};

	const [timeline, setTimeline] = useState({
		timeline: [
			{
				id: 7,
				title: 'Front End Engineer',
				description: 'Front end web development',
				duration: 'Mar 2024',
				organization: 'OnlySub.com',
				status: 'job',
				jobStatus: 'current',
				link: 'https://onlysub.com/'
			},
			{
				id: 5,
				title: 'Software Engineer | Content Creator',
				description:
					'I create technical contents, such as Full stack learning materials, Programming Challenges',
				duration: 'May 2021 - Mar 2024',
				organization: 'Stacktrek',
				status: 'job',
				jobStatus: 'past',
				link: 'https://stacktrek.com/'
			},
			{
				id: 5,
				title: 'Video Editor',
				description: 'I create course videos, advertisements, and vlogs and reels',
				organization: 'Philrad Digital Advertising',
				duration: ' Feb 2021 - May 2021',
				jobStatus: 'past',
				status: 'job',
				link: 'https://philiprad.com/'
			},
			{
				id: 5,
				title: 'Quality Assurance Engineer',
				description: 'Testing the integrity of the app using various methods of software testing(Manual)',
				duration: 'Mar 2020 - Feb 2021',
				organization: 'Pythomy',
				jobStatus: 'past',
				status: 'job',
				link: 'https://play.google.com/store/apps/details?id=io.ionic.starter20&hl=en&gl=US'
			},
			{
				id: 5,
				title: 'College Graduation',
				description: 'Finished my degree in Computer Science in 2020',
				duration: '2016 - 2020',
				organization: 'Gordon College',
				jobStatus: 'past',
				status: 'school',
				link: 'https://www.facebook.com/GordonCollegeCcs'
			},
			{
				id: 5,
				title: 'Fourth Year Internship ',
				description:
					'Website Development and Maintenance Integration of controllers Quality testing for solar panel software controllers',
				duration: 'Feb 2020 - Apr 2020',
				jobStatus: 'past',
				status: 'school',
				organization: 'BandaSolart PI Inc.',
				link: 'https://www.bandasolar.com/'
			},
			{
				id: 5,
				title: 'Second Year Internship ',
				description: 'Social Media Management and Marketing',
				duration: 'Jun 2017 - Nov 2017',
				organization: 'Gladness Staffing Services',
				jobStatus: 'past',
				status: 'school',
				link: 'https://www.facebook.com/gladnessstaffing/'
			}
		]
	});

	const status = stat => {
		if (stat == 'job') {
			return <FaBriefcase />;
		} else if (stat == 'school') {
			return <FaGraduationCap />;
		}
	};

	const jobStat = stat => {
		if (stat != 'current') {
			return 'hidden';
		} else {
			return 'inline-flex';
		}
	};

	return (
		<div className='w-10/12 md:w-6/12  mx-auto relative py-20  '>
			<h1 className='text-3xl text-center font-bold pb-10 text-white'>Timeline ⌚</h1>

			<div className='bg-white p-2 rounded-2xl  shadow-2xl transition-shadow  shadow-gray-800'>
				<div className=' '>
					<div className='bg-white'>
						<div className=' mx-auto p-8'>
							<div className='flow-root'>
								<ul className='-mb-5 '>
									{timeline.timeline.map(post => {
										return (
											<li>
												<div className=' relative pb-8'>
													<span
														className=' absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200'
														aria-hidden='true'></span>
													<div className='relative flex items-start space-x-3'>
														<div>
															<div className='relative px-1 '>
																<div className='h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white text-white flex items-center justify-center'>
																	{status(post.status)}
																</div>
															</div>
														</div>

														<div className=' bg-blue-200 hover:bg-blue-300 transition min-w-0 flex-1 py-0   p-5 rounded-lg'>
															<div className='collapse collapse-arrow text-slate-500'>
																<input type='checkbox' name='my-accordion-2' />

																<div className='collapse-title  font-medium'>
																	<div className='text-md text-gray-500 flex sm:justify-between justify-normal '>
																		<a
																			href={post.link}
																			target='_blank'
																			className=' font-semibold text-gray-800 mr-2 '>
																			{post.title}
																		</a>

																		<div
																			className={`my-0.5 relative inline-flex ${jobStat(
																				post.jobStatus
																			)}  items-center `}>
																			<div className='badge badge-accent '>
																				Current
																			</div>
																		</div>
																	</div>
																	<div className='text-sm text-gray-800 flex '>
																		<span className='whitespace-wrap text-sm overflow-y-auto'>
																			{post.organization}
																		</span>
																	</div>
																	<span className='whitespace-wrap text-xs overflow-y-auto'>
																		{post.duration}
																	</span>
																</div>

																<div className='collapse-content  '>
																	<div className=' text-sm text-gray-800  p-3 bg-blue-100 rounded-lg'>
																		<p className='text-sm'>{post.description}</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
