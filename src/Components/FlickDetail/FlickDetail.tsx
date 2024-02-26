import { useParams, useNavigate } from 'react-router-dom';

import { useReport } from '../../services/ReportProvider';
import { GenreDetails } from '../../interfaces/Genre';

import Flick from '../../interfaces/Flick';

import './FlickDetail.css';

const FlickDetail: React.FC<{}> = ({}) => {
	// will need to fetch movie details based on id if I want additional?
	// or should I just pass the object in as a param?
	const { id } = useParams();
	const { report, selectedGenre } = useReport();
	const navigate = useNavigate();

	// turn flickId into a number

	const flick = report.find((flick) => flick.id === parseInt(id || '0')) as  // getting a little more explicit here, for extra type safety (overkill?)
		| Flick
		| undefined;

	return (
		<div id='detail-container'>
			<div id='close-button-div'>
				<button
					id='close-button'
					onClick={() => navigate(-1)}>
					X
				</button>
			</div>
			<div id='detail-traits-div'>
				<div id='detail-poster-div'>
					<img
						key={selectedGenre}
						src={`https://image.tmdb.org/t/p/w200${flick?.imageUrl}`}
						alt={flick?.title}
						id='detail-poster'
						onError={(e) => {
							// Fallback to genreImage if flick image fails to load
							e.currentTarget.src =
								GenreDetails.getImage(selectedGenre);
						}}
					/>
				</div>
				<div id='detail-text-div'>
					<h2 id='detail-title'>{flick?.title}</h2>
					<p>{flick?.overview}</p>
					<div id='detail-release-date'>
						<p>release date: {flick?.releaseDate}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlickDetail;
