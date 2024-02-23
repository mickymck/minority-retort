import Flick from '../../Interfaces/Flick';

import './FlickCell.css';

interface FlickCellProps {
	flick: Flick;
}

const FlickCell: React.FC<FlickCellProps> = ({ flick }) => {
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
				<h2>{flick.title}</h2>
				{
					// get rid of this timestamp!
					<p>released: {flick.releaseDate.toLocaleString()}</p>
				}
				<p>
					Popularity:{' '}
					{
						// get rid of this eventually, since what even is popularity?
						// waiting until I can find something better to replace it with
						flick.popularity
					}
				</p>
			</div>
		</div>
	);
};

export default FlickCell;
