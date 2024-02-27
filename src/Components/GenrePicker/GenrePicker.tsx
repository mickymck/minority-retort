import { useEffect } from 'react';

import { useReport } from '../../services/ReportProvider';
import { fetchGenre } from '../../services/apiService';
import { Genre, GenreDetails } from '../../interfaces/Genre';

import './GenrePicker.css';

const GenrePicker: React.FC = () => {
	const { selectedGenre, setSelectedGenre, setReport } = useReport();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const results = await fetchGenre(
					GenreDetails.getId(selectedGenre)
				);
				// hopefully this updates the global state
				setReport(results);
			} catch (error) {
				console.error('Failed to fetch genre:', error);
			}
		};

		fetchData();
	}, [selectedGenre, setReport]);

	return (
		<div>
			<select
				id='genre-picker'
				value={selectedGenre}
				aria-label='Select a genre'
				onChange={(e) => setSelectedGenre(parseInt(e.target.value))}>
				{Object.entries(Genre)
					// genres all have a visible numeric key for some reason, so filter those out
					.filter(([key]) => isNaN(Number(key)))
					.map(([key, _]) => {
						const genreEnum = Genre[key as keyof typeof Genre];
						const genreId = GenreDetails.getId(genreEnum);
						return (
							<option
								aria-label={`${GenreDetails.getName(
									genreEnum
								)}`}
								key={genreId}
								value={genreEnum}>
								{key}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export default GenrePicker;
