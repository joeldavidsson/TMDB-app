const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiMjZmODU0ZTM2ZDIxZjUwYmU3YmQxYzBiNzUwMCIsInN1YiI6IjY1MDE4NTk3NTU0NWNhMDBlMWIwMzdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-A4tEse5fs8ynlbHl7jubJL-x4NI19cvXnwzp6VGmhk",
	},
};

export const fetchTopRated = async (callback, page) => {
	const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-SE&page=${page}`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};

export const fetchPopular = async (callback, page) => {
	const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};

export const fetchImage = (imgPath) => {
	return `https://image.tmdb.org/t/p/w154${imgPath}`;
};

export const fetchDetails = async (titleId, callback) => {
	const url = `https://api.themoviedb.org/3/movie/${titleId}`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};
/* const api_key = "api_key=b90b26f854e36d21f50be7bd1c0b7500"; */
