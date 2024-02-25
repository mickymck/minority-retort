import { useReport } from '../../Services/ReportProvider';
import { Link } from 'react-router-dom';

import FlickCell from '../FlickCell/FlickCell';

import './FlickList.css';

const FlickList: React.FC = () => {
	const { report } = useReport();
	return (
		<div className='flicklist-container'>
			{report.map((flick) => (
				// need to find a better way to style this. remove text styling for sure...
				<Link
					key={flick.id}
					to={`/film/${flick.id}`}
					className='link-div'>
					<FlickCell flick={flick} />
				</Link>
			))}
		</div>
	);
};

export default FlickList;
