import axios from 'axios';

// instantiate the api client
const apiClient = axios.create({
	baseURL: 'https://api.themoviedb.org',
});

// including the api key here only because this is just a project -
// otherwise I would keep the key in an .env file that is ignored by git
function params(genreId: number) {
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

export const fetchGenre = async (genreId: number) => {
	try {
		const response = await apiClient.get('/3/discover/movie', {
			params: params(genreId),
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
		console.error('There was an error fetching the data:', error);
		throw error;
	}
};

export default apiClient;
