import { useState } from 'react';

import { IconContext } from 'react-icons';
import { FaEnvelope, FaTimes } from 'react-icons/fa';

import HCaptcha from '@hcaptcha/react-hcaptcha';
const Contact = props => {
	const [email, setEValue] = useState(null);
	const [name, setNValue] = useState(null);
	const [phone, setPValue] = useState(null);
	const [message, setMValue] = useState(null);
	const [allowSend, setAllowSend] = useState(true);
	const env = import.meta.env;

	const submitColor = () => {
		if (allowSend) {
			return 'bg-green-500 focus:bg-indigo-600  hover:bg-indigo-500 hover:-translate-y-1 ';
		}
		return ' shake bg-red-500  focus:bg-orange-600  hover:bg-orange-500';
	};

	return (
		<div id='web3forms__widget'>
			<div
				id='w3f__widget--content'
				className={
					props.stat
						? ' card fixed flex flex-col z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(100%-95px)] w-full sm:w-[350px] overflow-auto min-h-[250px] sm:h-[600px] border border-gray-300 bg-white shadow-2xl rounded-md '
						: 'hidden '
				}>
				<div className='flex p-5 flex-col justify-center items-center h-32 bg-indigo-600'>
					<h3 className='text-lg text-white'>Hello 👋</h3>
				</div>{' '}
				<div className='bg-gray-50 flex-grow p-6'>
					<form action='https://api.web3forms.com/submit' method='POST'>
						<input type='hidden' name='apikey' value={env.VITE_WEB3FORMS_API_KEY} />
						<input type='hidden' name='subject' value='New Submission from your Portfolio Website' />
						<input type='checkbox' name='botcheck' style={{ display: 'none' }} />

						<input type='hidden' name='from_name' value='Portfolio User Message'></input>
						<div className='mb-4'>
							<label htmlFor='full_name' className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
								Full Name / Company Name
							</label>
							<input
								type='text'
								name='name'
								id='full_name'
								placeholder='Name'
								required
								className='hover:ea w-full px-3 py-2  text-black bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='email' className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
								Email Address
							</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='Email Address'
								required
								className='w-full px-3 py-2 text-black bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'
							/>
							{/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a valid email address.
              </div> */}
						</div>

						<div className='mb-4'>
							<label htmlFor='phone' className='text-sm text-gray-600 dark:text-gray-400'>
								Phone Number
							</label>
							<input
								type='text'
								name='phone'
								id='phone'
								placeholder='Phone Number'
								className='w-full px-3 py-2  text-black bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='message' className='text-sm text-gray-600 dark:text-gray-400'>
								Message
							</label>
							<textarea
								rows='4 '
								name='message'
								id='message'
								placeholder='Your Message'
								required
								className='w-full px-3 py-2  text-black bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'></textarea>
							{/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                Please provide a message.
              </div> */}
							<button
								type='submit'
								className={`w-full px-3 py-4 transition ease-in-out delay-150 rounded-xl text-white  ${submitColor()} focus:outline-none   `}>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<button
					id='w3f__widget--button'
					// transition ease-in-out delay-150 bg-blue-500 px-8 py-2 mt-8 rounded-2xl text-gray-100 font-semibold uppercase tracking-wide  hover:-translate-y-1  hover:bg-indigo-500 duration-300
					className=' transition ease-in-out delay-150 hover:scale-110  fixed bottom-5 right-5 z-50 w-14 h-14 text-white rounded-full   hover:-translate-y-2 bg-blue-500 hover:bg-indigo-500 duration-300 shadow-lg focus:outline-none flex items-center justify-center '
					onClick={props.toggleMail}>
					<IconContext.Provider value={{ size: '1.5em' }}>
						{props.stat ? <FaTimes /> : <FaEnvelope />}
					</IconContext.Provider>
				</button>
			</div>
		</div>
	);
};

export default Contact;
