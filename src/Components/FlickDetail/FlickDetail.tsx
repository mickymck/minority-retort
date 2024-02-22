import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';

const FlickDetail: React.FC<{}> = ({}) => {
	// will need to fetch movie details based on id if I want additional?
	// or should I just pass the object in as a param?
	const { flickId } = useParams();
	const navigate = useNavigate();
	return (
		<div>
			<NavigationBar
				title={flickId}
				back
			/>
		</div>
	);
};

export default FlickDetail;
