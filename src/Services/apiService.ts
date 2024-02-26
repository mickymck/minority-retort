import axios from 'axios';
import Flick from '../interfaces/Flick';

// instantiate the api client
const apiClient = axios.create({
	baseURL: 'https://api.themoviedb.org',
});

// including the api key here only because this is just a project -
// otherwise I would keep the key in an .env file that is ignored by git
function genreParams(genreId: number) {
	return {
		with_genres: genreId,
		with_original_language: 'en',
		include_adult: false,
		include_video: true,
		page: 1,
		sort_by: 'release_date.desc',
		'release_date.lte': '2024-02-26',
		api_key: '24c2e90ec5ce7ffc6f15799fa99c8703',
	};
}

function flickParams() {
	return {
		api_key: '24c2e90ec5ce7ffc6f15799fa99c8703',
	};
}

export const fetchGenre = async (genreId: number) => {
	try {
		const response = await apiClient.get('/3/discover/movie', {
			params: genreParams(genreId),
		});
		console.log(
			'fetchGenre called.  count: ',
			response.data.results.length
		);
		return response.data.results.map((item: any) => ({
			id: item.id,
			title: item.title,
			releaseDate: item.release_date,
			popularity: item.popularity,
			imageUrl: item.poster_path,
			overview: item.overview,
		}));
	} catch (error) {
		// handle this error eventually, but for now console log it and throw
		console.error('There was an error fetching the report:', error);
		throw error;
	}
};

export const fetchFlick = async (flickId: number) => {
	try {
		console.log('params: ', flickParams());
		const response = await apiClient.get(`/3/movie/${flickId}`, {
			params: flickParams(),
		});
		const flick = response.data;
		console.log('fetchFlick called title: ', flick.title);
		const selectedFlick: Flick = {
			id: flick.id,
			title: flick.title,
			releaseDate: flick.release_date,
			popularity: flick.popularity,
			imageUrl: flick.poster_path,
		};
		return selectedFlick;
	} catch (error) {
		// handle this error eventually, but for now console log it and throw
		console.error('There was an error fetching the flick:', error);
		throw error;
	}
};

export default apiClient;
