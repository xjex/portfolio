import React, { useEffect, useState } from 'react';
import Home from '../../Components/Landing-Components/Home';
import Blog from '../BlogPage/Blog';
import Timeline from '../../Components/Landing-Components/Timeline';
import Footers from '../../Components/Footers';
import Alert from '../../Components/Alert';
import Nav from '../../Components/Nav';
import Projects from '../../Components/Projects';
import Portfolio from '../../Components/Blog-Components/BlogsV2';
import Contact from '../../Components/Landing-Components/Contact';
import Skills from '../../Components/Landing-Components/Skills';
import Workcomp from '../../Components/Landing-Components/Workcomp';

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
		<div class=' bg-gradient-to-br from-blue-500 to-red-700 '>
			<Home toggleMail={toggleMail} />

			{/* <div id="projects">
        <Projects />
      </div> */}

			<div id='timeline'>
				<Timeline />
			</div>
			<Skills />
			<Workcomp />

			<Contact stat={status} toggleMail={toggleMail} />

			{/* <Alert /> <div id="blogs">
        <Portfolio />
    
      </div> */}
			<Footers />
		</div>
	);
};

export default Landing;
