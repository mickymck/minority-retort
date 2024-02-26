import { useReport } from '../../services/ReportProvider';
import { Link } from 'react-router-dom';

import GenrePicker from '../GenrePicker/GenrePicker';
import FlickCell from '../FlickCell/FlickCell';

import './FlickList.css';

const FlickList: React.FC = () => {
	const { report } = useReport();
	let pageNumber = 1;
	return (
		<div>
			<h1 id='app-header'>Minority Retort.</h1>
			<GenrePicker />
			<div id='list-container'>
				{report.map((flick) => (
					// need to find a better way to style this. remove text styling for sure...
					<Link
						key={flick.id}
						to={`/film/${flick.id}`}
						className='cell-div'>
						<FlickCell flick={flick} />
					</Link>
				))}
			</div>
			<div id='page-number-div'>
				<button>
					<p>{`<`}</p>
				</button>
				<p>{pageNumber}</p>
				<button>
					<p>{`>`}</p>
				</button>
			</div>
		</div>
	);
};

export default FlickList;
