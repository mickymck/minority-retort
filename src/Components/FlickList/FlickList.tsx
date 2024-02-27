import { useReport } from '../../services/ReportProvider';
import { Link } from 'react-router-dom';

import GenrePicker from '../GenrePicker/GenrePicker';
import FlickCell from '../FlickCell/FlickCell';

import './FlickList.css';

const FlickList: React.FC = () => {
	const { report, selectedGenre } = useReport();
	let pageNumber = 1;
	return (
		<div>
			<h1
				id='app-header'
				aria-label='Minority Retort site header'>
				Minority Retort.
			</h1>
			<GenrePicker />
			<div
				id='list-container'
				aria-label={`${selectedGenre} film list`}>
				{report.map((flick) => (
					// need to find a better way to style this. remove text styling for sure...
					<Link
						key={flick.id}
						to={`/film/${flick.id}`}
						className='cell-div'
						aria-label={`${flick.title} details link`}>
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
