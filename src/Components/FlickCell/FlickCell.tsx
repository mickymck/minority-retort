import React, { useRef } from 'react';
import Flick from '../../Interfaces/Flick';
import { useDynamicTitleSize } from '../../Hooks/DynamicTitleSize';

import './FlickCell.css';

interface FlickCellProps {
	flick: Flick;
}

const FlickCell: React.FC<FlickCellProps> = ({ flick }) => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const fontSize = useDynamicTitleSize(titleRef, 24);

	return (
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
				<div className='title-container'>
					<p
						ref={titleRef}
						className='responsive-title'
						style={{ fontSize: `${fontSize}px` }}>
						{flick.title}
					</p>
				</div>
				<p className='release-text'>released: {flick.releaseDate}</p>
			</div>
		</div>
	);
};

export default FlickCell;
