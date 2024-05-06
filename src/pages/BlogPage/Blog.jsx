import React, { useEffect, useState } from 'react';
import supabase from '../../lib/helper/supabaseClient';

const Blog = () => {
	const [fetchError, setFetchError] = useState(null);
	const [posts, setPosts] = useState(null);

	const formatDate = date => {
		const newDate = new Date(date);
		return newDate.toDateString();
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const { data, error } = await supabase.from('Post').select();
			if (error) {
				setFetchError('Problem fetching posts');
				setPosts(null);
				console.log(error);
			}
			if (data) {
				const responseData = data.map(post => {
					return {
						id: post.id,
						title: post.title,
						description: post.description,
						created_at: formatDate(post.created_at),
						view: post.views,
						href: `/blogs/content/?id=${post.id}`
					};
				});
				setPosts(responseData);

				setFetchError(null);
			}
		};
		fetchPosts();
	}, []);
	console.log(posts);

	return (
		<div class=' bg-slate-600'>
			<h1 class='text-4xl p-10 text-center text-white font-bold'>Blogs</h1>
			<div class=' flex items-center justify-center h-full'>
				<div class=' grid grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4 '>
					{fetchError && <div>{fetchError}</div>}
					{posts === null && (
						<div class='bg-gray-500 border border-gray-500  shadow-md rounded-lg max-w-sm  mb-5'>
							<div
								role='status'
								class=' items-center space-y-8  animate-pulse md:space-y-0 md:space-x-0  md:items-center md:space-y-8 '>
								<div class='flex items-center justify-center space-x-10 h-48 bg-gray-300 rounded-lg sm:w-96 dark:bg-gray-700'>
									<svg
										class='w-12 h-12 text-gray-200 rounded-lg '
										xmlns='http://www.w3.org/2000/svg'
										aria-hidden='true'
										fill='currentColor'
										viewBox='0 0 640 512'>
										<path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
									</svg>
								</div>
								<div class='items-center mb-2'>
									<div class='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
									<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
									<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
									<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
									<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
									<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
								</div>
								<span class='sr-only'>Loading...</span>
							</div>
						</div>
					)}

					{posts &&
						posts.map(post => {
							return (
								<div>
									<article
										key={post.id}
										class='bg-white shadow-md border transform transition cursor-pointer  hover:-translate-y-3 border-gray-200  rounded-lg max-w-sm mb-5'>
										<a
											rel='noopener noreferrer'
											href={post.href}
											aria-label='Te nulla oportere reprimique his dolorum'>
											<img
												alt=''
												class='object-cover w-full h-52 dark:bg-gray-500 rounded-lg'
												src='https://source.unsplash.com/200x200/?fashion?3'
											/>
										</a>
										<div class='flex flex-col flex-1 p-6'>
											<a
												rel='noopener noreferrer'
												href={post.href}
												aria-label='Te nulla oportere reprimique his dolorum'></a>
											<a
												rel='noopener noreferrer'
												href={post.href}
												class='text-xs tracking-wider uppercase hover:underline dark:text-violet-400'>
												{post.title}
											</a>
											<h3 class='flex-1 py-2 text-lg font-semibold leading-snug'>
												{post.description}
											</h3>
											<div class='flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400'>
												<span>{post.created_at}</span>
												<span>{post.view} view</span>
											</div>
										</div>
									</article>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Blog;
