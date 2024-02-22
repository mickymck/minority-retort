import React from 'react';
import { useNavigate } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = ({ title, back }: { title?: string; back?: boolean }) => {
	const navigate = useNavigate();

	// get the button styled and center that title
	return (
		<div className='navbar'>
			{back && (
				<button
					className='navbar-back'
					onClick={() => navigate(-1)}>
					Back
				</button>
			)}
			{title && <h1 className='navbar-title'>{title}</h1>}
		</div>
	);
};

export default NavigationBar;
