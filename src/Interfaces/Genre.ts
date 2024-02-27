import action from '../assets/images/action.png';
import comedy from '../assets/images/comedy.png';
import documentary from '../assets/images/documentary.png';
import drama from '../assets/images/drama.png';
import family from '../assets/images/family.png';
import fantasy from '../assets/images/fantasy.png';
import horror from '../assets/images/horror.png';
import romance from '../assets/images/romance.png';
import scifi from '../assets/images/scifi.png';
import western from '../assets/images/western.png';

export enum Genre {
	Action,
	Comedy,
	Documentary,
	Drama,
	Family,
	Fantasy,
	Horror,
	Romance,
	SciFi,
	Western,
}

export class GenreDetails {
	static getId(genre: Genre): number {
		switch (genre) {
			case Genre.Action:
				return 28;
			case Genre.Comedy:
				return 35;
			case Genre.Documentary:
				return 99;
			case Genre.Drama:
				return 18;
			case Genre.Family:
				return 10751;
			case Genre.Fantasy:
				return 14;
			case Genre.Horror:
				return 27;
			case Genre.Romance:
				return 10749;
			case Genre.SciFi:
				return 878;
			case Genre.Western:
				return 37;
			default:
				return 878;
		}
	}

	static getImage(genre: Genre): string {
		switch (genre) {
			case Genre.Action:
				return action;
			case Genre.Comedy:
				return comedy;
			case Genre.Documentary:
				return documentary;
			case Genre.Drama:
				return drama;
			case Genre.Family:
				return family;
			case Genre.Fantasy:
				return fantasy;
			case Genre.Horror:
				return horror;
			case Genre.Romance:
				return romance;
			case Genre.SciFi:
				return scifi;
			case Genre.Western:
				return western;
			default:
				return scifi;
		}
	}

	static getName(genre: Genre): string {
		switch (genre) {
			case Genre.Action:
				return 'Action';
			case Genre.Comedy:
				return 'Comedy';
			case Genre.Documentary:
				return 'Documentary';
			case Genre.Drama:
				return 'Drama';
			case Genre.Family:
				return 'Family';
			case Genre.Fantasy:
				return 'Fantasy';
			case Genre.Horror:
				return 'Horror';
			case Genre.Romance:
				return 'Romance';
			case Genre.SciFi:
				return 'SciFi';
			case Genre.Western:
				return 'Western';
			default:
				return 'SciFi';
		}
	}
}

export class GenreId {}
