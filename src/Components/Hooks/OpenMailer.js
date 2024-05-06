import { useEffect, useState } from 'react';
import React from 'react';

const OpenMailer = () => {
	const [open, setOpen] = useState(false);

	console.log('set to', open, 'mail is');

	return {
		open,
		setOpen
	};
};

export default OpenMailer;
