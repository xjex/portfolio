import React, { useState } from 'react';
import Home from '../../Components/Landing-Components/Home';
import Timeline from '../../Components/Landing-Components/Timeline';
import Footers from '../../Components/Footers';
import Contact from '../../Components/Landing-Components/Contact';
import Skills from '../../Components/Landing-Components/Skills';
import Workcomp from '../../Components/Landing-Components/Workcomp';
import Nav from '../../Components/Nav';

const Landing = () => {
	const [status, setStatus] = useState(false);

	//toggle contact form
	const toggleMail = () => {
		if (status) {
			setStatus(false);
		} else {
			setStatus(true);
		}
	};

	return (
		<div className=' bg-gradient-to-br from-blue-500 to-red-700 '>
			<Nav />

			<div id='home' className=''>
				<Home toggleMail={toggleMail} />
			</div>

			<div id='timeline' className='mb-10'>
				<Timeline />
			</div>
			<div id='skills' className='mb-10'>
				<Skills />
			</div>

			<div id='portfolio' className='mb-10'>
				<Workcomp />
			</div>

			<Contact stat={status} toggleMail={toggleMail} />

			{/* <Alert /> <div id="blogs">
        <Portfolio />
    
      </div> */}
			<Footers />
		</div>
	);
};

export default Landing;
