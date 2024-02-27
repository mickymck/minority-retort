import React, { useRef } from 'react';
import { useDynamicTitleSize } from '../../hooks/DynamicTitleSize';
import { useReport } from '../../services/ReportProvider';
import { GenreDetails } from '../../interfaces/Genre';
import Flick from '../../interfaces/Flick';

import './FlickCell.css';

interface FlickCellProps {
	flick: Flick;
}

const FlickCell: React.FC<FlickCellProps> = ({ flick }) => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const fontSize = useDynamicTitleSize(titleRef, 24);
	const { selectedGenre } = useReport();

	return (
		<div
			key={flick.id}
			id='cell-container'>
			<div id='cell-poster-div'>
				<img
					key={selectedGenre}
					src={`https://image.tmdb.org/t/p/w200${flick.imageUrl}`}
					alt={`${flick.title} poster`}
					id='cell-poster'
					onError={(e) => {
						// Fallback to genreImage if flick image fails to load
						e.currentTarget.src =
							GenreDetails.getImage(selectedGenre);
						e.currentTarget.alt = `${GenreDetails.getName(
							selectedGenre
						)} genre default image`;
					}}
				/>
			</div>
			<div id='cell-deets-div'>
				<div id='cell-title-container'>
					<p
						ref={titleRef}
						className='responsive-title'
						style={{ fontSize: `${fontSize}px` }}>
						{flick.title}
					</p>
				</div>
				<p id='cell-sub-text'>released: {flick.releaseDate}</p>
			</div>
		</div>
	);
};

export default FlickCell;
