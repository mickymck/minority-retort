// FlickList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import Flick from '../../Interfaces/Flick';
import './FlickList.css';

interface FlickListProps {
	report: Flick[];
}

const FlickList: React.FC<FlickListProps> = ({ report }) => {
	return (
		<div>
			{report.map((flick) => (
				// will eventually move this out into a ListItem
				// need to find a better way to style this. remove text styling for sure...
				<Link
					key={flick.id}
					to={`/film/${flick.id}`}>
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
							{
								// get rid of this timestamp!
								<p>
									released:{' '}
									{flick.releaseDate.toLocaleString()}
								</p>
							}
							<p>Popularity: {flick.popularity}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default FlickList;
