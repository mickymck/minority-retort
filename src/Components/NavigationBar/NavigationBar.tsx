import { useNavigate } from 'react-router-dom';

import './NavigationBar.css';

// I originally had title and back as optionals, but I'll want them for each detail view
// so they are required, and I'll give title a default value if it's not provided
const NavigationBar = ({ title, back }: { title: string; back: boolean }) => {
	const navigate = useNavigate();

	// get the button styled and center that title
	return (
		<div className='navbar'>
			<div className='back-div'>
				<button
					className='navbar-back'
					onClick={() => navigate(-1)}>
					{`< Back`}
				</button>
			</div>
			<div className='title-div'>
				<h1 className='navbar-title'>{title}</h1>
			</div>
			<div className='empty-div'></div>
		</div>
	);
};

export default NavigationBar;
