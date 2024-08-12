import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import geolect from '../../assets/geolect_poster.jpg';
import pythomy from '../../assets/pythomy.png';
import stackLeague from '../../assets/stackleague.jpg';
import stackTrek from '../../assets/stacktrek.jpg';
import portf from '../../assets/portf.png';
import inprogress from '../../assets/inprogress.jpg';
import tools from '../../assets/Worktools.jpg';
import stick from '../../assets/Stickup.png';
import onlysub from '../../assets/OnlySub-01.jpg';
const Workcomp = () => {
	const [projects, setProjects] = useState({
		projects: [
			{
				id: 5,
				title: 'OnlySub ',
				description:
					'A subscription based social media platform. I used ReactJS, TailwindCSS, and Next to maintain this website.',
				image: onlysub,
				link: 'https://onlysub.com/',
				tags: ['TypeScript', 'NestJS', 'NextJS14', 'React', 'AntD', 'TailwindCSS', 'Monggo'],
				status: 'Currently Working On',
				job: ['Front end Developer', 'Designer']
			},
			{
				id: 7,
				title: 'Stick-up!📒',
				description:
					'A small social media platform with 24hr duration of posts. I used ReactJS, TailwindCSS, and Next to build this website.',
				image: stick,
				link: 'https://stick-up.vercel.app',
				tags: ['NextJS13', 'Supabase', 'Tailwind', 'DaisyUI'],
				status: 'Project',
				job: ['Full Stack Developer']
			},
			{
				id: 1,
				title: 'Geolect 🎤',
				description:
					'A mobile app that uses Google APIs to teach users new words in the language of their choice.',
				image: geolect,
				link: 'https://github.com/xjex/-THESIS--GEOLECT',
				tags: ['Ionic', 'Node', 'Express', 'Firebase', 'GoogleMaps', 'GoogleTranslate', 'GoogleCloud'],
				status: 'Completed',
				job: ['Full Stack Developer', 'Thesis']
			},
			{
				id: 2,
				title: 'Pythomy 🐍',
				description: 'As a QA Engineer, I am responsible for testing the app and reporting bugs.',
				image: pythomy,
				link: 'https://play.google.com/store/apps/details?id=io.ionic.starter20&hl=en&gl=US',
				tags: ['Ionic', 'Node', 'PHP', 'MySQL', 'Python'],
				status: 'Completed',
				job: ['QA Engineer']
			},
			{
				id: 3,
				title: 'Coding Challenges 📝',
				description: 'As a content creator for Stacktrek, I create test cases for StackLeague',
				image: stackLeague,
				link: 'https://www.stackleague.com',
				tags: ['PHP', 'JavaScript', 'C#', 'Java', 'Python'],
				status: 'Still Ongoing',
				job: ['Content Creator']
			},
			{
				id: 4,
				title: 'Programming Learning Materials 📰',
				description:
					'As a content creator for Stacktrek, I create learning materials for Full Stack Development',
				image: stackTrek,
				link: 'https://www.stacktrek.com',
				tags: ['Full Stack', 'JavaScript', 'Testing Tools', 'Java', 'Python'],
				status: 'Still Ongoing',
				job: ['Content Creator']
			},
			{
				id: 5,
				title: 'Portfolio Website 📂',
				description:
					'This is my portfolio website. I used ReactJS, TailwindCSS, and ViteJS to build this website.',
				image: portf,
				link: 'https://hellofromxavier.vercel.app',
				tags: ['Full Stack', 'Supabase', 'Vite', 'React', 'TailwindCSS'],
				status: 'Working on some features',
				job: ['Full Stack Developer', 'Content Creator', 'Designer']
			},

			{
				id: 6,
				title: 'Work Tools 🛠️',
				description:
					'A tool to automate some of my work. I used Python, Puppeteer, and Pandas to build this tool.',
				image: tools,
				link: 'https://github.com/xjex/Work-Tools',
				tags: ['Scraping', 'Pandas', 'Python', 'Puppeteer', 'Tools'],
				status: 'Currently Working On',
				job: ['Full Stack Developer', 'Data Analysis', 'Scrape Data']
			},
			{
				id: 5,
				title: 'Admin Portal Portfolio ',
				description:
					'A tool to manage my portfolio website. I used ReactJS, TailwindCSS, and NextJS 13 to build this website.',
				image: inprogress,
				link: 'https://portfolio-admin-portal-plum.vercel.app/',
				tags: ['Full Stack', 'Supabase', 'Vite', 'React', 'TailwindCSS'],
				status: 'Currently Working On',
				job: ['Full Stack Developer', 'Content Creator', 'Designer']
			}
		]
	});

	return (
		<div>
			<div id='Work' className='text-center mx-auto relative py-20 '>
				<h1 className='text-3xl text-center font-bold  text-white'>My Work 👷‍♂️</h1>
			</div>

			{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2730870949. */}
			<div class=' flex flex-wrap justify-center flex-col-2 xl:flex-row xl:justify-center xl:grid-rows-2 mb-10  '>
				{projects.projects.map(post => {
					return (
						// "bg-white shadow-md border transform transition cursor-pointer  hover:-translate-y-3 border-gray-200  rounded-lg max-w-sm mb-5
						<Link to={post.link} target='_blank' rel='noopener noreferrer'>
							<div
								class=' max-w-md overflow-hidden rounded-lg transition bg-white cursor-pointer shadow  hover:-translate-y-3  m-5 '
								key={post.id}>
								<img
									src={post.image}
									class='aspect-video w-full h-56 w-50 object-cover object-top'
									alt=''
								/>
								<div class='p-4 sm:flex-wrap  '>
									<h3 class='text-xl font-medium text-gray-900'>{post.title}</h3>

									<p class='mt-1 text-gray-500'>{post.description}</p>

									<div class='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
										<span>{post.status}</span>
									</div>

									<div class='mt-4 gap-2  xl:flex lg:overflow-y-auto   '>
										{post.tags.map(tag => {
											return (
												<span class='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 '>
													{tag}
												</span>
											);
										})}
									</div>
									{/* line */}
									<div class='flex items-center justify-center mt-4'>
										<div class='border-t border-gray-300 w-full p-1'></div>
									</div>
									{/* jobs */}
									{post.job.map(job => {
										return (
											<div className=' p-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-orange-600'>
												{job}
											</div>
										);
									})}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Workcomp;
