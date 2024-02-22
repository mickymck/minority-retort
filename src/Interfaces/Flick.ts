interface Flick {
	id: number;
	title: string;
	releaseDate: Date;
	popularity: number;
	imageUrl: string;
}

class Flick {
	id: number;
	title: string;
	releaseDate: Date;
	popularity: number;
	imageUrl: string;

	constructor(
		id: number,
		title: string,
		releaseDate: string,
		popularity: number,
		imageUrl: string
	) {
		this.id = id;
		this.title = title;
		this.releaseDate = new Date(releaseDate);
		this.popularity = popularity;
		this.imageUrl = imageUrl;
	}
}

export default Flick;
