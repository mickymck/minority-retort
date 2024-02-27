import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { GenreDetails } from '../../interfaces/Genre';
import { useReport } from '../../services/ReportProvider';
import { fetchFlick } from '../../services/apiService';

import './FlickDetail.css';

const FlickDetail: React.FC<{}> = ({}) => {
	// should probably rename useReport now that it's not just for reports
	const { selectedGenre, selectedFlick, setSelectedFlick } = useReport();
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			if (id === undefined) {
				console.error('Flick ID is undefined');
				return;
			}
			try {
				const idNumber = parseInt(id, 10);
				if (!isNaN(idNumber)) {
					console.log('id: ', idNumber);
					const result = await fetchFlick(idNumber);
					setSelectedFlick(result);
				} else {
					console.error('Flick ID is not a number');
				}
			} catch (error) {
				console.error('Failed to fetch genre:', error);
			}
		};
		if (id) fetchData();
	}, [id]);

	return (
		<div id='detail-container'>
			<div id='close-button-div'>
				<button
					id='close-button'
					aria-label='Close Flick Detail'
					onClick={() => navigate(-1)}>
					X
				</button>
			</div>
			<div id='detail-traits-div'>
				<div id='detail-poster-div'>
					<img
						key={selectedGenre}
						src={`https://image.tmdb.org/t/p/w200${selectedFlick?.imageUrl}`}
						alt={`${selectedFlick.title} poster`}
						id='detail-poster'
						onError={(e) => {
							// Fallback to genreImage if flick image fails to load
							e.currentTarget.src =
								GenreDetails.getImage(selectedGenre);
						}}
					/>
				</div>
				<div id='detail-text-div'>
					<h2 id='detail-title'>{selectedFlick?.title}</h2>
					<p>{selectedFlick?.overview}</p>
					<div id='detail-release-date'>
						<p>release date: {selectedFlick?.releaseDate}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlickDetail;
