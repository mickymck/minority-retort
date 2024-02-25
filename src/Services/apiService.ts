import axios from 'axios';

import Flick from '../Interfaces/Flick';

// instantiate the api client
const apiClient = axios.create({
	baseURL: 'https://api.themoviedb.org',
});

// including the api key here only because this is just a project -
// otherwise I would keep the key in an .env file that is ignored by git
const params = {
	with_genres: 878,
	with_original_language: 'en',
	include_adult: false,
	include_video: true,
	page: 1,
	sort_by: 'release_date.desc',
	'release_date.lte': '2024-02-26',
	api_key: '24c2e90ec5ce7ffc6f15799fa99c8703',
};

export const fetchSciFi = async () => {
	try {
		const response = await apiClient.get('/3/discover/movie', {
			params: params,
		});
		return response.data.results.map((item: any) => ({
			id: item.id,
			title: item.title,
			releaseDate: item.release_date,
			popularity: item.popularity,
			imageUrl: item.poster_path,
		}));
	} catch (error) {
		// handle this error eventually, but for now console log it and throw
		console.error('There was an error fetching the data:', error);
		throw error;
	}
};

export default apiClient;
