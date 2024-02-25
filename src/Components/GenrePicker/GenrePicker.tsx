import { useEffect, useState } from 'react';

import { useReport } from '../../Services/ReportProvider';
import { fetchGenre } from '../../Services/apiService';
import { Genre, GenreId } from '../../Interfaces/Genre';

const GenrePicker: React.FC = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre>(Genre.SciFi);
	const { setReport } = useReport();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const results = await fetchGenre(GenreId.getId(selectedGenre));
				// hopefully this updates the global state
				setReport(results);
			} catch (error) {
				console.error('Failed to fetch genre:', error);
			}
		};

		fetchData();
	}, [selectedGenre, setReport]);

	return (
		<select
			value={selectedGenre}
			onChange={(e) => setSelectedGenre(parseInt(e.target.value))}>
			{Object.entries(Genre)
				// genres all have a visible numeric key for some reason, so filter those out
				.filter(([key]) => isNaN(Number(key)))
				.map(([key, _]) => {
					const genreEnum = Genre[key as keyof typeof Genre];
					const genreId = GenreId.getId(genreEnum);
					return (
						<option
							key={genreId}
							value={genreEnum}>
							{key}
						</option>
					);
				})}
		</select>
	);
};

export default GenrePicker;
