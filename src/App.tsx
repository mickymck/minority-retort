import { useState, useEffect } from 'react';
import { fetchSciFi } from './Services/apiService';
import { Flick } from './Models/Flick';

import './App.css';

function App() {
	const [report, setReport] = useState([]);

	useEffect(() => {
		const getFlicks = async () => {
			try {
				const response = await fetchSciFi();
				const responseFlicks = response.results.map(
					(item: any) =>
						new Flick(
							item.id,
							item.title,
							item.release_date,
							item.popularity,
							item.poster_path
						)
				);
				setReport(responseFlicks);
			} catch (error) {
				console.error('Could not load users', error);
			}
		};

		getFlicks();
		// note: this empty dependency array means this effect runs only once on mount
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<p>Minority Retort.</p>
				<div>
					{report.map((flick: Flick) => (
						<div
							key={flick.id}
							className='flick-cell-div'>
							<div className='flick-pic-div'>
								<img
									src={`https://image.tmdb.org/t/p/w200${flick.imageUrl}`}
									alt={flick.title}
									className='flick-pic'
								/>
							</div>
							<div className='flick-deets-div'>
								<h2>{flick.title}</h2>
								{/* <p>
									Released:{' '}
									{flick.releaseDate.toLocaleString()}
								</p> */}
								<p>Popularity: {flick.popularity}</p>
							</div>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
