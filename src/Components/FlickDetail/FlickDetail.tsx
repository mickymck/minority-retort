import { useParams } from 'react-router-dom';
import { useReport } from '../../Services/ReportProvider';

import NavigationBar from '../NavigationBar/NavigationBar';
import Flick from '../../Interfaces/Flick';

import './FlickDetail.css';

const FlickDetail: React.FC<{}> = ({}) => {
	// will need to fetch movie details based on id if I want additional?
	// or should I just pass the object in as a param?
	const { id } = useParams();
	const { report } = useReport();

	// turn flickId into a number

	const flick = report.find((flick) => flick.id === parseInt(id || '0')) as  // getting a little more explicit here, for extra type safety (overkill?)
		| Flick
		| undefined;

	return (
		<div className='container-div'>
			<NavigationBar
				title={flick?.title || 'Unknown Title'}
				back
			/>
		</div>
	);
};

export default FlickDetail;
