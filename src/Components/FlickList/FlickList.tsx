import { useReport } from '../../Services/ReportProvider';
import { Link } from 'react-router-dom';

import FlickCell from '../FlickCell/FlickCell';

import './FlickList.css';

const FlickList: React.FC = () => {
	const { report } = useReport();
	return (
		<div>
			{report.map((flick) => (
				// will eventually move this out into a ListItem
				// need to find a better way to style this. remove text styling for sure...
				<Link
					key={flick.id}
					to={`/film/${flick.id}`}
					className='link-div'>
					<div key={flick.id}>
						<FlickCell flick={flick} />
					</div>
				</Link>
			))}
		</div>
	);
};

export default FlickList;
