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

export class GenreId {
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
}
